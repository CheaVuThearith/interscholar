"use client";
import React, { useState } from "react";

type Props = {};

const SearchBar = (props: Props) => {
  const filterButtons = ["Scholarships", "Extra-Curricular", "Internships"];
  const [filterMenuOn, setFilterMenuOn] = useState<boolean>(false);
  return (
    <div className="relative flex h-8 items-center justify-center overflow-hidden rounded-md border border-black">
      <input type="text" className="w-[100%] p-5 pl-10" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute left-2 h-6 w-6 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>
  );
};

export default SearchBar;
