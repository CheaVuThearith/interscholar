import OpportunitiesPage from "@/app/_components/OpportunitiesPage";
import {
  Competition,
  ExtraCurricular,
  Internship,
  Scholarship,
} from "@/lib/mongo";
import React from "react";

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
      }
    );
    return res.json();
  } catch (error) {
    console.log("failed to get information", error);
  }
};

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
      : searchParams["itemsPerPage"] ?? "9"
  );
  const filterString = (searchParams["filterList"] as string) ?? "";
  const filterList = filterString.split(",");
  const itemsToFilter: { [key: string]: number } =
    filterList[0] === "" || filterList.length === 0
      ? {}
      : filterList.reduce(
          (obj, element) => {
            obj[element] = 1;
            return obj;
          },
          {} as { [key: string]: number }
        );
  const amountOfPages =
    (await infoTypeHashMap[
      params.slug as keyof typeof infoTypeHashMap
    ].countDocuments(itemsToFilter)) / itemsPerPage;

  const { info }: { info: any[] } = await getInfo({
    searchParams,
    params,
  });

  return (
    <OpportunitiesPage
      amountOfPages={amountOfPages}
      info={info}
      searchParams={searchParams}
      params={params}
    />
  );
};

export default page;
