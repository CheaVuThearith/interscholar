import {
  ArrowRightIcon,
  BuildingLibraryIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/16/solid";
import Card from "./_components/FeatureCard";
import CircleCard from "./_components/CircleCard";
import RecentAddCard from "./_components/RecentAddCard";

const checkList = [
  "Comprehensive Coverage",
  "Convenience at Your Fingertips",
  "Expert Support",
];

interface teamType {
  name: string;
  role: string;
  description: string;
  picture: string;
}

const team: teamType[] = [
  {
    name: "Chea VuThearith",
    role: "Developer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi totam dolores sunt consequuntur quidem veritatis sapiente eligendi dicta. Aspernatur, harum!",
    picture: "/team/cheavuthearith.webp",
  },
  {
    name: "Song Uylong",
    role: "UX/UI Design",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi totam dolores sunt consequuntur quidem veritatis sapiente eligendi dicta. Aspernatur, harum!",
    picture: "/team/songuylong.webp",
  },
  {
    name: "Chan Panha",
    role: "Researcher",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi totam dolores sunt consequuntur quidem veritatis sapiente eligendi dicta. Aspernatur, harum!",
    picture: "/team/chanpanha.webp",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#e1f0da] px-6 py-20">
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-y-12 xl:flex-row xl:items-stretch">
          <div className="flex max-w-[700px] flex-col gap-y-7">
            <div className="flex flex-col gap-y-4">
              <h1 className="text-6xl font-semibold">
                Find
                <span className="block text-[#85bd71] sm:hidden">
                  Everything
                </span>
                <span className="hidden sm:block">All</span>
                <span className="hidden text-[#85bd71] sm:block">
                  Opportunities
                </span>
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
            <a
              href="/scholarships"
              className="group flex h-12 w-52 items-center justify-center gap-x-2 rounded-3xl bg-[#99bc85] font-semibold"
            >
              Explore now
              <ArrowRightIcon className="size-6 transition-all duration-200 group-hover:translate-x-2 group-hover:scale-x-125" />
            </a>
          </div>
          <img
            src="book.gif"
            className="hidden h-auto w-[720px] shrink-0 grow object-cover mix-blend-screen sm:block"
          ></img>
        </div>
      </section>
      {/* features  */}
      <section className="px-6 py-20">
        <div
          className="mx-auto flex max-w-screen-2xl flex-col items-center
gap-y-20 xl:items-stretch"
        >
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
      </section>
      {/* Our Team */}
      <section className="bg-[#e1f0da] px-6 py-20">
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center gap-y-16">
          <h1 className="text-6xl font-bold ">Our Team</h1>
          <div className="flex w-full flex-wrap justify-around gap-12">
            {/* Chea VuThearith */}
            <CircleCard
              className="scale-[250%] relative top-6 right-2"
              name={team[0].name}
              picture={team[0].picture}
              role={team[0].role}
              description={team[0].description}
            />
            {/* Song Uylong */}
            <CircleCard
              className="scale-[350%] relative right-14"
              style={{objectPosition: "0% 40%"}}
              name={team[1].name}
              picture={team[1].picture}
              role={team[1].role}
              description={team[1].description}
            />
            {/* Chan Panha */}
            <CircleCard
              style={{objectPosition: "50% 30%"}}
              className="scale-110 relative right-2"
              name={team[2].name}
              picture={team[2].picture}
              role={team[2].role}
              description={team[2].description}
            />
          </div>
        </div>
      </section>
      {/* Recently added */}
      <section className="px-6 py-20">
        <div
          className="mx-auto flex max-w-screen-2xl flex-col items-center 
gap-y-20 xl:items-stretch"
        >
          <h1 className="text-6xl font-bold ">Recently Added</h1>
          <div className="flex flex-wrap items-center justify-center gap-12">
            <RecentAddCard />
            <RecentAddCard />
            <RecentAddCard />
            <RecentAddCard />
          </div>
        </div>
      </section>
      {/* Contact */}
      <section className="bg-[#e1f0da] px-6 py-20">
        <div
          className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-y-12
xl:flex-row xl:items-stretch"
        >
          <div className="flex flex-col gap-y-7 xl:w-[700px]">
            <div className="flex flex-col gap-y-4">
              <h1 className="text-6xl font-semibold">
                What Are you waiting for?
              </h1>
              <p className="text-[#515050]">
                We&apos;d love to hear from you! Whether you have a question,
                need assistance, or just want to chat, don&apos;t hesitate to
                reach out. Our dedicated team is always here to provide you with
                the support and answers you need.
              </p>
            </div>
            <button className="group flex h-16 w-56 items-center justify-center gap-x-2 rounded-full bg-[#525ceb] font-semibold text-white">
              Contact Us
              <ArrowRightIcon className="size-6 transition-all duration-200 group-hover:translate-x-2 group-hover:scale-x-125" />
            </button>
          </div>
          <ChatBubbleLeftRightIcon className="hidden size-96 rotate-12 sm:block" />
        </div>
      </section>
    </>
  );
}
