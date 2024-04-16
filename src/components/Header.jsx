import { faBars } from "@fortawesome/free-solid-svg-icons";
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
    <div className="fixed z-50 font-hind top-0 md:px-[6vw] sm:px-[4vw] px-[1rem] pt-4 text-text flex justify-between items-center w-full">
      <div>
        <p className="font-bold uppercase sm:text-[2.75rem] text-[2rem]">
          .Code
        </p>
      </div>
      <nav className="absolute -top-[100%] md:static md:-top-[unset]">
        <ul className="flex items-center gap-6">
          {[
            { title: "Home", link: "#home" },
            { title: "About", link: "#about" },
            { title: "Skills", link: "#skills" },
            { title: "Projects", link: "#projects" },
            { title: "Contact", link: "#contact" },
          ].map((link, i) => {
            return (
              <li key={i} className="">
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
      </nav>
      <button className="md:hidden bg-transparent border-none">
        <FontAwesomeIcon icon={faBars} className="text-text text-2xl" />
      </button>
    </div>
  );
};

export default Header;
