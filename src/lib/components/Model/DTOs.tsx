interface ModelTypes {
  children: React.ReactNode;
}

interface ModelOpenProps{
  title?: string;
  description?: string;
  content: React.ReactNode;
}

interface ModelProps extends ModelOpenProps {
  close: Function;
}

interface ModelContextValues {
  open: (props: ModelOpenProps) => void;
  close: () => void;
}

interface ModelProviderProps {
  children: React.ReactElement;
}

export { ModelTypes, ModelProps, ModelContextValues, ModelProviderProps, ModelOpenProps };
