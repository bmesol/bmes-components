import { Loading, LoadingProvider } from "../../lib/components/Loading/Loading";
import { Button, ButtonVariants } from "../../lib/components/Button/Button";
import { useLoading } from "../../lib/components/Loading/Loading";
import type { Meta } from "@storybook/react";
import React from "react";

const meta: Meta<typeof Loading> = {
  title: "Components/Loading",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Sample_Loading = {
  render: (children: React.ReactElement): JSX.Element => {
    const App = () => {
      const loading = useLoading();

      const hideLoading = () => {
        setTimeout(() => {
          loading.hide();
        }, 1500);
      };

      return (
        <>
          <div className="d-flex justify-content-center my-4">
            <Button
              label="Show"
              onClick={() => {
                loading.show();
                hideLoading();
              }}
              variant={ButtonVariants.SUCCESS}
              classNames="me-4"
            />
          </div>
        </>
      );
    };
    return (
      <LoadingProvider>
        <App />
      </LoadingProvider>
    );
  },
};
