import {
      ArrowLeftEndOnRectangleIcon,
      ArrowLeftIcon,
      ArrowRightIcon,
      CheckCircleIcon,
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
                  <div className=" flex flex-col">
                        <h1 className="text-6xl">Features</h1>
                        <div className="flex gap-x-4">
                              <Card title="Test1"></Card>
                              <Card title="Test1"></Card>
                              <Card title="asd"></Card>
                              <Card title="Test1"></Card>
                        </div>
                  </div>
            </>
      );
}
