import EventCard from "@/app/_components/EventCard";

type Props = {
  params: {
    moreInfo: string;
    slug: string;
  };
};

const getInfo = async (params: { moreInfo: string; slug: string }) => {
  try {
    const fetchLink = `${process.env.FETCH_URL}/api/${params.slug}/${params.moreInfo}`;
    const res = await fetch(fetchLink 
         ,{
        cache: "no-store",
      }
    );
    return res.json();
  } catch (error) {
    console.log(params);
    console.log("failed to get information", error);
  }
};

const page = async ({ params }: Props) => {
  const { info } = await getInfo(params);
  return (
    <>
      {info.map(
        (
          card: {
            _id: string;
            title: string;
            deadline: Date;
            image: string;
            location: string;
            organization: string;
          },
          index: number
        ) => (
          <EventCard
            key={index}
            title={card.title}
            _id={card._id}
            deadline={card.deadline}
            image={card.image}
            location={card.location}
            organization={card.organization}
          />
        )
      )}
    </>
  );
};

export default page;
