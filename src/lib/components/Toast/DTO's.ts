enum ToastVariants {
  DEFAULT = "default",
  SUCCESS = "success",
  WARNING = "warning",
  DANGER = "danger",
}

interface ToastProps {
  variant: ToastVariants;
  heading: string;
  message: string;
  classNames?: string;
  showToast: boolean;
  onClose: () => void;
}

export { ToastVariants, ToastProps };