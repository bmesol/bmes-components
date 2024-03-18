import { useSearchBar } from "./useSearchBar";
import { TextBox } from "../TextBox/TextBox";
import { SearchIcon } from "lucide-react";
import { SearchBarProps } from "./DTOs";
import React from "react";
import "./SearchBar.scss";

const SearchBar = (props: SearchBarProps) => {
  const { onSearch } = props;
  const { search, handleSearch, handleEnterToSearch, handleSearchButton } = useSearchBar({ onSearch });
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
        <button className="search" onClick={() => handleSearchButton(search)}>
          <SearchIcon />
          &nbsp;<span>Search</span>
        </button>
      </div>
    </>
  );
};

export { SearchBar };
