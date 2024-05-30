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
  layoutId?: string;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  description: string;
};

const EventCardExpand = ({
  _id = "0",
  image,
  title,
  deadline,
  organization,
  description,
  location,
  layoutId = _id,
  onClick,
}: Props) => {
  if (deadline) {
    deadline = new Date(deadline);
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transform:"-50% -50%" }}
      transition={{ delay: 0, opacity: { delay: 0.1, duration: 0 } }}
      onClick={onClick}
      layoutId={layoutId}
      className={`fixed top-1/2 left-1/2 mx-auto flex flex-col w-[40rem] cursor-pointer justify-between gap-5 rounded-xl bg-white p-10 shadow-xl transition-all duration-200`}
    >
      <div className="flex gap-5">
        {/* img div */}
        <div className="flex flex-col gap-y-3">
          <img
            src={image}
            className="size-80 rounded-xl border-0 object-cover"
          ></img>
          <div className="flex w-80 flex-col items-start gap-y-1">
            <p className={`rounded-md text-xl font-semibold text-[#85a6bc]`}>
              {title}
            </p>
            <p className={`rounded-md text-[#515050]`}>{organization}</p>
          </div>
        </div>

        {/* readmore */}
        <div className={`flex h-80 w-full flex-col items-start justify-center rounded-lg`}>
          <p className={`flex items-center gap-x-1`}>
            <CalendarDaysIcon className="size-7 shrink-0" />
            <span className={` rounded-md`}>
              {deadline &&
                `${deadline.getDate()}/${deadline.getMonth()}/${deadline.getFullYear()}`}
            </span>
          </p>
          <p className={`flex  items-center gap-x-1`}>
            <MapPinIcon className="size-7 shrink-0" />
            <span className={` rounded-md`}>{location}</span>
          </p>
        </div>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
        voluptates cum repudiandae temporibus quod nemo ipsa saepe corporis
        facere, debitis ducimus, quia doloribus assumenda fuga expedita numquam
        modi deleniti. Ullam corporis vel quaerat fugiat. Fugit sapiente
        pariatur commodi perspiciatis voluptatem, a culpa beatae velit, quo
        sequi laborum alias non aliquam!
      </p>
      <button className="mt-2 flex items-center justify-center gap-x-2 rounded-xl bg-[#85a6bc] px-3 py-2 text-center font-semibold text-white shadow-black hover:shadow-md">
            Read More
          </button>

    </motion.div>
  );
};

export default EventCardExpand;
