// --- Enum defining different variants of the Label ---

enum LabelVariants {
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
  SUCCESS = "success",
  WARNING = "warning",
}

// --- Props interface for the Label component ---

interface LabelProps {
  href?: string;
  type: "link" | "text";
  label: string;
  variant: LabelVariants;
  classNames?: string;
}

export { LabelVariants, LabelProps };