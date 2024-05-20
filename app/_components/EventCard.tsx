import {
  ArrowRightIcon,
  CalendarDaysIcon,
  CalendarIcon,
  MapPinIcon,
} from "@heroicons/react/16/solid";
import React from "react";

type Props = {
  name?: string;
  organization?: string;
  date?: string;
  location?: string;
  className?: string;
};

const EventCard = ({
  name = "Techno Innovation Challenge Cambodia Season 7",
  date = "10th March 2024",
  organization = "Techno",
  location = "Phnom Penh",
  className,
}: Props) => {
  return (
      <div className={`${className} flex flex-col items-start justify-center gap-y-3`}>
        <div className="size-80 rounded-xl bg-black"></div>
        <div className="flex flex-col items-start gap-y-1">
          <p className="text-xl font-semibold text-[#85a6bc]">{name}</p>
          <p className="text-[#515050]">{organization}</p>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <p className="flex items-center gap-x-1">
              <CalendarDaysIcon className="size-7" /> {date}
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
