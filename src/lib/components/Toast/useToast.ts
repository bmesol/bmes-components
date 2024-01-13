import { useEffect, useMemo, useRef, useState } from "react";
import { ToastType, ToastVariants } from "./DTOs";

const useToastAutoClose = (callbackFunction: () => void) => {
  const savedCallback = useRef(callbackFunction);
  useEffect(() => { savedCallback.current = callbackFunction }, [callbackFunction]);
  useEffect(() => { 
    const autoCloseTimer = setTimeout(() => savedCallback.current(), 5000); 
    return () => clearTimeout(autoCloseTimer) }
  , []);
};

const createToast = (variant: ToastVariants, message: string, heading?: string): ToastType => {
  return {
    id: Date.now(),
    heading,
    message,
    variant
  };
};

const useToast = () => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const addToast = (variant: ToastVariants, message: string, heading?: string) => {
    setToasts((previousToasts) => [...previousToasts, createToast(variant, message, heading)]);
  };

  const removeToast = (id: number) => {
    setToasts((previousToast) => previousToast.filter((toast) => toast.id !== id));
  };

  const contextValue = useMemo(() => ({
      info: (message: string, heading?: string) => addToast(ToastVariants.DEFAULT, message, heading),
      success: (message: string, heading?: string) => addToast(ToastVariants.SUCCESS, message, heading),
      warning: (message: string, heading?: string) => addToast(ToastVariants.WARNING, message, heading),
      error: (message: string, heading?: string) => addToast(ToastVariants.DANGER, message, heading),
      close: removeToast,
   }), []);

  return {
    useToastAutoClose,
    contextValue,
    toasts
  };
};

export { useToast };