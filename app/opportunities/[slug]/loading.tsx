import EventCard from "@/app/_components/EventCard";
import React from "react";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const Loading = ({ searchParams = {} }: Props) => {
  const itemsPerPage = parseInt(
    Array.isArray(searchParams["itemsPerPage"])
      ? searchParams["itemsPerPage"][0]
      : searchParams["itemsPerPage"] ?? "9"
  );
  return (
    <div className="mx-auto mt-20 flex max-w-screen-2xl flex-col items-start justify-around gap-y-20 px-8 lg:flex-row">
      <div className="top-40 flex h-full w-full shrink-0 grow-0 flex-col items-center justify-start gap-y-10 lg:sticky lg:w-[300px] lg:items-start">
        <button
          className={`loading "bg-[#00000020] size-16 rounded-full p-3 transition-all duration-200`}
        ></button>
      </div>
      <div className="flex max-w-screen-xl flex-col gap-y-10">
        <div className="flex w-full flex-wrap place-content-center gap-x-5 gap-y-20">
          {Array(itemsPerPage)
            .fill("")
            .map((_, index) => (
              <EventCard key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};
export default Loading;
