import { IoMan, IoWoman } from "react-icons/io5";
import { motion } from "framer-motion";
import dakku from "../../assets/DAAKU.jpg";
import diggy from "../../assets/Diggy.jpg";
import savy from "../../assets/Savy.jpg";
import haise from "../../assets/Haise.jpg";
import emperor from "../../assets/Emperor.jpg";
import john from "../../assets/John.jpg";
import jane from "../../assets/Jane.jpg";
import { useInView } from "react-intersection-observer";

function OurTeam() {
  const members = [
    {
      name: "DAAKU",
      img: dakku,
      gender: "male",
    },
    {
      name: "Diggy",
      img: diggy,
      gender: "female",
    },
    {
      name: "Savy",
      img: savy,
      gender: "male",
    },
    {
      name: "Emperor",
      img: emperor,
      gender: "male",
    },
    {
      name: "Haise",
      img: haise,
      gender: "male",
    },
    {
      name: "John Doe",
      img: john,
      gender: "male",
    },
    {
      name: "Jane Doe",
      img: jane,
      gender: "female",
    },
  ];

  return (
    <section className=" py-24 bg-slate-600 bg-opacity-30">
      <div data-aos="fade-up" data-aos-duration="1000" className="">
        <h1 className="uppercase mb-4 text-center text-4xl font-bold text-white">
          OUR TEAM
        </h1>
        <div className="flex justify-center">
          <img
            className="w-48"
            src="https://i.ibb.co/Wc6ScBF/devider.png"
            alt=""
          />
        </div>
        <p className="text-[16px] text-center mt-4 mb-20  text-white">
          Meet Our Experts
        </p>
      </div>

      {/* Team member container */}
      <div className="flex items-center justify-center">
        <div className="flex flex-wrap md:flex-row flex-col 2xl:w-3/5 xl:w-3/4 lg:w-10/12 md:w-full items-center justify-center 2xl:px-0 xl:px-2 lg:px-0 md:px-2">
          {members.map((member, i) => (
            <TeamMemberCard key={i} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const TeamMemberCard = ({ member, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, scale: 0.8, y: 0 }} // Start with no vertical displacement
      animate={
        inView
          ? { opacity: 1, scale: 1, y: -10 * (1 - 0.5) } // Bounce based on scale difference
          : {}
      }
      transition={{
        duration: 1,
        delay: index * 0.1, // Delay each card's animation
        ease: "easeInOut",
        type: "spring", // Use a spring animation for bouncing effect
        stiffness: 200, // Adjust stiffness and damping as needed
        damping: 5,
      }}
    >
      {/* member */}
      <div
        id={`member-${index}`}
        className="member xl:h-36 xl:w-36 lg:h-32 lg:w-32 md:w-28 md:h-28 h-32 w-32 lg:mx-8 md:mx-7 rotate-45 md:my-0 my-8 relative overflow-hidden p-2 border-2 rounded border-white"
      >
        <div className="h-full w-full flex items-center justify-center relative overflow-hidden duration-300 rounded">
          {/* Background Image */}
          <div className="absolute w-44 h-44">
            <img
              src={member.img}
              alt=""
              className="h-full w-full absolute top-0 left-0 -rotate-45 -z-10 object-cover"
            />
          </div>

          {/* content */}
          <div className="member-content -rotate-45 opacity-0 text-xl text-center duration-1000 text-white font-bold flex flex-col items-center justify-center">
            <span className="text-3xl">
              {member.gender === "male" ? <IoMan /> : <IoWoman />}
            </span>
            <p>{member.name}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OurTeam;
