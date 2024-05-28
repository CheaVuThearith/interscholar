"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { useRouter, useSearchParams } from "next/navigation";

type Props = { amountOfPages: number; className?: string };

const PaginationControls = ({ amountOfPages, className }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = parseInt(searchParams.get("page") ?? "1");
  const itemsPerPage = parseInt(searchParams.get("itemsPerPage") ?? "9");
  const nextPage = () => {
    router.push(
      `?page=${Math.min(page + 1, amountOfPages)}&itemsPerPage=${itemsPerPage}`,
    );
  };
  const prevPage = () => {
    router.push(`?page=${Math.max(page - 1, 1)}&itemsPerPage=${itemsPerPage}`);
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
                className={`flex size-10 items-center justify-center rounded-lg ${page === index + 1 ? "bg-white" : "bg-[#f5f5f5]"}`}
              >
                {index + 1}
              </button>
            ))
        : [
            <button
              key={1}
              onClick={() => toPage(1)}
              className={`flex size-10 items-center justify-center rounded-lg ${page === 1 ? "bg-white" : "bg-[#f5f5f5]"}`}
            >
              1
            </button>,
            page < amountOfPages && (
              <button
                key="current"
                onClick={() => toPage(page > 2 ? page : 2)}
                className={`${page >= 2 ? "bg-white" : "bg-[#f5f5f5]"} flex size-10 items-center justify-center rounded-lg`}
              >
                {page > 2 ? page : 2}
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
              className={`flex size-10 items-center justify-center rounded-lg ${page === amountOfPages ? "bg-white" : "bg-[#f5f5f5]"}`}
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
