enum LabelTypes {
  LINK = "link",
  TEXT = "text",
}

enum LabelVariants {
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
  SUCCESS = "success",
  WARNING = "warning",
}

interface LabelProps {
  type: LabelTypes;
  label: string;
  variant: LabelVariants;
  href?: string;
  classNames?: string;
  target?: string;
}

export { LabelTypes, LabelVariants, LabelProps };