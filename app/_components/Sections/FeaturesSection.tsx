"use client";
import {
  BuildingLibraryIcon,
  InformationCircleIcon,
} from "@heroicons/react/16/solid";
import Card from "../FeatureCard";
import { motion } from "framer-motion";

type Props = {};
const variants = {
  show: { x: 0, opacity: 1 },
  hidden: { x: 50, opacity: 0 },
};

const FeaturesSection = (props: Props) => {
  return (
    <section className="px-6 py-20">
      <div
        className="mx-auto flex max-w-screen-2xl flex-col items-center
gap-y-20 xl:items-stretch"
      >
        <h1 className="text-6xl font-bold">Our Features</h1>
        <motion.div
          initial="hidden"
          animate="show"
          variants={variants}
          transition={{ duration: 0.4, staggerChildren: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-8"
        >
          <Card title="Resources">
            <InformationCircleIcon className="size-44" />
          </Card>
          <Card title="Assisted Application">
            <BuildingLibraryIcon className="size-44" />
          </Card>
          <Card title="Resources">
            <InformationCircleIcon className="size-44" />
          </Card>
          <Card title="Assisted Application">
            <BuildingLibraryIcon className="size-44" />
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
