import React from "react";

type Props = {
      title: string;
      description: string;
};

const OpportunityCard = ({ title, description }: Props) => {
      return (
            <div className="flex flex-col items-center justify-center mb-6">
                  <div className="h-80 w-[90%] rounded-lg bg-blue-200"></div>
                  <div className="mt-4 w-[90%]">
                  <h2 className="text-xl font-bold">{title}</h2>
                  <p>{description}</p>
                  </div>
            </div>
      );
};

export default OpportunityCard;
