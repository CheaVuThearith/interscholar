"use client";
import { easeInOut, motion } from "framer-motion";
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
    setNavOpen(window.innerWidth < 1024 ? false : true);
    setColorOn(window.innerWidth >= 1024 ? false : true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (NavbarRef.current) {
        if (window.scrollY > 16 && navOpen) {
          setNavOpen(false);
          setColorOn(true);
        } else if (window.scrollY < 16 && window.innerWidth > 1024) {
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
        className={`h12 fixed inset-x-0 top-5 z-10 mt-4 flex flex-col items-center justify-center gap-6 overflow-hidden rounded-lg [--for-height-closed:3rem] [--for-height:auto] [--for-padding:16px] [--for-width:48px] [--ml:16px] lg:sticky lg:flex-row lg:overflow-hidden lg:rounded-full lg:[--for-height-closed:96px] lg:[--for-height:6rem] lg:[--for-padding:2rem] 
         lg:[--for-width:96px] lg:[--ml:32px] ${navOpen ? "p-0 lg:justify-between lg:p-8" : "lg:justify-center"} ${colorOn && "bg-[#faf6f0]"} drop-shadow-lg `}
        initial={{
          width: "97%",
          marginLeft: "auto",
          marginRight: "auto",
          height: "var(--for-height)",
        }}
        animate={
          !navOpen
            ? {
                paddingTop: 0,
                width: "var(--for-width)",
                marginLeft: "var(--ml)",
                height: "var(--for-height-closed)",
              }
            : {
                paddingTop: "var(--for-padding)",
                width: "97%",
                marginLeft: "auto",
                marginRight: "auto",
                height: "var(--for-height)",
              }
        }
        transition={{
          default: { duration: 0.7, ease: easeInOut },
          marginLeft: !navOpen ? { delay: 0 } : { delay: 0.8 },
          marginRight: !navOpen ? { delay: 0 } : { delay: 0.8 },
        }}
      >
        {/* logo */}
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
            <div className=" flex w-full flex-col items-center justify-center gap-x-12 lg:w-auto lg:flex-row">
              {pages.map((page, index) => {
                const href = `/opportunities/${page.toLowerCase().replace("-", "")}`;
                return (
                  <Link
                    className="flex h-16 w-full items-center justify-center rounded-xl text-lg transition-colors duration-200 lg:hover:bg-transparent hover:bg-slate-500 lg:w-auto"
                    key={index}
                    onMouseEnter={() => {
                      router.prefetch(href);
                    }}
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
export default Navbar;
