"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import SearchBar from "./SearchBar";
import Image from "next/image";
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
      return (
            <>
                  <div className="sticky inset-x-10 top-0 z-10 flex h-20 overflow-hidden items-center justify-center gap-6 bg-[#ffffff] px-8 drop-shadow-lg xl:justify-between">
                        <div className="h-20">
                              <a href="/" className="flex items-center justify-center gap-x-2">
                                    <Image
                                          width={80}
                                          height={80}
                                          src="/interscholarlogo.webp"
                                          alt="logo"
                                          />
                                          <p className="size-20 flex items-center relative justify-center text-xl font-semibold text-[#85bd71]">
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
                                                      console.log(
                                                            "prefetching"
                                                      );
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
                  </div>
            </>
      );
};
// TODO: make nav hamburger
export default Navbar;
