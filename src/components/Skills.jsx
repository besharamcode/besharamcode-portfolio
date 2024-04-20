import { motion } from "framer-motion";
import Heading from "./Heading";
import { skillsCards } from "../constants/constants";

const Skills = () => {
  return (
    <div
      id="skills"
      className="md:px-[6vw] sm:px-[4vw] px-[1rem] h-[100dvh] relative overflow-hidden grid place-items-center"
    >
      <div className="md:h-fit h-[75%] overflow-y-scroll no-scrollbar p-3">
        <div className="cards w-full flex items-center flex-wrap justify-center gap-8">
          {skillsCards.map((card, i) => {
            return (
              <div
                className="card size-[9rem] rounded-xl p-4 grid place-items-center bg-gradient-to-tl from-btn to-black transition-all relative z-10"
                key={i}
              >
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="h-12 object-cover mx-auto"
                />
                <h3 className="uppercase text-xl mt-2 -mb-2 font-medium font-hind text-[#7B7B7B]">
                  {card.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
      <Heading heading={"what can i do"} />
    </div>
  );
};

export default Skills;
