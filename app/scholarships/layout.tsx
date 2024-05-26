import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div>
      <div className="mx-auto mt-20 flex w-[90%] flex-col items-center justify-center gap-y-20 rounded-xl bg-white px-0 py-20 pb-10 shadow-lg lg:px-6">
        {children}
      </div>
    </div>
  );
};

export default layout;
