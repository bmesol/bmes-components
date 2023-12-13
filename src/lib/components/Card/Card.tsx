import React from 'react';
import { CardProps } from "./DTOs";
import "./Card.scss";

const Card = (props: CardProps) => {
  const { children, classNames = ""} = props;
  return (
    <div className={`card ${classNames}`}>
      {children}
    </div>
  );
};

export { Card ,CardProps};
