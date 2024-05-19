import { ArrowRightIcon } from "@heroicons/react/16/solid";
import React from "react";

type Props = {
  name?: string;
  description?: string;
  role?: string;
};

const RecentAddCard = ({
  name = "Techno Innovation Challenge Cambodia Season 7",
  description = "Techno Innovation Challenge Cambodia is a competition program which students from different skills team up, design, build and pitch their innovative STEM-based solutions for solving a real world problem within 4 weeks duration.", role = "10th March 2024",
}: Props) => {
  return (
    <div className="flex max-w-80 flex-col items-start justify-center gap-y-3">
      <div className="size-80 rounded-xl bg-black"></div>
      <div className="flex flex-col items-start gap-y-1">
        <p className="text-3xl font-semibold">{name}</p>
        <p className="text-[#515050]">{role}</p>
      </div>
      <p className="text-start text-[#515050]">{description}</p>
      <button className="group mt-2 flex size-24 hover:shadow-md shadow-black rounded-full items-center justify-center gap-x-2 bg-[#333333] font-semibold">
        <ArrowRightIcon className="size-12 fill-white transition-all group-hover:scale-125 duration-200" />
      </button>
    </div>
  );
};

export default RecentAddCard;
