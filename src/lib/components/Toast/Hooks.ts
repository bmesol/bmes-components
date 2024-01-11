import { useEffect, useMemo, useRef, useState } from "react";
import { ToastType } from "./DTOs";

const useToastHook = () => {
  const useTimeout = (callbackFunction: () => void) => {
    const savedCallback = useRef(callbackFunction);
    useEffect(() => { savedCallback.current = callbackFunction }, [callbackFunction]);
    useEffect(() => { const functionId = setTimeout(() => savedCallback.current(), 3000); return () => clearTimeout(functionId) }, [])};

  const [toasts, setToasts] = useState<ToastType[]>([]);

  const addToast = (message: string, heading?: string, variant?: string) => {
    const newToast = { id: Date.now(), message, heading, variant };
    setToasts((previousToasts) => [...previousToasts, newToast]);
  };

  const info = (message: string, heading?: string) => addToast(message, heading, "default");
  const success = (message: string, heading?: string) => addToast(message, heading, "success");
  const warning = (message: string, heading?: string) => addToast(message, heading, "warning");
  const error = (message: string, heading?: string) => addToast(message, heading, "danger");

  const closeToast = (id: number) => {
    setToasts((previousToast) => previousToast.filter((toast) => toast.id !== id));
  };

  const contextValue = useMemo(() => ({
      info: info,
      success: success,
      warning: warning,
      error: error,
      close: closeToast,
   }), []);

  return {
    useTimeout,
    contextValue,
    toasts,
    closeToast
  };
};

export { useToastHook };