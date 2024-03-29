import { useState, useMemo } from "react";
import { ModelProps } from "./DTOs";

const useModel = () => {
  const [model, setModel] = useState<ModelProps>();

  const open = (props: ModelProps) => setModel(props);

  const close = () => {
    if (model) {
      setModel({ ...model, isOpen: false });
    }
  };

  const contextValue = useMemo(() => ({ open, close }), [open, close]);

  return {
    contextValue,
    model,
  };
};

export { useModel };
