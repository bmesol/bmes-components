import { useModel, ShareIcon } from "../../index";
import { ShareLinkForm } from "./ShareLinkForm";
import React from "react";

const ShareLink = (props: { url: string, color?: string }) => {
  const model = useModel();

  const handleShareButton = () => {
    navigator.clipboard.writeText(props.url);
    model.open({
      title: "Share Link",
      content: <ShareLinkForm url={props.url} />,
    });
  };

  return <ShareIcon onClick={handleShareButton} color={props.color} />;
};

export { ShareLink };
