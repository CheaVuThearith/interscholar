import React from "react";
import RecentAddCard from "../RecentAddCard";
import { usePathname } from "next/navigation";
import { Scholarship } from "@/lib/mongo";
import RecentCardsContainer from "../RecentCardsContainer";

type Props = {};
interface scholarshipType {
  title: string;
  organization: string;
  deadline: Date;
  location: string;
  description: string;
  local: boolean;
  abroad: boolean;
  //level
  masters: boolean;
  phd: boolean;
  exchangeProgram: boolean;
  //major
  engineering: boolean;
  science: boolean;
  socialSciences: boolean;
  arts: boolean;
}

const RecentlyAddedSection = async (props: Props) => {
  const scholarships = await Scholarship.find({}, {}, { limit: 4 }).sort({
    _id: -1,
  });
  return (
    <section className="px-6 py-20">
      <div
        className="mx-auto flex max-w-screen-2xl flex-col items-center 
gap-y-20 xl:items-stretch"
      >
        <h1 className="text-6xl font-bold ">Recently Added</h1>
        <RecentCardsContainer>
          {scholarships.map((scholarship, index) => (
            <RecentAddCard
              key={index}
              deadline={scholarship.deadline}
              description={scholarship.description}
              image=""
              title={scholarship.title}
            />
          ))}
        </RecentCardsContainer>
      </div>
    </section>
  );
};

export default RecentlyAddedSection;
