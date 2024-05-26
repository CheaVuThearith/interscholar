import { ArrowRightIcon } from "@heroicons/react/16/solid";
import React, { Suspense } from "react";

type Props = {
  image?: string;
  title?: string;
  description?: string;
  deadline?: Date;
};

const RecentAddCard = ({ image, title, description, deadline }: Props) => {
  if (deadline) {
    deadline = new Date(deadline);
  }
  return (
    <div className="max-w-80 h-[700px] flex flex-col justify-between">
      <div className="flex flex-col items-start justify-center gap-y-3">
        {title ? (
          <img
            src={image}
            className="size-80 rounded-xl border-0 object-cover"
          ></img>
        ) : (
          <div
            className={`${!title && "loading"} size-80 rounded-xl border-0 object-cover`}
          ></div>
        )}
        <div
          className={`${!title && "loading h-16 w-full"} flex  flex-col items-start gap-y-1 rounded-xl`}
        >
          <p className="text-3xl font-semibold">{title}</p>
          <p className="text-[#515050]">
            {deadline &&
              `${deadline.getDate()}/${deadline.getMonth()}/${deadline.getFullYear()}`}
          </p>
        </div>
        <p className="text-start text-[#515050]">{description}</p>
      </div>

      <button className="group mt-2 flex size-24 items-center justify-center gap-x-2 rounded-full bg-[#333333] font-semibold shadow-black hover:shadow-md">
        <ArrowRightIcon className="size-12 fill-white transition-all duration-200 group-hover:scale-125" />
      </button>
    </div>
  );
};

export default RecentAddCard;
