import { SearchBox } from "../../lib/components/SearchBox/SearchBox";
import React from "react";

const meta = {
  title: "Components/SearchBox",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Sample_SearchBox = {
  render: () => {
    const App = () => {
      const handleSearchButton = (value: string) => {
        alert("You Searched : " + value);
      };
      return (
        <>
          <div className="my-4">
            <SearchBox onSearch={handleSearchButton} />
          </div>
        </>
      );
    };
    return <App />;
  },
};
