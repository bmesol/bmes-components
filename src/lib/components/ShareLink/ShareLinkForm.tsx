import { FacebookIcon, GmailIcon, InstagramIcon, LinkedInIcon, TelegramIcon, WhatsAppIcon } from "../../index";
import { useShareLinkForm } from "./useShareLinkForm";
import "./ShareLinkForm.scss";
import React from "react";

const ShareLinkForm = (props: { url: string }) => {
  const { value, handleCopyLink } = useShareLinkForm(props);
  return (
    <>
      <div className="grid grid-cols-3 gap-4 place-items-center share-link-form">
        <WhatsAppIcon onClick={() => window.open("https://web.whatsapp.com", "_blank")} />
        <GmailIcon onClick={() => window.open("https://mail.google.com", "_blank")} />
        <InstagramIcon onClick={() => window.open("https://www.instagram.com", "_blank")} />
        <LinkedInIcon onClick={() => window.open("https://www.linkedin.com", "_blank")} />
        <FacebookIcon onClick={() => window.open("https://www.facebook.com", "_blank")} />
        <TelegramIcon onClick={() => window.open("https://web.telegram.org", "_blank")} />
      </div>
      <div className="d-flex justify-center mt-4 mt-md-0">
        <div className="border p-2">{props.url.length > 15 ? props.url.slice(0, 25) + "..." : props.url}</div>
        <div className="cursor-pointer border p-2" onClick={handleCopyLink}>{value}</div>
      </div>
    </>
  );
};

export { ShareLinkForm };
