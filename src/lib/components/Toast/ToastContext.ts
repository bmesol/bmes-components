import { createContext, useContext } from "react";
import { ToastContextValues } from "./DTOs";

const defaultToastContextValues: ToastContextValues = {
  info: () => {},
  success: () => {},
  warning: () => {},
  error: () => {},
  close: () => {},
};

const ToastContext = createContext<ToastContextValues>(defaultToastContextValues);
const useToastContext = () => useContext(ToastContext);

export { ToastContext, useToastContext };