enum LabelVariants {
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
  SUCCESS = "success",
  WARNING = "warning",
}

interface LabelProps {
  type: "link" | "text";
  label: string;
  variant: LabelVariants;
  href?: string;
  classNames?: string;
  target?: string;
}

export { LabelVariants, LabelProps };