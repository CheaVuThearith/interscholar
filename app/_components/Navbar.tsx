"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import SearchBar from "./SearchBar";
import Image from "next/image";
import { useEffect, useRef } from "react";
type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();
  const pathName = usePathname();
  const pages = [
    "Scholarships",
    "Competitions",
    "Extra-Curriculars",
    "Internships",
  ];

  let scrollY = 0;
  const NavbarRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    console.log(window.scrollY);
    if (NavbarRef.current) {
      if (
        window.scrollY > 16 &&
        !NavbarRef.current.classList.contains("nav_background_on")
      ) {
        NavbarRef.current.classList.add("nav_background_on");
      } else if (window.scrollY < 16) {
        NavbarRef.current.classList.remove("nav_background_on");
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, [NavbarRef]);
  return (
    <>
      <nav
        ref={NavbarRef}
        className="sticky inset-x-10 top-0 z-10 mt-4 flex h-20 items-center justify-center gap-6 overflow-hidden px-8 drop-shadow-lg transition-all duration-200 xl:justify-between"
      >
        <div className="flex h-20 items-center justify-center">
          <a
            href="/"
            className="relative flex items-center justify-center gap-x-2"
          >
            <Image
              width={60}
              height={60}
              src="/interscholarlogo.png"
              alt="logo"
            />
            <p className="flex items-center justify-center text-xl font-semibold text-[#85bd71]">
              InterScholar
            </p>
          </a>
        </div>

        <div className="hidden items-center justify-center gap-x-12 xl:flex">
          {pages.map((page, index) => {
            const href = `/opportunities/${page.toLowerCase().replace("-", "")}`;
            return (
              <Link
                key={index}
                onMouseEnter={() => {
                  router.prefetch(href);
                }}
                className="text-lg"
                href={href}
              >
                {page}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center justify-center gap-x-5 xl:flex">
          <SearchBar />
          <button className="hidden rounded-md bg-[#99bc85] px-3 py-2 xl:block">
            Login
          </button>
        </div>
      </nav>
    </>
  );
};
// TODO: make nav hamburger
export default Navbar;
