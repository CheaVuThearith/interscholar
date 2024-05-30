"use client";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import React, { CSSProperties } from "react";

type Props = {
  name?: string;
  description?: string;
  role?: string;
  image?: string;
  className?: string;
  style?: CSSProperties;
};
const variants = {
  show: { y: 0, opacity: 1 },
  hidden: { y: -50, opacity: 0 },
};
const CircleCard = ({
  name = "Name",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, molestias.",
  role = "Role",
  image,
  style,
  className,
}: Props) => {
  return (
    <motion.div
      variants={variants}
      className="flex max-w-96 flex-col items-center justify-center gap-y-3"
    >
      <div className="size-60 overflow-hidden rounded-full">
        <img
          className={`${className} size-60 rounded-full object-cover`}
          style={style}
          src={image}
          alt={name}
        />
      </div>
      <div className="flex flex-col items-center gap-y-1">
        <p className="text-3xl font-semibold">{name}</p>
        <p className="text-[#515050]">{role}</p>
      </div>
      <p className="text-center text-[#515050]">{description}</p>
      <button className="group mt-2 flex h-12 w-52 items-center justify-center gap-x-2 rounded-3xl bg-[#99bc85] font-semibold">
        Read More
        <ArrowRightIcon className="size-6 transition-all duration-200 group-hover:translate-x-2 group-hover:scale-x-125" />{" "}
      </button>
    </motion.div>
  );
};

export default CircleCard;
