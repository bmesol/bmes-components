import { Icon } from "../Icon/Icon";
import { icons } from "./IconsList";
import React from "react";

const IconsGallery = () => (
  <div className="row mt-5">
    {icons.map(({ name, icon }) => (
      <div key={name} className="col-2 border border-1 m-2">
        <Icon src={icon} name={name} />
      </div>
    ))}
  </div>
);

export { IconsGallery };
