import { ExtraCurricular } from "@/lib/mongo";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const extraCurricularData = body;
    await ExtraCurricular.create(extraCurricularData);

    return NextResponse.json({ message: "Success!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") ?? "1");
    const itemsPerPage = parseInt(searchParams.get("itemsPerPage") ?? "10");
    const info = await ExtraCurricular.find(
      {},
      {},
      { limit: itemsPerPage, skip: (page - 1) * itemsPerPage },
    );
    return NextResponse.json({ info }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
