"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { useRouter, useSearchParams } from "next/navigation";

type Props = { amountOfPages: number; className?: string };

const PaginationControls = ({ amountOfPages, className }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = parseInt(searchParams.get("page") ?? "1");
  const itemsPerPage = parseInt(searchParams.get("itemsPerPage") ?? "9");
  const filterString = searchParams.get("filterList") ?? "";
  
  const nextPage = () => {
    router.push(
      `?filterList=${filterString}&page=${Math.min(page + 1, amountOfPages)}&itemsPerPage=${itemsPerPage}`,
    );
  };
  const prevPage = () => {
    router.push(`?filterList=${filterString}&page=${Math.max(page - 1, 1)}&itemsPerPage=${itemsPerPage}`);
  };
  const toPage = (page: number) => {
    router.push(`?filterList=${filterString}&page=${page}&itemsPerPage=${itemsPerPage}`);
  };
  return (
    <div
      className={`${className} flex w-max items-center justify-center gap-x-2 rounded-xl bg-white p-2`}
      style={{ boxShadow: "2px 3px 5px -1px rgba(0, 0, 0, 0.6)" }}
    >
      <button
        onClick={prevPage}
        className="active:scale-125 transition-all duration-200 flex size-10 items-center justify-center rounded-lg bg-[#f5f5f5]"
      >
        <ArrowLeftIcon className="size-8" />
      </button>
      {amountOfPages < 5
  ? Array(amountOfPages)
      .fill("")
      .map((_, index) => (
        <button
        key={`pagination_${index+1}`}
          onClick={() => toPage(index + 1)}
          className={`active:scale-125 transition-all duration-200 flex size-10 items-center justify-center rounded-lg ${page === index + 1 ? "bg-white" : "bg-[#f5f5f5]"}`}
        >
          {index + 1}
        </button>
      ))
  : [
      <button
      key={`pagination_${1}`}
        onClick={() => toPage(1)}
        className={`active:scale-125 transition-all duration-200 flex size-10 items-center justify-center rounded-lg ${page === 1 ? "bg-white" : "bg-[#f5f5f5]"}`}
      >
        1
      </button>,
      page < amountOfPages && (
        <button
        key={`pagination_current_${page}`}
          onClick={() => toPage(page > 2 ? page : 2)}
          className={`active:scale-125 transition-all duration-200 ${ page >= 2 ? "bg-white" : "bg-[#f5f5f5]"} flex size-10 items-center justify-center rounded-lg`}
        >
          {page > 2 ? page : 2}
        </button>
      ),
      <button
        key={`pagination_ellipsis_${page}`}
        className={`flex size-10 items-center justify-center rounded-lg bg-[#f5f5f5]`}
      >
        ...
      </button>,
      <button
      key={`pagination_last_${amountOfPages}`}
        onClick={() => toPage(amountOfPages)}
        className={`active:scale-125 transition-all duration-200 flex size-10 items-center justify-center rounded-lg ${page === amountOfPages ? "bg-white" : "bg-[#f5f5f5]"}`}
      >
        {amountOfPages}
      </button>,
    ]}
      <button
        onClick={nextPage}
        className="active:scale-125 transition-all duration-200 flex size-10 items-center justify-center rounded-lg bg-[#f5f5f5]"
      >
        <ArrowRightIcon className="size-8" />
      </button>
    </div>
  );
};

export default PaginationControls;
