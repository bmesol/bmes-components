import { SearchBar } from "../../lib/components/SearchBar/SearchBar";
import React from "react";

const meta = {
  title: "Components/SearchBar",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Sample_SearchBar = {
  render: () => {
    const App = () => {
      const handleSearchButton = (value: string) => {
        alert("You Searched : " + value);
      };
      return (
        <>
          <div className="my-4">
            <SearchBar onSearch={handleSearchButton} />
          </div>
        </>
      );
    };
    return <App />;
  },
};
