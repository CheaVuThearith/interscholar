"use client";
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import React from "react";

type Props = {};
const ContactSection = (props: Props) => {
  return (
    <section className=" green_section px-6 py-20">
      <div
        className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-y-12 overflow-hidden
xl:flex-row xl:items-stretch"
      >
        <div className="flex flex-col gap-y-7 xl:w-[700px]">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-6xl font-semibold">
              What Are you waiting for?
            </h1>
            <p className="text-[#515050]">
              We&apos;d love to hear from you! Whether you have a question, need
              assistance, or just want to chat, don&apos;t hesitate to reach
              out. Our dedicated team is always here to provide you with the
              support and answers you need.
            </p>
          </div>
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="group flex h-16 w-56 items-center justify-center gap-x-2 rounded-full bg-[#525ceb] font-semibold text-white"
          >
            Contact Us
            <ArrowRightIcon className="size-6 transition-all duration-200 group-hover:translate-x-2 group-hover:scale-x-125" />
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 0 }}
          whileInView={{ opacity: 1, x: 0, rotate: 12 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="hidden size-96 sm:block"
        >
          <ChatBubbleLeftRightIcon />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
