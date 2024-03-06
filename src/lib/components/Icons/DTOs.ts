const sizes = {
  sm: { width: "25", height: "12" },
  md: { width: "50", height: "24" },
  lg: { width: "75", height: "36" },
  xl: { width: "100", height: "48" },
  xxl: { width: "125", height: "60" },
};

interface IconProps {
  size?: keyof typeof sizes;
  onClick?: () => void;
  color?: string;
}

export { IconProps, sizes };
