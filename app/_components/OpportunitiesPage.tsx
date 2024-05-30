"use client";
import FilterMenu from "@/app/_components/FilterMenu";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import PaginationControls from "./PaginationControls";
import EventCardExpand from "./EventCardExpand";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
  params: {
    slug: string;
  };
  info: any[];
  amountOfPages: number;
};
interface scholarshipType {
  _id: string;
  title: string;
  organization: string;
  deadline: Date;
  location: string;
  description: string;
  local: boolean;
  abroad: boolean;
  //level
  masters: boolean;
  phds: boolean;
  exchangeprograms: boolean;
  //major
  facultyofengineering: boolean;
  facultyofscience: boolean;
  facultyofsocialsciences: boolean;
  facultyofarts: boolean;
}
const scholarshipsFilters = [
  "Local",
  "Abroad",
  "Bachelors",
  "Masters",
  "PhDs",
  "Exchange Programs",
  "Faculty of Engineering",
  "Faculty of Arts",
  "Faculty of Science",
  "Faculty of Social Sciences",
];
const competitionsFilters = ["Local", "Abroad"];
const extracurricularsFilters = ["Local", "Abroad"];
const internshipsFilters = ["Local", "Abroad"];

const filterHashmap = {
  scholarships: scholarshipsFilters,
  internships: internshipsFilters,
  competitions: competitionsFilters,
  extracurriculars: extracurricularsFilters,
};
const OpportunitiesPage = ({ params, info, amountOfPages }: Props) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  useEffect(() => {}, [selectedId]);
  return (
    <>
      <LayoutGroup>
        <div className="relative mx-auto mt-20 flex min-h-[150vh] max-w-screen-2xl flex-col items-start justify-around gap-y-20 px-4 lg:flex-row lg:px-8">
          {/* filters */}
          <FilterMenu
            filterOptions={
              filterHashmap[params.slug as keyof typeof filterHashmap]
            }
          />
          <div className="flex max-w-screen-xl grow flex-col gap-y-10">
            <div className="flex w-full flex-wrap place-content-center gap-x-5 gap-y-20">
              {info.map((entry, index) => (
                <EventCard
                  onClick={() => setSelectedId(index.toString())}
                  layoutId={index.toString()}
                  key={index}
                  title={entry.title}
                  deadline={entry.deadline}
                  location={entry.location}
                  organization={entry.organization}
                />
              ))}
              <AnimatePresence>
                {selectedId && (
                  <>
                    <EventCardExpand
                    description={info[parseInt(selectedId)].description}
                      title={info[parseInt(selectedId)].title}
                      deadline={info[parseInt(selectedId)].deadline}
                      location={info[parseInt(selectedId)].location}
                      organization={info[parseInt(selectedId)].organization}
                      onClick={() => setSelectedId(null)}
                      layoutId={selectedId}
                    />
                  </>
                )}
              </AnimatePresence>
            </div>
            <PaginationControls
              className=" mx-auto lg:me-10 lg:ms-auto"
              amountOfPages={Math.ceil(amountOfPages)}
            />
          </div>
        </div>
      </LayoutGroup>
    </>
  );
};

export default OpportunitiesPage;
