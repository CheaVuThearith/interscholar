"use client"
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const ClearFilterButton = (props: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = "1";
  const itemsPerPage = searchParams.get("itemsPerPage") ?? "9";
  const handleClearFilter = () => {
    const params = new URLSearchParams();
    params.set("filterList", "");
    params.set("page", page);
    params.set("itemsPerPage", itemsPerPage);
    router.push(`?${params.toString()}`);
  };

  return (
    <button
      onClick={handleClearFilter}
      className="mt-2 flex items-center justify-center gap-x-2 rounded-xl bg-[#85a6bc] px-3 py-2 text-center font-semibold text-white shadow-black transition-all duration-200 hover:shadow-md active:scale-110"
    >
      Clear Filters?
    </button>
  );
};

export default ClearFilterButton;
