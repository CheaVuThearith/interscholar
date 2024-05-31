import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";

type Props = {};

const NavbarShrunk = (props: Props) => {
  return (
    <>
      <motion.nav
        layout
        onTap={() => {
          // setNavOpen(true);
        }}
        onMouseEnter={() => {
          if (window.innerWidth > 1024) {
            // setNavOpen(true);
          }
        }}
        // ref={NavbarRef}
        className={`fixed top-5 z-10 ml-4 mr-auto mt-4 flex h-12 w-12 flex-col items-center justify-center gap-6 rounded-xl bg-[#faf6f0] p-0 drop-shadow-lg lg:sticky lg:ml-8 lg:h-24 lg:w-24 lg:flex-row `}
      >
        {/* logo */}
        <motion.div
          layout="position"
          className={`flex h-10 items-center justify-center gap-x-2 lg:h-20`}
        >
          <motion.img
            className="size-8 lg:size-16"
            src="/interscholarlogo.png"
            alt="logo"
          />
        </motion.div>
      </motion.nav>
    </>
  );
};

export default NavbarShrunk;
