"use client";
import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  image?: string;
  title?: string;
  organization?: string;
  deadline?: Date;
  location?: string;
  className?: string;
  description?: string;
  _id?: string;
  layoutId?: number;
  link?: string;
  onClick?: () => void;
};

const EventCard = ({
  _id = "0",
  image,
  link,
  title,
  deadline,
  organization,
  description,
  location,
  className,
  layoutId,
  onClick,
}: Props) => {
  if (deadline) {
    deadline = new Date(deadline);
  }
  const [expandCard, setExpandCard] = useState(false);
  return (
    <motion.div
      onClick={() => {
        if (window.innerWidth > 1024 && onClick) {
          onClick();
        } else {
          setExpandCard((prev) => !prev);
        }
      }}
      layoutId={layoutId?.toString()}
      whileHover={{ scale: 1.05 }}
      className={`flex h-full max-w-[368px] cursor-pointer select-none flex-col items-start justify-between gap-y-3 self-start justify-self-center rounded-xl bg-white p-6 shadow-xl lg:hover:scale-105`}
    >
      <motion.div className="flex flex-col gap-y-3">
        {title ? (
          <motion.img
            src={image}
            layoutId={`image${layoutId}`}
            draggable="false"
            className=" size-80 rounded-xl border-0 object-cover"
          ></motion.img>
        ) : (
          <motion.div className="loading size-80 rounded-xl border-0 object-cover"></motion.div>
        )}
        <motion.div
          layout="position"
          layoutId={`title${layoutId}`}
          className="flex w-80 flex-col items-start gap-y-1"
        >
          <motion.p
            className={`w-full overflow-hidden text-ellipsis whitespace-nowrap text-xl font-semibold  ${!title && "loading h-7"} rounded-md text-[#85a6bc]`}
          >
            {title}
          </motion.p>
          <motion.p
            className={`w-full overflow-hidden text-ellipsis whitespace-nowrap text-[#515050] ${!title && "loading h-7"} rounded-md`}
          >
            {organization}
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div className="flex w-full flex-col justify-center gap-y-3">
        <motion.div
          className={`${!title && "loading h-14"} flex w-full items-center justify-between rounded-lg`}
        >
          <div className="flex w-full flex-col gap-y-4">
            {expandCard && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {description}
              </motion.p>
            )}
            <div className="flex items-center justify-between">
              <motion.div
                layout="position"
                layoutId={`date${layoutId}`}
                className="flex w-1/2 flex-col gap-y-1"
              >
                <motion.p
                  className={`flex w-full items-center gap-x-1 overflow-hidden text-ellipsis whitespace-nowrap`}
                >
                  {title && <CalendarDaysIcon className="size-7 shrink-0" />}
                  <motion.span className={`w-full rounded-md`}>
                    {deadline &&
                      `${deadline.getDate()}/${deadline.getMonth() + 1}/${deadline.getFullYear()}`}
                  </motion.span>
                </motion.p>
                <motion.p
                  className={`flex w-full items-center gap-x-1 overflow-hidden text-ellipsis whitespace-nowrap`}
                >
                  {title && <MapPinIcon className="size-7 shrink-0" />}
                  <motion.span className={` w-full rounded-md`}>
                    {location}
                  </motion.span>
                </motion.p>
              </motion.div>
              {title && (
                <motion.a
                  layoutId={`button${layoutId}`}
                  href={link}
                  className="mt-2 flex items-center justify-center gap-x-2 rounded-xl bg-[#85a6bc] px-3 py-2 text-center font-semibold text-white shadow-black hover:shadow-md"
                >
                  <motion.span
                    layoutId={`buttonText${layoutId}`}
                    layout="position"
                  >
                    Explore
                  </motion.span>
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default EventCard;
