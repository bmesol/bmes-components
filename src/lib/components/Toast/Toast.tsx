import React from "react";
import { ToastVariants, ToastProps } from "./DTO's";
import { Card } from "../Card/Card";
import closeIcon from "./../../../assets/Images/close-icon.svg";
import "./Toast.scss";

const Toast = (props: ToastProps) => {
  const { variant, heading = "", message = "", classNames = "", showToast = false, onClose } = props;
  return (
    <>
      {showToast && (
        <section>
          <Card classNames={`${variant} ${classNames}`}>
            <div className={`d-flex justify-content-between align-items-center`}>
              <div>
                <p className="toast-heading p-0 m-0">{heading}</p>
                <p className="p-0 m-0">{message}</p>
              </div>
              <button className="bg-transparent border-0" onClick={onClose}>
                <img src={closeIcon} />
              </button>
            </div>
          </Card>
        </section>
      )}
    </>
  );
};

export { Toast, ToastVariants };