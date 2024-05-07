import React from "react";
import "./Badge.scss";

const Badge = ({ label, classNames = "" }:{ label: string, classNames?: string }) => {
  return <div className={`badge ${classNames}`}>{label}</div>;
};

export { Badge };
