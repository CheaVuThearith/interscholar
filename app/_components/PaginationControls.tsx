"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

type Props = { data: string[]; className?: string };

const PaginationControls = ({ data, className }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams.get("page") ?? "1";
  const itemsPerPage = searchParams.get("itemsPerPage") ?? "10";
  const amountOfPages = Math.ceil(data.length / parseInt(itemsPerPage));

  const nextPage = () => {
    router.push(`?page=${parseInt(page) + 1}&itemsPerPage=${itemsPerPage}`);
  };
  const prevPage = () => {
    router.push(`?page=${parseInt(page) - 1}&itemsPerPage=${itemsPerPage}`);
  };
  const toPage = (page: number) => {
    router.push(`?page=${page}&itemsPerPage=${itemsPerPage}`);
  };
  return (
    <div
      className={`${className} flex w-max items-center justify-center gap-x-2 rounded-xl bg-white p-2`}
      style={{ boxShadow: "2px 3px 5px -1px rgba(0, 0, 0, 0.6)" }}
    >
      <button
        onClick={prevPage}
        className="flex size-10 items-center justify-center rounded-lg bg-[#f5f5f5]"
      >
        <ArrowLeftIcon className="size-8" />
      </button>
      {amountOfPages < 5
        ? Array(amountOfPages)
            .fill("")
            .map((_, index) => (
              <button
                key={index + 1}
                onClick={() => toPage(index + 1)}
                className={`flex size-10 items-center justify-center rounded-lg ${parseInt(page) === index + 1 ? "bg-white" : "bg-[#f5f5f5]"}`}
              >
                {index + 1}
              </button>
            ))
        : [
            ...Array(2)
              .fill("")
              .map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => toPage(index + 1)}
                  className={`flex size-10 items-center justify-center rounded-lg ${parseInt(page) === index + 1 ? "bg-white" : "bg-[#f5f5f5]"}`}
                >
                  {index + 1}
                </button>
              )),
            parseInt(page) >= 3 && parseInt(page) < amountOfPages && (
              <button
                key="current"
                onClick={() => toPage(parseInt(page))}
                className={`bg-white} flex size-10 items-center justify-center rounded-lg`}
              >
                {page}
              </button>
            ),
            <button
              key="..."
              className={`flex size-10 items-center justify-center rounded-lg bg-[#f5f5f5]`}
            >
              ...
            </button>,
            <button
              key="last"
              onClick={() => toPage(amountOfPages)}
              className={`flex size-10 items-center justify-center rounded-lg ${parseInt(page) === amountOfPages ? "bg-white" : "bg-[#f5f5f5]"}`}
            >
              {amountOfPages}
            </button>,
          ]}
      <button
        onClick={nextPage}
        className="flex size-10 items-center justify-center rounded-lg bg-[#f5f5f5]"
      >
        <ArrowRightIcon className="size-8" />
      </button>
    </div>
  );
};

export default PaginationControls;
