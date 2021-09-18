import React, { useState } from "react";

const SearchElement = ({ onSearchSend }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name:"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      <button type="button" onClick={() => onSearchSend(searchValue)}>
        find
      </button>
    </div>
  );
};

export default SearchElement;
