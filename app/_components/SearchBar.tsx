"use client";
import React, { useState } from "react";

type Props = {};

const SearchBar = (props: Props) => {
  const filterButtons = ["Scholarships", "Extra-Curricular", "Internships"];
  const [filterMenuOn, setFilterMenuOn] = useState<boolean>(false);
  return (
      <div className="sticky top-5 z-20 flex w-full flex-col justify-center gap-y-4">
        <div className="flex h-14 items-center justify-center gap-x-5">
          {/* Search bar */}
          <div className="relative flex h-14 w-[80%] items-center justify-center overflow-hidden rounded-full border  border-black">
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
          {/* Filter Menu toggle */}
          <div
            onClick={() => {
              setFilterMenuOn((f) => !f);
            }}
            className={`flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl border border-black transition-all duration-200 ${filterMenuOn ? "bg-[#04364a]" : "bg-white"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={`${filterMenuOn ? "white" : "currentColor"}`}
              className="size-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          </div>
        </div>
        {/* Filter buttons */}
        {filterMenuOn && (
          <div className="flex justify-center gap-x-5">
            {filterButtons.map((button, index) => (
              <button
                className="rounded-md border border-black px-4 py-2 transition-all duration-200 hover:bg-[#04364a] hover:text-white"
                key={index}
              >
                {button}
              </button>
            ))}
          </div>
        )}
      </div>
  );
};

export default SearchBar;
