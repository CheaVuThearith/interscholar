import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const linkLists = [
    "Our Vision",
    "Features",
    "Our Team",
    "Recently Added",
    "Contact",
  ];
  const year = (new Date).getFullYear()
  return (
    <section className="p-28 py-10">
        <div className="flex flex-wrap items-center md:justify-between justify-center gap-8 max-w-screen-2xl mx-auto">
      <ul className="flex flex-wrap md:justify-start justify-center gap-y-1 text-xl gap-x-4 text-center">
        {linkLists.map((link, index) => (
            <li key={index}>
            <a href={link.replace(" ", "").toLowerCase()}>{link}</a>
          </li>
        ))}
      </ul>
      <p className="text-center">Copyright © InterScholar {year}</p>
        </div>
    </section>
  );
};

export default Footer;
