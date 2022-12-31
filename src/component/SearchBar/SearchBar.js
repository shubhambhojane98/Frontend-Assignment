import React from "react";
import "./SearchBar.css";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className="search">
      <div className="searchIcon">
        <AiOutlineSearch size="lg" />
      </div>
      <input
        type="text"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
