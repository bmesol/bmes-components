import { Tooltip } from "../../lib/components/Tooltip/Tooltip";
import { InfoIcon } from "lucide-react";
import React from "react";

const meta = {
  title: "Components/Tooltip",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Sample_Tooltip = {
  render: (children: React.ReactElement): JSX.Element => {
    const App = () => {
      return (
        <>
          <div className="mt-3">
            <Tooltip trigger={<InfoIcon />}>
              <p>Tooltip content</p>
            </Tooltip>
          </div>
        </>
      );
    };
    return <App />;
  },
};
