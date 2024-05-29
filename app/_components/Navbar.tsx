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
        onMouseEnter={() => setNavOpen(true)}
        ref={NavbarRef}
        className={`sticky top-5 z-10 m-auto mt-4 flex h-24 items-center justify-center gap-6 overflow-hidden rounded-full xl:ml-8 ${navOpen ? "p-8 xl:justify-between" : "xl:justify-center"} ${colorOn && "bg-[#faf6f0]"} drop-shadow-lg `}
        initial={{width:"97%"}}
        animate={
          !navOpen
            ? { width: 96 }
            : {
                width: "97%",
              }
        }
        transition={{
          default: { duration: 0.7, ease: easeInOut },
        }}
      >
        <div className={`flex h-20 items-center justify-center`}>
          <a
            href="/"
            className="flex items-center justify-center gap-x-2 transition-all"
          >
            <Image
              width={60}
              height={60}
              src="/interscholarlogo.png"
              alt="logo"
            />
            {navOpen && (
              <p className="flex items-center justify-center text-xl font-semibold text-[#85bd71]">
                InterScholar
              </p>
            )}
          </a>
        </div>
        {navOpen && (
          <>
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
          </>
        )}
      </motion.nav>
    </>
  );
};
// TODO: make nav hamburger
export default Navbar;
