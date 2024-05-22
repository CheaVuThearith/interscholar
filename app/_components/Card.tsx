import { InformationCircleIcon, TvIcon } from "@heroicons/react/16/solid";
import React, { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

const Card = ({ title, children }: Props) => {
  return (
    <div
      className='after:content-["Loremsasdasfdhqashfbjakjsbfkajsgfdiqhwgrjfhasfhasgfgaeyudfgfqasuyihfgauhsdghasdfgasjhdasdagsrhf"] after:absolute overflow-visible after:top-[300px] after:w-max after:rounded-lg after:duration-200 after:opacity-0 hover:after:opacity-100 after:transition-all after:shadow-lg after:p-5 after:bg-white after:shadow-[#000000a6] after:h-36 after:text-black relative flex size-64 flex-col rounded-xl bg-[#e1f0da]'
    >
      <div className="flex h-[75%] w-full items-center justify-center overflow-hidden">
        {" "}
        {children}
      </div>
      <p className="flex grow items-center justify-center bg-[#ffffff90] text-2xl font-semibold text-[#515050]">
        {title}
      </p>
    </div>
  );
};

export default Card;
