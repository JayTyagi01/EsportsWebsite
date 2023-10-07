
import { categories } from "../../../Data";
import Categories from "./Categories";
import { motion } from "framer-motion";

const Courses = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className="section bg-black" id="courses">
      <div className="text-center">
        <div className="sm:text-3xl text-white text-2xl font-bold mb-5 capitalize">
          Our Past Achivements{" "}
          <span className="text-white">
            {" "}
            <br />
            Growing more Faster than ever before
          </span>
        </div>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 gap-8"
      >
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />;
        })}
      </motion.div>
    </div>
  );
};

export default Courses;
