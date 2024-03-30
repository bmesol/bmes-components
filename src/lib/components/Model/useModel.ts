import { useState, useMemo } from "react";
import { ModelOpenProps } from "./DTOs";

const useModel = () => {
  const [model, setModel] = useState<ModelOpenProps | undefined>(undefined);
  const open = (props: ModelOpenProps) => setModel(props);

  const close = () => setModel(undefined);

  const contextValue = useMemo(
    () => ({ open, close }), [open, close]
  );

  return {
    contextValue,
    model,
  };
};

export { useModel };
