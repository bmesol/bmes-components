import { useLoadingContext } from "./LoadingContext";
import { LoadingProvider } from "./LoadingProvider";
import { LoadingProps } from "./DTOs";
import React from "react";
import "./Loading.scss";

const Loading = (props: LoadingProps) => {
  const { isVisible } = props;
  return (
    <>
      {isVisible && (
        <>
          <div className="vw-100 vh-100 p-0 m-0 d-flex justify-content-center align-items-center spinner">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export { Loading, LoadingProvider, useLoadingContext as useLoading };
