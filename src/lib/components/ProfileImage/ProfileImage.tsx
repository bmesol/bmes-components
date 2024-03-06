import { useProfileImage } from "./useProfileImage";
import { ProfileImageProps } from "./DTOs";
import "./ProfileImage.scss";
import React from "react";

const ProfileImage = ({ img, alt = "", size }: ProfileImageProps) => {
  const { profileText } = useProfileImage({ alt });
  return (
    <>
      {img ? (
        <img src={img} alt="Profile" className={`${size}`} />
      ) : (
        <div className={`${size} text-layout d-flex justify-content-center align-items-center`}>
          {profileText}
        </div>
      )}
    </>
  );
};

export { ProfileImage };
