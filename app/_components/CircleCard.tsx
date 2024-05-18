import { ArrowRightIcon } from "@heroicons/react/16/solid";
import React from "react";

type Props = {
  name: string;
  description: string;
  role: string;
};

const CircleCard = ({
  name = "Name",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, molestias.",
  role = "Role",
}: Props) => {
  return (
    <div className="flex max-w-96 flex-col items-center justify-center gap-y-3">
      <div className="size-60 rounded-full bg-black"></div>
      <div className="flex flex-col items-center gap-y-1">
        <p className="text-3xl font-semibold">{name}</p>
        <p className="text-[#515050]">{role}</p>
      </div>
      <p className="text-center text-[#515050]">{description}</p>
      <button className="group mt-2 flex h-12 w-52 items-center justify-center gap-x-2 rounded-3xl bg-[#99bc85] font-semibold">
        Read More{" "}
        <ArrowRightIcon className="size-6 transition-all group-hover:scale-x-125 group-hover:translate-x-2 duration-200" />{" "}
      </button>
    </div>
  );
};

export default CircleCard;
