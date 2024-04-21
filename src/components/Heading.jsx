import { motion } from "framer-motion";

const Heading = ({ heading }) => {
  return (
    <div
      className={`w-full left-0 absolute sm:-bottom-5 -bottom-5 md:-bottom-[3.5rem] z-0`}
    >
      <motion.p
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`font-hind text-[12vw] uppercase md:leading-[13rem] sm:leading-[6rem] leadimg-[0rem] select-none text-transparent bg-clip-text bg-gradient-to-tl from-btn to-black text-center`}
      >
        {heading}
      </motion.p>
    </div>
  );
};

export default Heading;
