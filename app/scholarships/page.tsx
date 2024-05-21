"use client";
import React from "react";
import EventCard from "../_components/EventCard";
import { useSearchParams } from "next/navigation";
import PaginationControls from "../_components/PaginationControls";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = ({ searchParams }: Props) => {
  const entries = [
    "Competition 1",
    "Competition 2",
    "Competition Competition Cbbbj 3222",
    "Competition 4",
    "Competition 5",
    ...Array(100)
      .fill("")
      .map((_, index) => `Competition ${index + 6}`),
  ];
  const page = searchParams["page"] ?? "1";
  const itemsPerPage = searchParams["itemsPerPage"] ?? "10";
  const startItem =
    (parseInt(page.toString()) - 1) * parseInt(itemsPerPage.toString());
  const endItem = startItem + parseInt(itemsPerPage.toString());
  const shownItems = entries.slice(startItem, endItem);
  return (
    <>
      <div>
        <div className="mx-auto mt-20 flex w-[90%] flex-col items-center justify-center gap-y-20 rounded-xl bg-white p-0 py-20 pb-10 shadow-lg">
          <div
            className="grid p-3 w-full gap-12"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            }}
          >
            {shownItems.map((entry, index) => (
              <EventCard
                className="max-w-[368px] transform cursor-pointer self-start justify-self-center rounded-xl p-0 lg:p-6 transition-all duration-200 lg:hover:scale-105 lg:hover:border lg:hover:shadow-xl"
                key={index}
                name={entry}
              />
            ))}
          </div>
          <PaginationControls
            className=" mx-auto lg:me-0 lg:ms-auto"
            data={entries}
          />
        </div>
      </div>
    </>
  );
};

export default page;
