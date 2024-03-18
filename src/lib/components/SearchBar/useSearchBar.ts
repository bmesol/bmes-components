import { SearchBarProps } from "./DTOs";
import { useState } from "react";

const useSearchBar = ({ onSearch }: SearchBarProps) => {
  const [search, setSearch] = useState("");

  const handleSearch = (searchValue: string) => {
    setSearch(searchValue);
  };

  const handleEnterToSearch = ( event: React.KeyboardEvent<HTMLInputElement> ) => {
    if (event.key === "Enter") {
      handleSearchButton(search);
    }
  };

  const handleSearchButton = (searchValue: string) => {
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  return {
    search,
    handleSearch,
    handleEnterToSearch,
    handleSearchButton,
  };
};

export { useSearchBar };
