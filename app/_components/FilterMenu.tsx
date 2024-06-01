"use client";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/16/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {
  filterOptions: string[];
};
const variants = {
  hide: { x: -10, y: -20, opacity: 0 },
  show: { x: 0, y: 0, opacity: 1 },
};
const FilterMenu = ({ filterOptions }: Props) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [filterOn, setFilterOn] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = "1";
  const itemsPerPage = searchParams.get("itemsPerPage") ?? "9";
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("filterList", activeFilters.join(","));
    params.set("page", page);
    params.set("itemsPerPage", itemsPerPage);
    router.push(`?${params.toString()}`);
  }, [activeFilters, router, itemsPerPage, page]);

  return (
    <div className="top-40 flex h-full w-full shrink-0 grow-0 flex-col items-center justify-start gap-y-10 overflow-hidden lg:sticky lg:w-[300px] lg:items-start">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`size-16 rounded-full p-3 ${filterOn && "bg-[#00000020] shadow-xl"} `}
        onClick={() => {
          setFilterOn((f) => !f);
        }}
      >
        <AdjustmentsHorizontalIcon />
      </motion.button>
      <AnimatePresence>
        {filterOn && (
          <motion.ul
            initial="hide"
            animate="show"
            exit="hide"
            variants={variants}
            transition={{ staggerChildren: 0.04 }}
            className="hide_scroll relative flex w-full flex-row gap-x-3 gap-y-1 overflow-x-scroll lg:w-auto lg:flex-col"
          >
            {filterOptions.map((filter, index) => {
              const filterId = filter.replaceAll(" ", "").toLowerCase();
              return (
                <motion.li
                key={`filterList_${index}`}
                  variants={variants}
                  onClick={() => {
                    if (!activeFilters.includes(filterId)) {
                      setActiveFilters((a) => [...a, filterId]);
                    } else {
                      setActiveFilters(() =>
                        activeFilters.filter((f) => f !== filterId),
                      );
                    }
                  }}
                  whileTap={{ scale: 1.05 }}
                  className={`${activeFilters.includes(filterId) && "bg-[#00000020]"} min-w-max cursor-pointer rounded-xl px-4 py-2 transition-colors hover:bg-[#00000020] active:scale-105`}
                >
                  {filter}
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterMenu;
