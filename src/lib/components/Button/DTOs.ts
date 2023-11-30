// --- Enum defining different variants of the Button ---
enum ButtonVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  WARNING = "warning",
  DANGER = "danger",
  OUTLINE_PRIMARY = "outline-primary",
  OUTLINE_SECONDARY = "outline-secondary",
  OUTLINE_SUCCESS = "outline-success",
  OUTLINE_WARNING = "outline-warning",
  OUTLINE_DANGER = "outline-danger",
}

// --- Props interface for the Button component ---
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant: ButtonVariants;
  className?: string;
  isDisabled?: boolean;
}

export { ButtonVariants, ButtonProps };