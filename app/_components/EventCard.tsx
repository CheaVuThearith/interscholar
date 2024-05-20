import { ArrowRightIcon, CalendarDaysIcon, CalendarIcon, MapPinIcon } from "@heroicons/react/16/solid";
import React from "react";

type Props = {
      name?: string;
      organization?: string;
      date?: string;
      location?: string;
};

const EvenCard = ({
      name = "Techno Innovation Challenge Cambodia Season 7",
      date = "10th March 2024",
      organization = "Techno",
      location = "Phnom Penh",
}: Props) => {
      return (
            <div className="flex max-w-80 flex-col items-start justify-center gap-y-3">
                  <div className="size-80 rounded-xl bg-black"></div>
                  <div className="flex flex-col items-start gap-y-1">
                        <p className="text-xl font-semibold text-blue-400">
                              {name}
                        </p>
                        <p className="text-[#515050]">{organization}</p>
                  </div>
                  <div className="flex w-full justify-between items-center">
                        <div className="flex flex-col gap-y-1">
                              <p className="flex gap-x-1 items-center"><CalendarDaysIcon className="size-7"/> {date}</p>
                              <p className="flex gap-x-1 items-center"><MapPinIcon className="size-7"/> {location}</p>
                        </div>
                        <button className="text-center mt-2 flex items-center justify-center gap-x-2 rounded-xl bg-blue-400 px-3 py-2 font-semibold text-white shadow-black hover:shadow-md">
                              Explore
                        </button>
                  </div>
            </div>
      );
};

export default EvenCard;
