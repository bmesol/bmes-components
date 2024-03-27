import { LoadingContext } from "./LoadingContext";
import { LoadingProviderProps } from "./DTOs";
import { useLoading } from "./useLoading";
import { Loading } from "./Loading";
import React from "react";

const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const { contextValue, isLoading } = useLoading();
  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
      <Loading isVisible={isLoading} />
    </LoadingContext.Provider>
  );
};

export { LoadingProvider };
