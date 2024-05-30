"use client";
import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * Props for the EventCard component.
 */
type Props = {
  image?: string;
  title?: string;
  organization?: string;
  deadline?: Date;
  location?: string;
  className?: string;
  _id?: string;
  layoutId?: number;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const EventCard = ({
  _id = "0",
  image,
  title,
  deadline,
  organization,
  location,
  className,
  layoutId,
  onClick,
}: Props) => {
  if (deadline) {
    deadline = new Date(deadline);
  }

  return (
    <motion.div
      onClick={onClick}
      layoutId={layoutId?.toString()}
      whileHover={{ scale: 1.05 }}
      className={`flex h-full max-w-[368px] cursor-pointer flex-col items-start justify-between gap-y-3 self-start justify-self-center rounded-xl bg-white p-6 shadow-xl lg:hover:scale-105`}
    >
      <motion.div className="flex flex-col gap-y-3">
        {title ? (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={image}
            layoutId={`image${layoutId}`}
            className="size-80 rounded-xl border-0 object-cover"
          ></motion.img>
        ) : (
          <motion.div className="loading size-80 rounded-xl border-0 object-cover"></motion.div>
        )}
        <motion.div
          initial={title && { opacity: 0 }}
          animate={{ opacity: 1 }}
          layoutId={`title${layoutId}`}
          className="flex w-80 flex-col items-start gap-y-1"
        >
          <motion.p
            className={`w-full text-xl font-semibold ${!title && "loading h-7"} rounded-md text-[#85a6bc]`}
          >
            {title}
          </motion.p>
          <motion.p
            className={`w-full text-[#515050] ${!title && "loading h-7"} rounded-md`}
          >
            {organization}
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div className="flex w-full flex-col justify-center gap-y-3">
        <motion.div
          className={`${!title && "loading h-14"} flex w-full items-center justify-between rounded-lg`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            layoutId={`date${layoutId}`}
            className="flex w-1/2 flex-col gap-y-1"
          >
            <motion.p className={`flex w-full items-center gap-x-1`}>
              {title && <CalendarDaysIcon className="size-7 shrink-0" />}{" "}
              <motion.span className={` w-full rounded-md`}>
                {deadline &&
                  `${deadline.getDate()}/${deadline.getMonth()}/${deadline.getFullYear()}`}
              </motion.span>
            </motion.p>
            <motion.p className={`flex  w-full items-center gap-x-1`}>
              {title && <MapPinIcon className="size-7 shrink-0" />}{" "}
              <motion.span className={` w-full rounded-md`}>
                {location}
              </motion.span>
            </motion.p>
          </motion.div>
          {title && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              layoutId={`button${layoutId}`}
              className="mt-2 flex items-center justify-center gap-x-2 rounded-xl bg-[#85a6bc] px-3 py-2 text-center font-semibold text-white shadow-black hover:shadow-md"
            >
              <motion.span layoutId={`buttonText${layoutId}`} layout="position">
                Explore
              </motion.span>
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default EventCard;
