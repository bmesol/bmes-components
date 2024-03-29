import { ModelContext } from "./ModelContext";
import { ModelProviderProps } from "./DTOs";
import { useModel } from "./useModel";
import { Model } from "./Model";
import React from "react";

const ModelProvider = ({ children }: ModelProviderProps) => {
  const { contextValue, model } = useModel();
  return (
    <ModelContext.Provider value={contextValue}>
      {children}
      {model && (
        <Model
          content={model.content}
          title={model.title}
          description={model.description}
        />
      )}
    </ModelContext.Provider>
  );
};

export { ModelProvider };
