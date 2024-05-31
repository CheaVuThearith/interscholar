"use client";
import React from "react";
import CircleCard from "../CircleCard";
import { motion } from "framer-motion";

type Props = {};
interface teamType {
  name: string;
  role: string;
  description: string;
  image: string;
}

const team: teamType[] = [
  {
    name: "Chea VuThearith",
    role: "Developer",
    description:
      "As someone who struggled to better themselves, I'm committed to make the journey to success more accessible to those who share the same dreams and goals as me.",
    image: "team/cheavuthearith.webp",
  },
  {
    name: "Song Uylong",
    role: "UX/UI Design",
    description:
      "As Cambodia's new generation, I am dedicated to learning and contributing my best efforts to transform our society. I'm determined to help create a better place where everyone has equal access to the opportunities they deserve!",
    image: "team/songuylong.webp",
  },
  {
    name: "Chan Panha",
    role: "Researcher",
    description:
      "I am dedicated and passionate, ready to change the world through my commitment to education and technology. I believe in the power of innovative solutions and community involvement to make a positive impact.",
    image: "team/chanpanha.webp",
  },
];
const variants = {
  show: { y: 0, opacity: 1 },
  hidden: { y: -50, opacity: 0 },
};
const TeamSection = (props: Props) => {
  return (
    <section className=" green_section px-6 py-20">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center gap-y-16">
        <h1 className="text-6xl font-bold ">Our Team</h1>
        <motion.div
          initial="hidden"
          transition={{
            staggerChildren: 0.15,
            duration: 0.4,
            delayChildren: 0.3,
          }}
          whileInView="show"
          variants={variants}
          className="flex w-full flex-wrap justify-around gap-12"
        >
          {/* Chea VuThearith */}
          <CircleCard
            className="relative right-2 top-6 scale-[250%]"
            name={team[0].name}
            image={team[0].image}
            role={team[0].role}
            description={team[0].description}
          />
          {/* Song Uylong */}
          <CircleCard
            className="relative right-14 scale-[350%]"
            style={{ objectPosition: "0% 40%" }}
            name={team[1].name}
            image={team[1].image}
            role={team[1].role}
            description={team[1].description}
          />
          {/* Chan Panha */}
          <CircleCard
            style={{ objectPosition: "50% 30%" }}
            className="relative right-2 scale-110"
            name={team[2].name}
            image={team[2].image}
            role={team[2].role}
            description={team[2].description}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
