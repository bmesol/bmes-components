enum ProfileImageSizes {
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
}

interface ProfileImageProps {
  imgURL?: React.HTMLProps<HTMLImageElement>["src"];
  alt?: string;
  size?: ProfileImageSizes;
}

export { ProfileImageProps, ProfileImageSizes };
