import React from "react";
import closeIcon from "./../../../assets/Images/close-icon.svg";
import { useToastContext } from "./ToastContext";
import { ToastProvider } from "./ToastProvider"
import { useToast } from "./useToast";
import { ToastProps } from "./DTOs";
import "./Toast.scss";

const Toast = (props: ToastProps) => {
  const { heading, message, variant, close } = props;
  const { useToastAutoClose } = useToast()
  useToastAutoClose(() => { close() });
  return (
    <section>
      <div className={`${variant}`}>
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

export { Toast, ToastProvider, useToastContext as useToast };