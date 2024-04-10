import { CardProps } from "./DTOs";
import React from "react";
import "./Card.scss";

const Card = (props: CardProps) => {
  const { children, classNames = "" } = props;
  return <div className={`card ${classNames}`}>{children}</div>;
};

export { Card };
