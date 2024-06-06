"use client";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import React, { Suspense } from "react";

type Props = {
  image?: string;
  title?: string;
  link?: string;
  description?: string;
  deadline?: Date;
};
const variants = { show: { x: 0, opacity: 1 }, hidden: { x: -50, opacity: 0 } };
const RecentAddCard = ({
  link,
  image,
  title,
  description,
  deadline,
}: Props) => {
  if (deadline) {
    deadline = new Date(deadline);
  }
  return (
    <motion.div
      variants={variants}
      className="flex h-[700px] max-w-80 flex-col justify-between overflow-hidden text-ellipsis"
    >
      <div className="flex flex-col items-start justify-center gap-y-3">
        {title ? (
          <img
            draggable="false"
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
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-3xl font-semibold">
            {title && title.split(" ").slice(0, 5).join(" ") + "..."}
          </p>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[#515050]">
            {deadline &&
              `${deadline.getDate()}/${deadline.getMonth() + 1}/${deadline.getFullYear()}`}
          </p>
        </div>
        <p className="text-start text-[#515050]">
          {description && description.substring(0, 300) + "..."}
        </p>
      </div>

      <a
        href={link}
        target="_blank"
        className="group mt-2 flex size-24 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-[#333333] font-semibold shadow-black hover:shadow-md"
      >
        <ArrowRightIcon className="size-12 fill-white transition-all duration-200 group-hover:scale-125" />
      </a>
    </motion.div>
  );
};

export default RecentAddCard;
