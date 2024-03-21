import { Button, ButtonVariants } from "../Button/Button";
import { useSearchBox } from "./useSearchBox";
import { TextBox } from "../TextBox/TextBox";
import { SearchIcon } from "lucide-react";
import { SearchBoxProps } from "./DTOs";
import React from "react";
import "./SearchBox.scss";

const SearchBox = (props: SearchBoxProps) => {
  const { onSearch } = props;
  const { search, handleSearch, handleEnterToSearch, handleSearchButton } = useSearchBox({ onSearch });
  return (
    <>
      <div className="position-relative">
        <TextBox
          placeholder="Type Here"
          classNames="w-100"
          value={search}
          onChange={handleSearch}
          onKeyDown={handleEnterToSearch}
        />
        <Button
          icon={<SearchIcon />}
          label="Search"
          variant={ButtonVariants.OUTLINE_SECONDARY}
          classNames="search"
          onClick={() => handleSearchButton(search)}
        />
      </div>
    </>
  );
};

export { SearchBox };
