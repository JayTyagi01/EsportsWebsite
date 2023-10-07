import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Categories = ({ icon, category, text }) => {
  const [counterOn, setCounterOn] = useState(false);
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <motion.div
        variants={item}
        whileHover={{ scale: 1.1 }}
        className="flex items-center flex-col gap-4 bg-white p-8 rounded-md h-[200px] md:h-[250px] lg:h-[250px]"
      >
        <div className="text-4xl text-black">{icon}</div>
        <div className="text-black text-xl font-bold">
          {counterOn && (
            <CountUp start={0} end={category} duration={4} delay={0} />
          )}
        </div>

        <a href="" className="text-xl text-black capitalize">
          {text}
        </a>
      </motion.div>
    </ScrollTrigger>
  );
};

export default Categories;
