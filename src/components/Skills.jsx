import { motion } from "framer-motion";
import Heading from "./Heading";

const Skills = () => {
  const cards = [
    {
      title: "html",
    },
    {
      title: "css",
    },
    {
      title: "js",
    },
    {
      title: "react",
    },
    {
      title: "tailwind",
    },
    {
      title: "git",
    },
    {
      title: "node",
    },
    {
      title: "express",
    },
    {
      title: "mongodb",
    },
  ];
  const handleHover = (e) => {
    const card = e.target.closest(".card");
    console.log(card);
  };
  return (
    <div
      id="skills"
      className="md:px-[6vw] sm:px-[4vw] px-[1rem] h-[100dvh] relative overflow-hidden grid place-items-center"
    >
      <div className="cards flex items-center  justify-start gap-8  h-full overflow-x-auto">
        {cards.map((card) => {
          return (
            <div className="card">
              <div className="mask bg-btn w-full h-full grid place-items-center rounded-xl">
                <h3 className="uppercase text-6xl font-medium font-hind text-[#7B7B7B]">
                  {card.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
      <Heading heading={"what can i do"} />
    </div>
  );
};

export default Skills;
