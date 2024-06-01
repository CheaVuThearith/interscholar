type Props = {};

const Footer = (props: Props) => {
  const linkLists = [
    "Our Vision",
    "Features",
    "Our Team",
    "Recently Added",
    "Contact",
  ];

  const year = new Date().getFullYear();
  return (
    <section className="px-6 pb-10 pt-14 md:px-10">
      <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-center gap-8 md:justify-between">
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-center text-base md:justify-start">
          {linkLists.map((link, index) => (
            <li 
            key={`footer_${index}`}
            >
              <a href={`/${link.replace(" ", "").toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
        <p className="text-center text-sm">Copyright © InterScholar {year}</p>
      </div>
    </section>
  );
};

export default Footer;
