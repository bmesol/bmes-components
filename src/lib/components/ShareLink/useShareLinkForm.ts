import { useState } from "react";

const useShareLinkForm = (props: { url: string }) => {
  const [value, setValue] = useState("Copy");

  const handleCopyLink = () => {
    navigator.clipboard.writeText(props.url);
    setValue("Copied");
  };

  return { value, handleCopyLink };
};

export { useShareLinkForm };
