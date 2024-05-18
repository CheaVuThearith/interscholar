"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SearchBar from "./SearchBar";
type Props = {};

const Navbar = (props: Props) => {
  const pathName = usePathname();
  const pages = ["Scholarships", "Programs", "Services"];
  return (
      <>
    <div className="sticky inset-x-10 top-0 flex h-20 items-center gap-6 justify-center xl:justify-between drop-shadow-lg bg-[#faf6f0] p-8">
      <div className="size-16 justify-self-start bg-black"></div>

      <div className="items-center hidden xl:flex gap-x-12 absolute inset-x-0 justify-center">
      {pages.map((page, index) => (
            <Link key={index} className="text-lg" href={page.toLowerCase()}>{page}
        </Link>
      ))}
      </div>

      <div className="justify-center hidden xl:flex items-center gap-x-5">
      <SearchBar/>
      <button className="px-3 py-2 hidden xl:block bg-[#99bc85] rounded-md">Login</button>
      </div>
    </div>
      </>
  );
};

export default Navbar;
