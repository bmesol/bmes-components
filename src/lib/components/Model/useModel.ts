import { useState, useMemo } from "react";
import { ModelProps } from "./DTOs";

const useModel = () => {
  const [models, setModels] = useState<ModelProps[]>([]);

  const contextValue = useMemo(
    () => ({ open: (props: ModelProps) => setModels([props]) }), []
  );

  return {
    contextValue,
    models,
  };
};

export { useModel };
