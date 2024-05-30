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
  layoutId?: number;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  description: string;
  link?: string;
};

const EventCardExpand = ({
  _id = "0",
  image,
  title,
  deadline,
  organization,
  description,
  location,
  link,
  layoutId,
  onClick,
}: Props) => {
  if (deadline) {
    deadline = new Date(deadline);
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-10 flex cursor-pointer items-center justify-center bg-black/50"
    >
      <div onClick={onClick} className="fixed inset-0"></div>
      <motion.div
        layoutId={layoutId?.toString()}
        className={`fixed z-30 mx-auto flex w-[40rem] cursor-pointer flex-col justify-between gap-5 rounded-xl bg-white p-10 shadow-xl`}
      >
        <motion.div className="flex gap-5">
          {/* img motion.div */}
          <motion.div className="flex flex-col gap-y-3">
            <motion.img
              layoutId={`image${layoutId}`}
              src={image}
              className="size-80 rounded-xl border-0 object-cover"
            ></motion.img>
            <motion.div
              layoutId={`title${layoutId}`}
              className="flex w-80 flex-col items-start gap-y-1"
            >
              <motion.p
                className={`rounded-md text-xl font-semibold text-[#85a6bc]`}
              >
                {title}
              </motion.p>
              <motion.p className={`rounded-md text-[#515050]`}>
                {organization}
              </motion.p>
            </motion.div>
          </motion.div>

          {/* readmore */}
          <motion.div
            className={`flex h-80 w-full flex-col items-start justify-center rounded-lg`}
          >
            <motion.div layoutId={`date${layoutId}`} className="mt-auto">
              <motion.p className={`flex items-center gap-x-1`}>
                <CalendarDaysIcon className="size-7 shrink-0" />
                <motion.span className={`rounded-md`}>
                  {deadline &&
                    `${deadline.getDate()}/${deadline.getMonth()}/${deadline.getFullYear()}`}
                </motion.span>
              </motion.p>
              <motion.p className={`flex  items-center gap-x-1`}>
                <MapPinIcon className="size-7 shrink-0" />
                <motion.span className={` rounded-md`}>{location}</motion.span>
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          exit={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1 }}
        >
          {description}
        </motion.p>
        <motion.a
          href={link}
          layoutId={`button${layoutId}`}
          className="mt-2 flex items-center justify-center gap-x-2 rounded-xl bg-[#85a6bc] px-3 py-2 text-center font-semibold text-white shadow-black hover:shadow-md"
        >
          <motion.span layout="position" layoutId={`buttonText${layoutId}`}>
            Read More
          </motion.span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default EventCardExpand;
