import { Scholarship } from "@/lib/mongo";
import EventCard from "../_components/EventCard";
import PaginationControls from "../_components/PaginationControls";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};
const getScholarships = async ({ searchParams }: Props) => {
  try {
    const params = new URLSearchParams(searchParams as Record<string, string>);
    const res = await fetch(
      `https://interscholar.vercel.app/api/scholarships?${params}`,
      {
        cache: "no-store",
      },
    );
    return res.json();
  } catch (error) {
    console.log("failed to get information", error);
  }
};
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

const page = async ({ searchParams }: Props) => {
  const itemsPerPage = parseInt(
    Array.isArray(searchParams["itemsPerPage"])
      ? searchParams["itemsPerPage"][0]
      : searchParams["itemsPerPage"] ?? "10",
  );
  const amountOfPages = (await Scholarship.countDocuments()) / itemsPerPage;
  const { scholarships }: { scholarships: scholarshipType[] } =
    await getScholarships({ searchParams });
  return (
    <>
      <div>
        <div className="mx-auto mt-20 flex w-[90%] flex-col items-center justify-center gap-y-20 rounded-xl bg-white px-0 py-20 pb-10 shadow-lg lg:px-6">
          <div
            className="grid w-full gap-12 p-3"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            }}
          >
            {scholarships.map((entry, index) => (
              <EventCard
                className="max-w-[368px] transform cursor-pointer self-start justify-self-center rounded-xl p-0 transition-all duration-200 lg:p-6 lg:hover:scale-105 lg:hover:border lg:hover:shadow-xl"
                key={index}
                title={entry.title}
                deadline={entry.deadline}
                location={entry.location}
                organization={entry.organization}
              />
            ))}
          </div>
          <PaginationControls
            className=" mx-auto lg:me-0 lg:ms-auto"
            amountOfPages={Math.ceil(amountOfPages)}
          />
        </div>
      </div>
    </>
  );
};

export default page;
