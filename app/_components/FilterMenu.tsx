"use client";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";

type Props = {
  filterOptions: string[];
};
const FilterMenu = ({ filterOptions }: Props) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [filterOn, setFilterOn] = useState(false);
  return (
    <div className="flex h-full lg:sticky top-40 lg:w-[300px] w-full shrink-0 grow-0 flex-col items-start justify-start gap-y-10">
      <button
        className={`size-16 rounded-full p-3 transition-all duration-200 ${filterOn && "shadow-xl bg-[#00000020]"} `}
        onClick={() => {
          setFilterOn((f) => !f);
        }}
      >
        <AdjustmentsHorizontalIcon />
      </button>
      {filterOn && (
        <ul className="flex flex-row lg:flex-col w-full overflow-x-scroll lg:w-auto gap-y-1">
          {filterOptions.map((filter, index) => (
            <li
              onClick={() => {
                if (!activeFilters.includes(filter)) {
                  setActiveFilters((a) => [...a, filter]);
                } else {
                  setActiveFilters(() =>
                    activeFilters.filter((f) => f !== filter)
                  );
                }
              }}
              className="rounded-xl cursor-pointer px-4 py-2 transition-all duration-200 hover:bg-[#00000023]"
              key={index}
            >
              {filter}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterMenu;
