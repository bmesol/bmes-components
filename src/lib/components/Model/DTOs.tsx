interface ModelTypes {
  children: React.ReactNode;
}

interface ModelProps {
  title?: string;
  description?: string;
  content: React.ReactNode;
  submitLabel?: string;
  cancelLabel?: string;
  onSubmit: () => boolean;
  onCancel?: () => void;
}

interface ModelContextValues {
  open: (props: ModelProps) => void;
}

interface ModelProviderProps {
  children: React.ReactElement;
}

export { ModelTypes, ModelProps, ModelContextValues, ModelProviderProps };
