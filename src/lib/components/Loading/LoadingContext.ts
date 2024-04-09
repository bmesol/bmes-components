import { createContext, useContext } from "react";
import { LoadingContextValues } from "./DTOs";

const defaultLoadingContextValues: LoadingContextValues = {
  show: () => {},
  hide: () => {},
};

const LoadingContext = createContext<LoadingContextValues>(defaultLoadingContextValues);

const useLoadingContext = () => useContext(LoadingContext);

export { LoadingContext, useLoadingContext };
