enum ToastVariants {
  DEFAULT = "default",
  SUCCESS = "success",
  WARNING = "warning",
  DANGER = "danger",
}

interface ToastProps {
  heading?: string;
  message: string;
  close: () => void;
  variant?: string;
}

interface ToastContextValues {
  info: (message: string, heading?: string) => void;
  success: (message: string, heading?: string) => void;
  warning: (message: string, heading?: string) => void;
  error: (message: string, heading?: string) => void;
  close: (id: number) => void;
}

interface ToastProviderProps {
  children: React.ReactElement;
}

interface ToastType {
  heading?: string;
  message: string;
  id: number;
  variant?: ToastVariants;
}

export { ToastVariants, ToastProps, ToastContextValues, ToastProviderProps, ToastType };