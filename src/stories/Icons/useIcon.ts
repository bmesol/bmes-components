import { useToast } from "../../lib";
import { IconProps } from "./DTOs";

const useIcon = ({ name }: {name: string}) => {
  const toast = useToast();
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`<${name} />`);
    toast.success("Copied !");
  };
  return {
    copyToClipboard,
  };
};

export { useIcon };
