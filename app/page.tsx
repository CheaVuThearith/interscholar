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

export default function Home() {
      const checkList = [
            "Comprehensive Coverage",
            "Convenience at Your Fingertips",
            "Expert Support",
      ];
      return (
            <>
                  <div className="flex flex-col items-center justify-between gap-y-12 bg-[#e1f0da] p-28 lg:flex-row lg:items-stretch">
                        <div className="flex flex-col gap-y-7 lg:w-[700px]">
                              <div className="flex flex-col gap-y-4">
                                    <h1 className="text-6xl font-semibold">
                                          Find All{" "}
                                          <span className="text-[#85bd71]">
                                                Opportunities
                                          </span>{" "}
                                          Here!
                                    </h1>
                                    <p className="text-[#515050]">
                                          Our platform is your one-stop hub for
                                          all study opportunities, from
                                          competitions to scholarships, ensuring
                                          convenience at every click. Plus, with
                                          top-notch consultancy and seamless
                                          admission assistance, success is just
                                          a step away!
                                    </p>
                              </div>

                              <ul className="flex flex-col gap-y-2 text-[#515050]">
                                    {checkList.map((item, index) => (
                                          <li
                                                className="flex items-center gap-x-2"
                                                key={index}
                                          >
                                                <CheckCircleIcon className="size-8" />{" "}
                                                {item}
                                          </li>
                                    ))}
                              </ul>
                              <button className="flex h-12 w-52 items-center justify-center gap-x-2 rounded-3xl bg-[#99bc85]">
                                    Explore now{" "}
                                    <ArrowRightIcon className=" size-8" />{" "}
                              </button>
                        </div>
                        <div className="size-96 bg-black"></div>
                  </div>
                  {/* features  */}
                  <div className=" flex px-44 lg:items-stretch items-center py-20 gap-y-16 flex-col">
                        <h1 className="text-6xl font-bold">Our Features</h1>
                        <div className="flex lg:flex-row gap-y-5 flex-col items-center gap-x-4">
                              <Card title="Resources"><InformationCircleIcon className="size-44"/></Card>
                              <Card title="Assisted Application"><BuildingLibraryIcon className="size-44"/></Card>
                              <Card title="Resources"><InformationCircleIcon className="size-44"/></Card>
                              <Card title="Assisted Application"><BuildingLibraryIcon className="size-44"/></Card>
                        </div>
                  </div>
                  {/* Our Team */}
                  <div className="items-center flex-col flex bg-[#e1f0da] px-44 py-20 justify-center">
                        <h1 className="text-6xl font-bold">Our Team</h1>
                        <div className="flex flex-col gap-y-3 justify-center items-center">
                              <div className="size-60 bg-black rounded-full"></div>
                              <div className="flex items-center flex-col">
                              <p className="text-3xl font-semibold">Name Name</p>
                              <p className="text-[#515050]">Role</p>
                              </div>
                              <p className="text-[#515050]">About Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id molestiae ut velit ea est eos sequi facere dolorem saepe ducimus?</p>
                        <button className="flex h-12 w-52 font-semibold items-center justify-center gap-x-2 rounded-3xl bg-[#99bc85]">
                                    Read More{" "}
                                    <ArrowRightIcon className=" size-8" />{" "}
                              </button>

                        </div>
                  </div>
            </>
      );
}
