import { ReactNode } from "react";

type Props = {
      title: string;
      children: ReactNode;
};

const Card = ({ title, children }: Props) => {
      return (
            <div className=" relative flex size-64 flex-col rounded-xl bg-[#e1f0da]">
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
