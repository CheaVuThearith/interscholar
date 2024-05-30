"use client";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
motion;
const variants = { show: { x: 0, opacity: 1 }, hidden: { x: -50, opacity: 0 } };

const RecentCardsContainer = ({ children }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={variants}
      transition={{ staggerChildren: 0.1, duration: 0.3, delayChildren: 0.3 }}
      className="flex flex-wrap items-start justify-center gap-12"
    >
      {children}
    </motion.div>
  );
};

export default RecentCardsContainer;
