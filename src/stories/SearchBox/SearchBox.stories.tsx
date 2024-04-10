import { SearchBox } from "../../lib";
import React from "react";

const meta = {
  title: "Components/SearchBox",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const SampleSearchBox = {
  render: () => {
    const handleSearch = (searchString: string) => {
      alert("You Searched : " + searchString);
    };
    return (
      <>
        <div style={{ minWidth: "50vw" }}>
          <SearchBox onSearch={handleSearch} />
        </div>
      </>
    );
  },
};
