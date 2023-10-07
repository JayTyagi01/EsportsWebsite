import ScrollProgressBar from "./ScrollProgressBar";
import { useRef } from "react";
const OurSkills = () => {
  const sectionRef = useRef();
  return (
    <div
      ref={sectionRef}
      data-aos="fade-up"
      data-aos-duration="1000"
      className="flex justify-center bg-black"
    >
      <div className="container  text-center p-5 py-28 ">
        <div className="pb-20">
          <h1 className="uppercase mb-4 text-center text-4xl font-bold text-white">
            Our Skills
          </h1>
          <div className="flex justify-center">
            <img
              className="w-48"
              src="https://i.ibb.co/Wc6ScBF/devider.png"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <p className="text-white">Worldclass Tournament Structure</p>
            <ScrollProgressBar targetPercentage={70} sectionRef={sectionRef} />
            <p className="text-white">Social Networking</p>
            <ScrollProgressBar targetPercentage={90} sectionRef={sectionRef} />
            <p className="text-white">E-Sports Content All In One E-Sports</p>
            <ScrollProgressBar targetPercentage={80} sectionRef={sectionRef} />
          </div>
          <div className="col-span-1">
            <p className="text-white">Interactive Entertainments</p>
            <ScrollProgressBar targetPercentage={75} sectionRef={sectionRef} />
            <p className="text-white">E-Sports Content</p>
            <ScrollProgressBar targetPercentage={95} sectionRef={sectionRef} />
            <p className="text-white">E-Sports Infrastructure</p>
            <ScrollProgressBar targetPercentage={65} sectionRef={sectionRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSkills;
