interface LoadingProps {
  isVisible: boolean;
}

interface LoadingContextValues {
  show: Function;
  hide: Function;
}

interface LoadingProviderProps {
  children: React.ReactElement;
}

export { LoadingProps, LoadingContextValues, LoadingProviderProps };
