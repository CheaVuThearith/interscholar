"use client";
import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/16/solid";
import { usePathname } from "next/navigation";

type Props = {
  image?: string;
  title?: string;
  organization?: string;
  deadline?: Date;
  location?: string;
  className?: string;
  _id?: string;
};

const EventCard = ({
  _id,
  image,
  title,
  deadline,
  organization,
  location,
  className,
}: Props) => {
  if (deadline) {
    deadline = new Date(deadline);
  }
  const pathname = usePathname();

  return (
    <a
      href={`${pathname}/${_id}`}
      className={`flex h-full max-w-[368px] transform cursor-pointer flex-col items-start justify-between gap-y-3 self-start justify-self-center rounded-xl bg-white p-0 shadow-xl transition-all duration-200 p-6 lg:hover:scale-105 lg:hover:border`}
    >
      <div className="flex flex-col gap-y-3">
        {title ? (
          <img
            src={image}
            className="size-80 rounded-xl border-0 object-cover"
          ></img>
        ) : (
          <div className="loading size-80 rounded-xl border-0 object-cover"></div>
        )}
        <div className="flex w-80 flex-col items-start gap-y-1">
          <p
            className={`w-full text-xl font-semibold ${!title && "loading h-7"} rounded-md text-[#85a6bc]`}
          >
            {title}
          </p>
          <p
            className={`w-full text-[#515050] ${!title && "loading h-7"} rounded-md`}
          >
            {organization}
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center gap-y-3">
        <div
          className={`${!title && "loading h-14"} flex w-full items-center justify-between rounded-lg`}
        >
          <div className="flex w-1/2 flex-col gap-y-1">
            <p className={`flex w-full items-center gap-x-1`}>
              {title && <CalendarDaysIcon className="size-7 shrink-0" />}{" "}
              <span className={` w-full rounded-md`}>
                {deadline &&
                  `${deadline.getDate()}/${deadline.getMonth()}/${deadline.getFullYear()}`}
              </span>
            </p>
            <p className={`flex  w-full items-center gap-x-1`}>
              {title && <MapPinIcon className="size-7 shrink-0" />}{" "}
              <span className={` w-full rounded-md`}>{location}</span>
            </p>
          </div>
          {title && (
            <button className="mt-2 flex items-center justify-center gap-x-2 rounded-xl bg-[#85a6bc] px-3 py-2 text-center font-semibold text-white shadow-black hover:shadow-md">
              Explore
            </button>
          )}
        </div>
      </div>
    </a>
  );
};

export default EventCard;
