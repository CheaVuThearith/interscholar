import EventCard from "@/app/_components/EventCard";
import React from "react";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const Loading = ({ searchParams = {} }: Props) => {
  const itemsPerPage = parseInt(
    Array.isArray(searchParams["itemsPerPage"])
      ? searchParams["itemsPerPage"][0]
      : searchParams["itemsPerPage"] ?? "9",
  );
  return (
    <div className="flex w-full flex-wrap place-content-center gap-x-5 gap-y-20 p-3">
      {Array(itemsPerPage)
        .fill("")
        .map((_, index) => (
          <EventCard key={index} />
        ))}
    </div>
  );
};
export default Loading;
