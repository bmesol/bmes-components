import React from "react";
import { Button, ButtonVariants } from "../../lib/components/Button/Button";
import {
  TooltipProvider,
  useTooltip,
} from "../../lib/components/Tooltip/Tooltip";

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
      const tooltip = useTooltip();
      return (
        <>
          <Button
            variant={ButtonVariants.PRIMARY}
            label="Toast Info"
            classNames="bg-dark text-bg-dark m-3"
            onClick={() =>
              tooltip.show({
                content: (
                  <>
                    <p>Tooltip Content</p>
                  </>
                ),
              })
            }
          />
        </>
      );
    };
    return (
      <TooltipProvider>
        <App />
      </TooltipProvider>
    );
  },
};
