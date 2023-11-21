import React from "react";
import "./TextBox.css";

export enum TextBoxVariants {
  TEXT = "text",
  NUMBER = "number",
  EMAIL = "email",
  PIN = "password",
}

export interface TextBoxProps {
  label: string;
  type: TextBoxVariants;
  className?: string;
}

export const TextBox = ({ label, type, className }: TextBoxProps) => {
  return (
    <input
      type={`${type}`}
      placeholder={`${label}`}
      className={`text-box ${type} ${className}`}
    />
  );
};