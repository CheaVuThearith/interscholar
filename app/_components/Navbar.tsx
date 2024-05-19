"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SearchBar from "./SearchBar";
import Image from "next/image";
type Props = {};

const Navbar = (props: Props) => {
  const pathName = usePathname();
  const pages = ["Scholarships", "Programs", "Services"];
  return (
    <>
      <div className="sticky inset-x-10 top-0 flex h-24 overflow-hidden items-center justify-center gap-6 bg-[#ffffff] p-8 drop-shadow-lg xl:justify-between">
        <div className="size-24 after:bottom-5 after:left-2 relative bottom-2 after:content-['InterScholar'] after:size-20 after:font-semibold after:text-sm after:relative after: after:text-[#fa9183]">
          <img src="interscholarlogo.webp" alt="logo" />
        </div>

        <div className="absolute -z-10 inset-x-0 hidden items-center justify-center gap-x-12 xl:flex">
          {pages.map((page, index) => (
            <Link key={index} className="text-lg" href={page.toLowerCase()}>
              {page}
            </Link>
          ))}
        </div>

        <div className="hidden items-center justify-center gap-x-5 xl:flex">
          <SearchBar />
          <button className="hidden rounded-md bg-[#99bc85] px-3 py-2 xl:block">
            Login
          </button>
        </div>
      </div>
    </>
  );
};
// TODO: make nav hamburger
export default Navbar;
