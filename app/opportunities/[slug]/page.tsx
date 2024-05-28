import {
  Competition,
  ExtraCurricular,
  Internship,
  Scholarship,
} from "@/lib/mongo";
import EventCard from "../../_components/EventCard";
import PaginationControls from "../../_components/PaginationControls";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
  params: {
    slug: string;
  };
};
const getInfo = async ({ searchParams, params }: Props) => {
  try {
    const sParams = new URLSearchParams(searchParams as Record<string, string>);
    const res = await fetch(
      `${process.env.FETCH_URL}/api/${params.slug}?${sParams}`,
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
  phd: boolean;
  exchangeProgram: boolean;
  //major
  engineering: boolean;
  science: boolean;
  socialSciences: boolean;
  arts: boolean;
}

const infoTypeHashMap = {
  competitions: Competition,
  extracurriculars: ExtraCurricular,
  internships: Internship,
  scholarships: Scholarship,
};
const page = async ({ searchParams, params }: Props) => {
  const itemsPerPage = parseInt(
    Array.isArray(searchParams["itemsPerPage"])
      ? searchParams["itemsPerPage"][0]
      : searchParams["itemsPerPage"] ?? "9",
  );
  const amountOfPages =
    (await infoTypeHashMap[
      params.slug as keyof typeof infoTypeHashMap
    ].countDocuments()) / itemsPerPage;

  const { info }: { info: scholarshipType[] } = await getInfo({
    searchParams,
    params,
  });
  return (
    <>
      <div className="flex w-full flex-wrap place-content-center gap-x-5 gap-y-20 p-3">
        {info.map((entry, index) => (
          <EventCard
            _id={entry._id}
            key={index}
            title={entry.title}
            deadline={entry.deadline}
            location={entry.location}
            organization={entry.organization}
          />
        ))}
      </div>
      <PaginationControls
        className=" mx-auto mt-10 lg:me-10 lg:ms-auto"
        amountOfPages={Math.ceil(amountOfPages)}
      />
    </>
  );
};

export default page;
