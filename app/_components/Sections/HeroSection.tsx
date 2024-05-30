"use client";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import React from "react";

type Props = {};
const checkList = [
  "Comprehensive Coverage",
  "Convenience at Your Fingertips",
  "Expert Support",
];

const HeroSection = (props: Props) => {
  return (
    <section className=" green_section px-6 py-20">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-y-12 xl:flex-row xl:items-stretch">
        <div className="flex max-w-[700px] flex-col gap-y-7">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-6xl font-semibold">
              Find
              <span className="block text-[#85bd71] sm:hidden">Everything</span>
              <span className="hidden sm:block">All</span>
              <span className="hidden text-[#85bd71] sm:block">
                Opportunities
              </span>
              Here!
            </h1>
            <p className="text-[#515050]">
              Our platform is your one-stop hub for all study opportunities,
              from competitions to scholarships, ensuring convenience at every
              click. Plus, with top-notch consultancy and seamless admission
              assistance, success is just a step away!
            </p>
          </div>
          <ul className="flex flex-col gap-y-2 text-[#515050]">
            {checkList.map((item, index) => (
              <li className="flex items-center gap-x-2" key={index}>
                <CheckCircleIcon className="size-8" /> {item}
              </li>
            ))}
          </ul>
          <motion.a
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delayChildren: 0.3 }}
            href="/opportunities"
            className="group flex h-12 w-52 items-center justify-center gap-x-2 rounded-3xl bg-[#99bc85] font-semibold"
          >
            Explore now
            <ArrowRightIcon className="size-6 transition-all duration-200 group-hover:translate-x-2 group-hover:scale-x-125" />
          </motion.a>
        </div>
        <motion.img
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          src="/book.gif"
          className="hidden h-auto w-[720px] shrink-0 grow object-cover mix-blend-screen sm:block"
        ></motion.img>
      </div>
    </section>
  );
};

export default HeroSection;
