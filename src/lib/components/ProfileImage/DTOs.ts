interface ProfileImageProps {
  img?: React.HTMLProps<HTMLImageElement>["src"];
  alt?: string;
  size?: "base" | "sm" | "md" | "lg" | "xl";
}

export { ProfileImageProps };
