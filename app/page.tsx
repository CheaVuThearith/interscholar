import {
  ArrowLeftEndOnRectangleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BuildingLibraryIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/16/solid";
import OpportunityCard from "./_components/OpportunityCard";
import SearchBar from "./_components/SearchBar";
import Card from "./_components/Card";
import CircleCard from "./_components/CircleCard";

export default function Home() {
  const checkList = [
    "Comprehensive Coverage",
    "Convenience at Your Fingertips",
    "Expert Support",
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-between gap-y-12 bg-[#e1f0da] p-28 xl:flex-row xl:items-stretch">
        <div className="flex flex-col gap-y-7 xl:w-[700px]">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-6xl font-semibold">
              Find All <span className="text-[#85bd71]">Opportunities</span>{" "}
              Here!
            </h1>
            <p className="text-[#515050]">
              Our platform is your one-stop hub for all study opportunities,
              from competitions to scholarships, ensuring convenience at every
              click. Plus, with top-notch consultancy and seamless admission
              assistance, success is just a step away!
            </p>
          </div>

          <ul className="flex flex-col gap-y-2 text-[#515050]">
            {checkList.map((item, index) => (
              <li className="flex items-center gap-x-2" key={index}>
                <CheckCircleIcon className="size-8" /> {item}
              </li>
            ))}
          </ul>
          <button className="group flex h-12 w-52 items-center justify-center gap-x-2 rounded-3xl bg-[#99bc85] font-semibold">
            Explore now{" "}
            <ArrowRightIcon className="size-6 transition-all duration-200 group-hover:translate-x-2 group-hover:scale-x-125" />{" "}
          </button>
        </div>
        <div className="size-96 bg-black"></div>
      </div>
      {/* features  */}
      <div className=" flex flex-col items-center gap-y-20 px-44 py-20 xl:items-stretch">
        <h1 className="text-6xl font-bold">Our Features</h1>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Card title="Resources">
            <InformationCircleIcon className="size-44" />
          </Card>
          <Card title="Assisted Application">
            <BuildingLibraryIcon className="size-44" />
          </Card>
          <Card title="Resources">
            <InformationCircleIcon className="size-44" />
          </Card>
          <Card title="Assisted Application">
            <BuildingLibraryIcon className="size-44" />
          </Card>
        </div>
      </div>
      {/* Our Team */}
      <div className="flex flex-col items-center justify-center gap-y-16 bg-[#e1f0da] px-44 py-20">
        <h1 className="text-6xl font-bold">Our Team</h1>
        <div className="flex w-full flex-wrap justify-around gap-12">
          <CircleCard />
          <CircleCard />
          <CircleCard />
        </div>
      </div>
    </>
  );
}
