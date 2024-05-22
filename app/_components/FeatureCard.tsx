import { InformationCircleIcon, TvIcon } from "@heroicons/react/16/solid";
import React, { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

const Card = ({ title, children }: Props) => {
  return (
    <div
      className='xl:after:delay-500 xl:after:content-["Loremsasdasfdhqashfbjakjsbfkajsgfdiqhwgrjfhasfhasgfgaeyudfgfqasuyihfgauhsdghasdfgasjhdasdagsrhf"] xl:after:absolute overflow-visible xl:after:top-[270px] xl:after:w-max xl:after:rounded-lg xl:after:duration-200 xl:after:opacity-0 hover:xl:after:opacity-100 xl:after:transition-all xl:after:shadow-lg xl:after:p-5 xl:after:bg-white xl:after:shadow-[#000000a6] xl:after:h-36 xl:after:text-black relative flex size-64 flex-col rounded-xl bg-[#e1f0da]'
    >
      <div className="flex h-[75%] w-full items-center justify-center overflow-hidden">
        {children}
      </div>
      <p className="flex grow items-center justify-center bg-[#ffffff90] text-2xl font-semibold text-[#515050]">
        {title}
      </p>
    </div>
  );
};

export default Card;
