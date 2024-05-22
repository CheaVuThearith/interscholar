import {
  ArrowRightIcon,
  CalendarDaysIcon,
  CalendarIcon,
  MapPinIcon,
} from "@heroicons/react/16/solid";
import React from "react";

type Props = {
  title?: string;
  organization?: string;
  deadline?: Date;
  location?: string;
  className?: string;
};

const EventCard = ({
  title = "Techno Innovation Challenge Cambodia Season 7",
  deadline = new Date(),
  organization = "Techno",
  location = "Phnom Penh",
  className,
}: Props) => {
  deadline = new Date(deadline)
  return (
      <div className={`${className} flex flex-col items-start justify-center gap-y-3`}>
        <div className="aspect-square w-72 lg:w-80 rounded-xl bg-black"></div>
        <div className="flex w-72 flex-col items-start gap-y-1">
          <p className="text-xl font-semibold text-[#85a6bc]">{title}</p>
          <p className="text-[#515050]">{organization}</p>
        </div>
        <div className="flex items-center w-full justify-between">
          <div className="flex flex-col gap-y-1 w-1/2">
            <p className="flex items-center gap-x-1">
              <CalendarDaysIcon className="size-7 shrink-0" /> {`${deadline.getDate()}/${deadline.getMonth()}/${deadline.getFullYear()}`}
            </p>
            <p className="flex items-center gap-x-1">
              <MapPinIcon className="size-7" /> {location}
            </p>
          </div>
          <button className="mt-2 flex items-center justify-center gap-x-2 rounded-xl bg-[#85a6bc] px-3 py-2 text-center font-semibold text-white shadow-black hover:shadow-md">
            Explore
          </button>
        </div>
      </div>
  );
};

export default EventCard;
