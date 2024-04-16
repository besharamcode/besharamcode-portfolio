import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <header className="fixed z-40 font-hind top-0 md:px-[6vw] sm:px-[4vw] px-[1rem] pt-4 text-text flex justify-between items-center w-full">
      <div className="absolute z-0 w-full h-full left-0 top-0"></div>
      <div>
        <p className="relative font-bold uppercase sm:text-[2.75rem] text-[2rem]">
          .Code
        </p>
      </div>
      <nav
        id="navbar"
        className="absolute z-10 transition-all -top-[50rem] md:top-[unset] md:static bg-bg md:bg-transparent w-full rounded-md left-1/2 md:translate-x-0 -translate-x-1/2 md:w-fit md:bg-none bg-gradient-to-tl from-[#000000] to-[#3F3F3F]"
      >
        <ul className="items-center gap-6 md:flex md:items-center md:justify-evenly md:gap-6">
          {[
            { title: "Home", link: "#home" },
            { title: "About", link: "#about" },
            { title: "Skills", link: "#skills" },
            { title: "Projects", link: "#projects" },
            { title: "Contact", link: "#contact" },
          ].map((link, i) => {
            return (
              <li
                key={i}
                className="text-center md:text-start md:my-[unset] my-4"
              >
                <a
                  href={link.link}
                  className={`text-text uppercase font-thin nav-anim relative block px-1 ${
                    activeLink === link.link ? "after:w-full" : ""
                  }`}
                >
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
        <button
          className="md:hidden absolute top-[0.4rem] right-[1rem]"
          onClick={() => {
            const nav = document.getElementById("navbar");
            nav.classList.add("-top-[50rem]");
            nav.classList.remove("top-[0%]");
          }}
        >
          <FontAwesomeIcon icon={faXmark} className="text-text text-2xl " />
        </button>
      </nav>
      <button
        onClick={() => {
          const nav = document.getElementById("navbar");
          nav.classList.remove("-top-[50rem]");
          nav.classList.add("top-[0%]");
        }}
        className="md:hidden bg-transparent border-none relative"
      >
        <FontAwesomeIcon icon={faBars} className="text-text text-2xl" />
      </button>
    </header>
  );
};

export default Header;
