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
        <div className="mx-auto mt-20 flex w-[90%] flex-col items-center justify-center gap-y-20 rounded-xl bg-white lg:p-6 p-0 py-20 pb-10 shadow-lg">
          <div className="grid w-[96%] gap-12" style={{
            gridTemplateColumns:"repeat(auto-fill, minmax(368px, 1fr))"
          }}>
            {shownItems.map((entry, index) => (
              <EventCard className="hover:shadow-xl transition-all cursor-pointer duration-200 transform max-w-[368px] rounded-xl p-6 justify-self-center hover:border hover:scale-105 self-start" key={index} name={entry} />
            ))}
          </div>
          <PaginationControls className=" mx-auto lg:me-0 lg:ms-auto" data={entries} />
        </div>
      </div>
    </>
  );
};

export default page;
