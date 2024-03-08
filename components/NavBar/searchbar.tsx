"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React, { RefObject, useRef } from "react";

const SearchBar = () => {
  const searchRef: RefObject<HTMLInputElement> = useRef(null);
  const Router = useRouter();

  const handleKeySearch = (event: React.KeyboardEvent) => {
    event.preventDefault;
    if (event.key === "Enter") {
      const keyword = searchRef.current?.value;
      if (!keyword || !keyword.trim()) return;
      Router.push(`/search/${keyword}`);
    }
  };
  const handleClickSearch = (event: React.MouseEvent) => {
    event.preventDefault;
    const keyword = searchRef.current?.value;
    if (!keyword || !keyword.trim()) return;
    Router.push(`/search/${keyword}`);
  };

  return (
    <div className="relative">
      <input
        className="border-2 p-2 w-full rounded"
        placeholder="cari apa?"
        ref={searchRef}
        onKeyDown={handleKeySearch}
      />
      <button className="absolute end-2 top-2" onClick={handleClickSearch}>
        <MagnifyingGlass size={25} />
      </button>
    </div>
  );
};

export default SearchBar;
