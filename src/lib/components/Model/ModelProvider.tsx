import React from "react";
import { ModelContext } from "./ModelContext";
import { ModelProviderProps } from "./DTOs";
import { useModel } from "./useModel";
import { Model } from "./Model";

const ModelProvider = ({ children }: ModelProviderProps) => {
  const { contextValue, model } = useModel();
  return (
    <ModelContext.Provider value={contextValue}>
      {children}
      {model && (
        <Model
          key={Date.now()}
          content={model.content}
          title={model.title}
          description={model.description}
          close={() => contextValue.close()}
        />
      )
      }
    </ModelContext.Provider>
  );
};

export { ModelProvider };
