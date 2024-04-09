enum LinkVariants {
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
  SUCCESS = "success",
  WARNING = "warning",
}

interface LinkProps {
  label: string;
  variant: LinkVariants;
  href?: string;
  onClick?: () => void;
  classNames?: string;
  target?: string;
}

export { LinkProps, LinkVariants };
