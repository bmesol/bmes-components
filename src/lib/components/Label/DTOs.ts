enum LabelVariants {
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
  SUCCESS = "success",
  WARNING = "warning",
}

interface LabelProps {
  label: string;
  variant: LabelVariants;
  classNames?: string;
}

export { LabelProps, LabelVariants };
