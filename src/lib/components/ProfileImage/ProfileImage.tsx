import { ProfileImageProps, ProfileImageSizes } from "./DTOs";
import { useProfileImage } from "./useProfileImage";
import "./ProfileImage.scss";
import React from "react";

const ProfileImage = ({ imgURL, alt = "", size }: ProfileImageProps) => {
  const { profileText } = useProfileImage({ alt });
  return (
    <>
      {imgURL ? (
        <img src={imgURL} alt="Profile" className={`${size} img-layout`} />
      ) : (
        <div className={`${size} text-layout d-flex justify-content-center align-items-center`}>
          {profileText}
        </div>
      )}
    </>
  );
};

export { ProfileImage, ProfileImageSizes };
