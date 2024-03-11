interface ModelTypes {
  children: React.ReactNode;
  classNames?: string;
}

interface ModelProps {
  title?: string;
  description?: string;
  content: React.ReactNode;
  submitLabel?: string;
  cancelLabel?: string;
  onSubmit: () => void;
  onCancel?: () => void;
  isOpen: boolean;
}

interface ModelContextValues {
  open: (
    content: React.ReactNode,
    onSubmit: () => void,
    title?: string,
    description?: string,
    submitLabel?: string,
    cancelLabel?: string,
    onCancel?: () => void
  ) => void;
}

interface ModelProviderProps {
  children: React.ReactElement;
}

export { ModelTypes, ModelProps, ModelContextValues, ModelProviderProps };
