// --- Props interface for the TextBox component ---
interface TextBoxProps {
  label?: string;
  regex?: string;
  length?: number;
  required?: boolean;
  placeholder?: string;
  classNames?: string;
}

export { TextBoxProps };