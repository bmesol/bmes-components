import { LinkProps } from "./DTOs";

const useLink = (props: LinkProps) => {
  const { onClick } = props;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return { handleClick };
};

export { useLink };
