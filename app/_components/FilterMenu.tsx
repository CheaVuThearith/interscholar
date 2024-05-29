"use client";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/16/solid";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

type Props = {
  filterOptions: string[];
};
const FilterMenu = ({ filterOptions }: Props) => {
  const router = useRouter()
  const searchParams = useSearchParams();
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [filterOn, setFilterOn] = useState(false);
  return (
    <div className="top-40 flex h-full w-full shrink-0 grow-0 flex-col items-center justify-start gap-y-10 lg:sticky lg:w-[300px] lg:items-start">
      <button
        className={`size-16 rounded-full p-3 transition-all duration-200 ${filterOn && "bg-[#00000020] shadow-xl"} `}
        onClick={() => {
          setFilterOn((f) => !f);
        }}
      >
        <AdjustmentsHorizontalIcon />
      </button>
      {filterOn && (
        <ul className="relative flex w-full flex-row gap-x-3 gap-y-1 overflow-x-scroll lg:w-auto lg:flex-col">
          {filterOptions.map((filter, index) => {
            const filterId = filter.replaceAll(" ", "").toLowerCase();
            return (
              <li
                key={index}
                onClick={() => {
                  console.log(activeFilters);
                  if (!activeFilters.includes(filterId)) {
                    setActiveFilters((a) => [...a, filterId]);
                  } else {
                    setActiveFilters(() =>
                      activeFilters.filter((f) => f !== filterId)
                    );
                  }
                }}
                className={`${activeFilters.includes(filterId) && "bg-[#00000020]"}  min-w-max cursor-pointer rounded-xl px-4 py-2 transition-all duration-200 hover:bg-[#00000023] active:scale-105`}
              >
                {filter}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FilterMenu;
