import EventCard from "@/app/_components/EventCard";
import React from "react";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const Loading = ({ searchParams = {} }: Props) => {
  const itemsPerPage = parseInt(
    Array.isArray(searchParams["itemsPerPage"])
      ? searchParams["itemsPerPage"][0]
      : searchParams["itemsPerPage"] ?? "10",
  );
  return (
    <div
      className="grid w-full gap-12 p-3"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      }}
    >
      {Array(itemsPerPage)
        .fill("")
        .map((_, index) => (
          <EventCard key={index} />
        ))}
    </div>
  );
};
export default Loading;
