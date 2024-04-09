import React from "react";
import { ToastContext } from "./ToastContext";
import { ToastProviderProps } from "./DTOs";
import { useToast } from "./useToast";
import { Toast } from "./Toast";
import "./Toast.scss";

const ToastProvider = ({ children }: ToastProviderProps) => {
  const { contextValue, toasts } = useToast();
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
                close={() => contextValue.close(toast.id)}
              />
            );
          })}
      </div>
    </ToastContext.Provider>
  );
};

export { ToastProvider };