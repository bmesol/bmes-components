import React from "react";

const Preview = ({ children, classNames = "" }: { children: React.ReactNode, classNames?: string }) => {
  return (
    <>
      <div className={`d-flex justify-content-center align-items-center border-2 p-5 my-4 ${classNames}`}>{children}</div>
    </>
  );
};

export { Preview };
