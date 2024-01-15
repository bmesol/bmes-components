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
    <div className={`${variant}`}>
      <div className={`d-flex justify-content-between align-items-center`}>
        <div>
          <div className="fw-bold">{heading}</div>
          <span>{message}</span>
        </div>
        <button className="bg-transparent border-0 p-0 m-0" onClick={close}>
          <img src={closeIcon} alt="X" />
        </button>
      </div>
    </div>
  );
};

export { Toast, ToastProvider, useToastContext as useToast };