"use client";
import { easeInOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SearchBar from "./SearchBar";
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

  const NavbarRef = useRef<HTMLDivElement>(null);
  const [navOpen, setNavOpen] = useState(true);
  const [colorOn, setColorOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (NavbarRef.current) {
        if (window.scrollY > 16 && navOpen) {
          setNavOpen(false);
          setColorOn(true);
        } else if (window.scrollY < 16) {
          setColorOn(false);
          setNavOpen(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, [NavbarRef, navOpen]);

  return (
    <>
      <motion.nav
        onTap={() => {
          setNavOpen(true);
        }}
        onMouseEnter={() => {
          if (window.innerWidth > 1024) {
            setNavOpen(true);
          }
        }}
        ref={NavbarRef}
        className={`sticky top-5 z-10 mt-4 flex h-12 items-center justify-center gap-6 overflow-hidden rounded-full [--for-width:48px] [--ml:16px] lg:h-24 lg:[--for-width:96px] lg:[--ml:32px] ${navOpen ? "p-0 lg:justify-between lg:p-8" : "lg:justify-center"} ${colorOn && "bg-[#faf6f0]"} drop-shadow-lg `}
        initial={{ width: "97%", marginLeft: "auto", marginRight: "auto" }}
        animate={
          !navOpen
            ? {
                width: "var(--for-width)",
                marginLeft: "var(--ml)",
              }
            : {
                width: "97%",
                marginLeft: "auto",
                marginRight: "auto",
              }
        }
        transition={{
          default: { duration: 0.7, ease: easeInOut },
          marginLeft: !navOpen ? { delayChildren: 0 } : { delayChildren: 0.8 },
          marginRight: !navOpen ? { delayChildren: 0 } : { delayChildren: 0.8 },
        }}
      >
        <div className={`flex h-10 items-center justify-center lg:h-20`}>
          <div
            className={` flex items-center justify-center gap-x-2 transition-all`}
          >
            <img
              className="size-8 lg:size-16"
              src="/interscholarlogo.png"
              alt="logo"
            />
            {navOpen && (
              <a
                href="/"
                className="flex items-center justify-center text-base font-semibold text-[#85bd71] lg:text-xl"
              >
                InterScholar
              </a>
            )}
          </div>
        </div>
        {navOpen && (
          <>
            <div className="hidden items-center justify-center gap-x-12 lg:flex">
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
            <div className="hidden items-center justify-center gap-x-5 lg:flex">
              <SearchBar />
              <button className="hidden rounded-md bg-[#99bc85] px-3 py-2 lg:block">
                Login
              </button>
            </div>
          </>
        )}
      </motion.nav>
    </>
  );
};
// TODO: make nav hamburger
export default Navbar;
