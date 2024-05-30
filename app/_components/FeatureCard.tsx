"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};
const variants = {
  show: { x: 0, opacity: 1 },
  hidden: { x: 50, opacity: 0 },
};

const Card = ({ title, children }: Props) => {
  return (
    <motion.div
      variants={variants}
      className=" relative flex size-64 flex-col rounded-xl bg-[#e1f0da]"
    >
      <div className="flex h-[75%] w-full items-center justify-center overflow-hidden">
        {children}
      </div>
      <p className="flex grow items-center justify-center bg-[#ffffff90] text-2xl font-semibold text-[#515050]">
        {title}
      </p>
    </motion.div>
  );
};

export default Card;
