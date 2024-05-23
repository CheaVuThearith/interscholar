import { Internship } from "@/lib/mongo";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const internshipData = body;
    await Internship.create(internshipData);

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
    const internships = await Internship.find({}, {}, {limit:itemsPerPage, skip:(page-1)*itemsPerPage});
    return NextResponse.json({ internships }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
