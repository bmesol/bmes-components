import { createContext, useContext } from "react";
import { ModelContextValues } from "./DTOs";

const defaultModelContextValues: ModelContextValues = {
  open: () => {},
  close: () => {}
};

const ModelContext = createContext<ModelContextValues>(defaultModelContextValues);

const useModelContext = () => useContext(ModelContext);

export { ModelContext, useModelContext };
