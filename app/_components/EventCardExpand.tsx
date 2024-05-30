"use client";
import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
type Props = {
  image?: string;
  title?: string;
  organization?: string;
  deadline?: Date;
  location?: string;
  className?: string;
  _id?: string;
  layoutId?: string;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const EventCardExpand = ({
  _id = "0",
  image,
  title,
  deadline,
  organization,
  location,
  className,
  layoutId = _id,
  onClick,
}: Props) => {
  if (deadline) {
    deadline = new Date(deadline);
  }
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.2}}
      onClick={onClick}
      layoutId={layoutId}
      className={`flex fixed cursor-pointer m-auto p-10 inset-0 items-start justify-between gap-y-3 rounded-xl bg-white shadow-xl transition-all duration-200 lg:hover:scale-105 lg:hover:border`}
    >
      <div className="flex flex-col gap-y-3">
        {title ? (
          <img
            src={image}
            className="size-80 rounded-xl border-0 object-cover"
          ></img>
        ) : (
          <div className="loading size-80 rounded-xl border-0 object-cover"></div>
        )}
        <div className="flex w-80 flex-col items-start gap-y-1">
          <p
            className={`w-full text-xl font-semibold ${!title && "loading h-7"} rounded-md text-[#85a6bc]`}
          >
            {title}
          </p>
          <p
            className={`w-full text-[#515050] ${!title && "loading h-7"} rounded-md`}
          >
            {organization}
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center gap-y-3">
        <div
          className={`${!title && "loading h-14"} flex w-full items-center justify-between rounded-lg`}
        >
          <div className="flex w-1/2 flex-col gap-y-1">
            <p className={`flex w-full items-center gap-x-1`}>
              {title && <CalendarDaysIcon className="size-7 shrink-0" />}{" "}
              <span className={` w-full rounded-md`}>
                {deadline &&
                  `${deadline.getDate()}/${deadline.getMonth()}/${deadline.getFullYear()}`}
              </span>
            </p>
            <p className={`flex  w-full items-center gap-x-1`}>
              {title && <MapPinIcon className="size-7 shrink-0" />}{" "}
              <span className={` w-full rounded-md`}>{location}</span>
            </p>
          </div>
          {title && (
            <button className="mt-2 flex items-center justify-center gap-x-2 rounded-xl bg-[#85a6bc] px-3 py-2 text-center font-semibold text-white shadow-black hover:shadow-md">
              Explore
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default EventCardExpand;
