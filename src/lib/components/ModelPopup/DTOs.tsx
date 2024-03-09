interface ModelPopupTypes {
  children: React.ReactNode;
  classNames?: string;
}

interface ModelPopupProps {
  isModelPopupOpen: boolean;
  onModelPopupOpenChange: any;
  children: React.ReactNode;
}

export { ModelPopupTypes, ModelPopupProps };
