import { InputHTMLAttributes, ForwardedRef } from "react";
interface TextBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  regex?: string;
  length?: number;
  required?: boolean;
  placeholder?: string;
  classNames?: string;
  ref?: ForwardedRef<HTMLInputElement>;
}

export { TextBoxProps };