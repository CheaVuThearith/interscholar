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
export async function GET(
  req: NextRequest,
  context: {
    params: {
      slug: string[];
    };
  },
) {
  try {
    const { params } = context;
    if (params.slug.length <= 1) {
      const searchParams = req.nextUrl.searchParams;
      const page = parseInt(searchParams.get("page") ?? "1");
      const itemsPerPage = parseInt(searchParams.get("itemsPerPage") ?? "9");
      const info = await infoTypeHashMap[
        params.slug[0] as keyof typeof infoTypeHashMap
      ]
        .find(
          {},
          {},
          {
            limit: itemsPerPage,
            skip: (page - 1) * itemsPerPage,
          },
        )
        .sort({ _id: -1 });
      return NextResponse.json({ info }, { status: 200 });
    } else {
      const info = await infoTypeHashMap[
        params.slug[0] as keyof typeof infoTypeHashMap
      ].find({ _id: params.slug[1] }, {}, {});
      return NextResponse.json({ info }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
