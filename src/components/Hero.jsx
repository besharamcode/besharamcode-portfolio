import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faLink } from "@fortawesome/free-solid-svg-icons";
import resume from "../assets/Mohit_Kushwah.pdf";

export const Hero = () => {
  return (
    <div
      id="home"
      className="md:px-[6vw] sm:px-[4vw] px-[1rem] text-text  font-poppins relative h-[100dvh] w-full overflow-hidden grid place-items-center"
    >
      <div>
        <h1 className="text-center font-medium md:text-[6vw] md:leading-[6.5vw] text-5xl">
          Hi, I Am Mohit <br /> A MERN Stack Developer
        </h1>
        <p className="leading-[1.6rem] mx-auto text-center mt-4">
          I create visually appealing and user-friendly websites. Let&apos;s
          collaborate to bring <br className="hidden md:block" /> your ideas to
          life and create impactful web experiences.
        </p>
        <div className="flex md:gap-20 md:flex-row flex-col gap-5 mt-8 justify-center items-center">
          <a
            className="uppercase text-sm leading-6 inline-block w-[11rem] text-center border-[#3F3F3F] border-2 hover:scale-105 transition-all px-4 py-3 rounded-full relative z-10"
            href={resume}
            download={"Mohit_Kushwah.pdf"}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faDownload}
              className="mr-2 leading-tight relative bottom-[1px] text-xs"
            />
            Download cv
          </a>
          <a
            href="#contact"
            className="uppercase text-sm leading-6 inline-block w-[11rem] text-center bg-[#3F3F3F] hover:scale-105 transition-all px-4 py-3 rounded-full relative z-10"
          >
            <FontAwesomeIcon
              className="mr-2 leading-tight relative bottom-[1px] text-xs"
              icon={faLink}
            />
            let&apos;s talk
          </a>
        </div>
        <div className="w-full left-0 absolute -bottom-1">
          <p className="text-[12.5vw] uppercase leading-[9vw] select-none  text-transparent bg-clip-text bg-gradient-to-tl from-[#3F3F3F] to-[#000000] text-center z-0">
            besharamcode
          </p>
        </div>
      </div>
    </div>
  );
};
