"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SearchBar from "./SearchBar";
type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();
  const pages = [
    "Scholarships",
    "Competitions",
    "Extra-Curriculars",
    "Internships",
  ];

  const NavbarRef = useRef<HTMLDivElement>(null);
  const [navOpen, setNavOpen] = useState(false);
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
      {navOpen ? (
        <motion.nav
          layout
          onTap={() => {
            setNavOpen(true);
          }}
          onMouseEnter={() => {
            if (window.innerWidth > 1024) {
              setNavOpen(true);
            }
          }}
          ref={NavbarRef}
          className={`fixed inset-x-0 top-5 z-10 mx-auto mr-auto mt-4 flex aspect-auto h-auto w-[97%] flex-col items-center justify-center gap-6 rounded-xl p-4 drop-shadow-lg lg:sticky lg:h-24 lg:flex-row lg:justify-between lg:p-8 ${colorOn && "bg-[#faf6f0]"}`}
        >
          {/* logo */}
          <motion.div
            layout="position"
            className={`flex h-10 items-center justify-center gap-x-2 lg:h-20`}
          >
            <motion.img
              layoutId="navbar_image_layout"
              className="size-8 lg:size-16"
              src="/interscholarlogo.png"
              alt="logo"
            />
            <motion.a
              layout="position"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              href="/"
              className="flex items-center justify-center text-base font-semibold text-[#85bd71] lg:text-xl"
            >
              InterScholar
            </motion.a>
          </motion.div>
          <AnimatePresence>
            <motion.div
              initial={{
                opacity: 0,
                x: -50,
                y: "var(--for_y)",
              }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.2 }}
              layout="position"
              className=" flex w-full flex-col items-center justify-center gap-x-12 [--for_y:-100] lg:w-auto lg:flex-row lg:[--for_y:0]"
            >
              {pages.map((page, index) => {
                const href = `/opportunities/${page.toLowerCase().replace("-", "")}`;
                return (
                  <Link
                    onClick={() => {
                      if (window.innerWidth < 1024) {
                        setNavOpen(false);
                      }
                    }}
                    className="flex h-16 w-full items-center justify-center rounded-xl text-lg transition-colors hover:bg-slate-500 lg:w-auto lg:hover:bg-transparent"
                  key={`navbar_${index}`}
                    onMouseEnter={() => {
                      router.prefetch(href);
                    }}
                    href={href}
                  >
                    {page}
                  </Link>
                );
              })}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="hidden items-center justify-center gap-x-5 opacity-60 lg:flex"
            >
              <SearchBar />
              <button className="hidden cursor-not-allowed rounded-md bg-[#99bc85] px-3 py-2 lg:block">
                Login
              </button>
            </motion.div>
          </AnimatePresence>
        </motion.nav>
      ) : (
        // shurnk
        <motion.nav
          layout
          onTap={() => {
            setNavOpen(true);
          }}
          onMouseEnter={() => {
            if (window.innerWidth > 1024) {
              setNavOpen(true);
            }
          }}
          ref={NavbarRef}
          className={`fixed top-5 z-10 ml-4 mr-auto mt-4 flex h-12 w-12 flex-col items-center justify-center gap-6 rounded-xl bg-[#faf6f0] p-0 drop-shadow-lg lg:sticky lg:ml-8 lg:h-24 lg:w-24 lg:flex-row `}
        >
          <motion.div
            layout="position"
            className={`flex h-10 items-center justify-center gap-x-2 lg:h-20`}
          >
            <motion.img
              layout="position"
              layoutId="navbar_image_layout"
              className="size-8 lg:size-16"
              src="/interscholarlogo.png"
              alt="logo"
            />
          </motion.div>
        </motion.nav>
      )}
    </>
  );
};
export default Navbar;
