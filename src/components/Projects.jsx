import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projectCards } from "../constants/constants";
import Heading from "./Heading";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faLock } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.1 }}
      id="projects"
      className="md:px-[6vw] sm:px-[4vw] px-[1rem] h-[100dvh] relative overflow-hidden grid place-items-center"
    >
      <div className="md:h-fit h-[75%] overflow-y-scroll no-scrollbar">
        <div className="cards  w-full flex items-center flex-wrap justify-center gap-8 p-4">
          {projectCards.map((card, i) => {
            return (
              <div
                className="card bg-btn sm:size-[12rem] size-full  rounded-xl p-4 grid place-items-center bg-gradient-to-tl from-btn to-black transition-all relative z-10"
                key={i}
              >
                {card.private && (
                  <FontAwesomeIcon
                    className=" text-text absolute top-4 right-4"
                    icon={faLock}
                  />
                )}
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="h-12 object-cover mx-auto"
                />
                <h3 className="uppercase text-lg my-4 font-medium font-hind text-[#7B7B7B]">
                  {card.title}
                </h3>
                <div className="w-full icons flex justify-evenly">
                  <a
                    href={card.gitLink}
                    target="_blank"
                    className=" size-8 p-1 grid place-items-center rounded-full border-text border"
                  >
                    <FontAwesomeIcon
                      className="text-2xl text-text"
                      icon={faGithub}
                    />
                  </a>
                  <a
                    href={card.liveLink}
                    target="_blank"
                    className=" size-8 p-1 grid place-items-center rounded-full border-text border"
                  >
                    <FontAwesomeIcon
                      className="rotate-[145deg] text-2xl text-text"
                      icon={faArrowLeft}
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Heading heading={"what i did"} />
    </motion.div>
  );
};

export default Projects;
