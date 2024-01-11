import React from "react";
import { ToastProps, ToastProviderProps } from "./DTOs";
import closeIcon from "./../../../assets/Images/close-icon.svg";
import { ToastContext, useToast } from "./ToastContext";
import { useToastHook } from "./Hooks";
import "./Toast.scss";

const Toast = (props: ToastProps) => {
  const { heading, message, variant, close } = props;
  const { useTimeout } = useToastHook()
  useTimeout(() => { close() });
  return (
    <section>
      <div id="toast" className={`${variant}`}>
        <div className={`toast-content d-flex justify-content-between align-items-center`}>
          <div>
            <p className="toast-heading p-0 m-0">{heading}</p>
            <p className="toast-message p-0 m-0">{message}</p>
          </div>
          <button className="bg-transparent border-0 p-0 m-0" onClick={close}>
            <img src={closeIcon} alt="X" />
          </button>
        </div>
      </div>
    </section>
  );
};

const ToastProvider = ({ children }: ToastProviderProps) => {
  const { contextValue, toasts, closeToast } = useToastHook();
  return (
      <ToastContext.Provider value={contextValue}>
        {children}
        <div className="toasts">
          {toasts &&
            toasts.map((toast) => {
              return (
                <Toast
                  key={toast.id}
                  message={toast.message}
                  heading={toast.heading}
                  variant={toast.variant}
                  close={() => closeToast(toast.id)}
                />
              );
            })}
        </div>
      </ToastContext.Provider>
  );
};

export { ToastProvider, useToast };