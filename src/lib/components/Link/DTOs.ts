enum LinkVariants {
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
  SUCCESS = "success",
  WARNING = "warning",
}

enum LinkTargetTypes {
  SELF = "_self",
  BLANK = "_blank",
  PARENT = "_parent",
  TOP = "_top",
}

interface LinkProps {
  label: string;
  variant: LinkVariants;
  href?: string;
  target?: LinkTargetTypes;
  onClick?: () => void;
  classNames?: string;
}

export { LinkProps, LinkVariants, LinkTargetTypes };
