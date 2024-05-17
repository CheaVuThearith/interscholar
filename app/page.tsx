import { ArrowLeftEndOnRectangleIcon, ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/16/solid";
import OpportunityCard from "./_components/OpportunityCard";
import SearchBar from "./_components/SearchBar";

export default function Home() {
  const checkList = [
    "Comprehensive Coverage",
    "Convenience at Your Fingertips",
    "Expert Support",
  ];
  return (
    <div className="bg-[#e1f0da] lg:flex-row flex-col p-28 flex justify-between">
      <div className="lg:w-[700px] flex flex-col gap-y-7">

      <div className="flex flex-col gap-y-4">
        <h1 className="text-6xl font-semibold">
          Find All <span className="text-[#85bd71]">Opportunities</span> Here!
        </h1>
        <p className="text-[#515050]">
          Our platform is your one-stop hub for all study opportunities, from
          competitions to scholarships, ensuring convenience at every click.
          Plus, with top-notch consultancy and seamless admission assistance,
          success is just a step away!
        </p>
      </div>

      <ul className="text-[#515050] flex flex-col gap-y-2">
            {checkList.map((item, index)=><li className="flex gap-x-2 items-center" key={index}><CheckCircleIcon className="size-8"/> {item}</li>)}
      </ul>
      <button className="w-52 h-12 bg-[#99bc85] rounded-3xl flex gap-x-2 justify-center items-center">Explore now <ArrowRightIcon className=" size-8"/> </button>
      </div>
      <div className="size-96 bg-black"></div>
    </div>
  );
}
