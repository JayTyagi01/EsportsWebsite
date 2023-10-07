import { useState } from "react";
import { HiUserGroup, HiHeart, HiOutlineClock } from "react-icons/hi";
import { IoDiamondOutline } from "react-icons/io5";
import "./About.css";

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cardData = [
    {
      icon: <HiUserGroup className="text-white p-2 text-[50px]" />,
      title: "Who we are?",
      description:
        "We are a group of gamers who have faced the struggle to make Esports as our Career.",
    },
    {
      icon: <IoDiamondOutline className="text-white p-2 text-[50px]" />,
      title: "What We Do?",
      description:
        "Now we are here to create India's biggest and most efficient esports environment, providing both career and competitive aspects.",
    },
    {
      icon: <HiHeart className="text-white p-2 text-[50px] rounded-full" />,
      title: "Why We Do It?",
      description:
        "So that our Next Gen esports players will not face the problems we faced, by providing the best direction in this Esport World.",
    },
    {
      icon: (
        <HiOutlineClock className="text-white p-2 text-[50px] rounded-full" />
      ),
      title: "Since When?",
      description: "This Idea took birth on June, 2021.",
    },
  ];

  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="bg-[#000]">
      <div className="w-11/12 mx-auto py-24">
        <div className="">
          <h1 className="uppercase mb-4 text-center text-4xl font-bold text-white">
            About Us
          </h1>
          <div className="flex justify-center">
            <img
              className="w-48"
              src="https://i.ibb.co/Wc6ScBF/devider.png"
              alt=""
            />
          </div>
          <p className="text-[16px] text-center mt-4 mb-20 text-white capitalize">
            Little Information About Us
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`shadow hover:bg-[#778899] hover:shadow-2xl transition-all bg-white rounded-md pl-2 ${
                hoveredIndex === index ? "bg-[#778899]" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col justify-center items-center gap-6 px-4 py-10">
                <div
                  className={`icon-bg ${
                    hoveredIndex === index ? "bg-icon" : ""
                  } transition-all`}
                >
                  {card.icon}
                </div>
                <div
                  className={`${
                    hoveredIndex === index ? "text-white" : ""
                  } transition-all`}
                >
                  <h1
                    className={`${
                      hoveredIndex === index ? "text-white" : "text-black"
                    } capitalize text-2xl font-bold text-ceter `}
                  >
                    {card.title}
                  </h1>
                  <p
                    className={`${
                      hoveredIndex === index ? "text-white" : "text-black"
                    } text-ceter `}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
