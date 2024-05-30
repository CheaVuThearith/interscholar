import {
  Competition,
  ExtraCurricular,
  Internship,
  Scholarship,
} from "@/lib/mongo";
import { NextRequest, NextResponse } from "next/server";

const infoTypeHashMap = {
  competitions: Competition,
  extracurriculars: ExtraCurricular,
  internships: Internship,
  scholarships: Scholarship,
};

export async function POST(req: NextRequest, context: any) {
  try {
    const { params } = context;
    const body = await req.json();
    const infoData = body;
    await infoTypeHashMap[params.slug as keyof typeof infoTypeHashMap].create(
      infoData,
    );

    return NextResponse.json({ message: "Success!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
export async function GET(req: NextRequest, context: any) {
  try {
    const { params } = context;
    const searchParams = req.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") ?? "1");
    const itemsPerPage = parseInt(searchParams.get("itemsPerPage") ?? "9");
    const filterString = searchParams.get("filterList") ?? "";
    const filterList = filterString.split(",") ?? [];
    const itemsToFilter: { [key: string]: number } =
      filterList[0] === ""
        ? {}
        : filterList.reduce(
            (obj, element) => {
              obj[element] = 1;
              return obj;
            },
            {} as { [key: string]: number },
          );

    const info = await infoTypeHashMap[
      params.slug as keyof typeof infoTypeHashMap
    ]
      .find(
        itemsToFilter,
        {},
        { limit: itemsPerPage, skip: (page - 1) * itemsPerPage },
      )
      .sort({ _id: -1 });
    return NextResponse.json(
      { info, itemsToFilter, filterList },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
