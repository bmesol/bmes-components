import { InfoIcon } from "lucide-react";
import { Tooltip } from "../../lib";
import React from "react";

const meta = {
  title: "Components/Tooltip",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const SampleTooltip = {
  render: () => {
    return (
      <>
        <Tooltip trigger={<InfoIcon />}>
          <p>Tooltip content</p>
        </Tooltip>
      </>
    );
  },
};
