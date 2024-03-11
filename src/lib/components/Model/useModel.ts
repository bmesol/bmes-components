import { useState, useMemo } from "react";
import { ModelProps } from "./DTOs";

const createModel = (props: ModelProps) => {
  return { ...props };
};

const useModel = () => {
  const [models, setModels] = useState<ModelProps[]>([]);

  const addModel = (props: ModelProps) => {
    setModels(() => [createModel(props)]);
  };

  const contextValue = useMemo(() => ({
    open: (props: any) => addModel(props)
  }), []);

  return {
    contextValue,
    models,
  };
};

export { useModel };
