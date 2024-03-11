import React, { createContext } from "react";
import { ModelContext } from "./ModelContext";
import { ModelProviderProps } from "./DTOs";
import { useModel } from "./useModel";
import { Model } from "./Model";

const ModelProvider = ({ children }: ModelProviderProps) => {
  const { contextValue, models } = useModel();
  return (
    <ModelContext.Provider value={contextValue}>
      {children}
      {models &&
        models.map((model) => {
          return (
            <Model
              content={model.content}
              title={model.title}
              description={model.description}
              submitLabel={model.submitLabel}
              cancelLabel={model.cancelLabel}
              onSubmit={model.onSubmit}
              onCancel={model.onCancel}
              isOpen={true}
            />
          );
        })}
    </ModelContext.Provider>
  );
};

export { ModelProvider };
