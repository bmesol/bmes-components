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

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant: ButtonVariants;
  classNames?: string;
  isDisabled?: boolean;
}

export { ButtonVariants, ButtonProps };