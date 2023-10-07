import "./OurPartner.css";
import {
  FaTwitterSquare,
  FaFacebook,
  FaYoutube,
  FaInstagramSquare,
} from "react-icons/fa";
const OurPartner = () => {
  return (
    <div className="">
      <div className=" mx-auto bg-white py-20">
        <div>
          <h1 className="uppercase mb-4 text-center text-4xl font-bold text-black">
            Our Partner
          </h1>
          <div className="flex justify-center">
            <img
              className="w-48"
              src="https://i.ibb.co/Wc6ScBF/devider.png"
              alt=""
            />
          </div>
          <p className="text-[16px] text-center mt-4 mb-20 text-black">
            Those Who Trust Us
          </p>
        </div>
        <div className="slider">
          <div className="slide-track mt-10">
            <div className="slide">
              <img
                className="w-[140px]"
                src="https://i.ibb.co/BzmRrbS/logo2.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                className="w-[140px]"
                src="https://i.ibb.co/p4jfFMY/logo3.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                className="w-[140px]"
                src="https://i.ibb.co/NpZ7BY9/logo4.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                className="w-[140px]"
                src="https://i.ibb.co/25N1PN4/logo5.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                className="w-[140px]"
                src="https://i.ibb.co/NpZ7BY9/logo4.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                className="w-[140px]"
                src="https://i.ibb.co/BzmRrbS/logo2.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                className="w-[140px]"
                src="https://i.ibb.co/p4jfFMY/logo3.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                className="w-[140px]"
                src="https://i.ibb.co/NpZ7BY9/logo4.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                className="w-[140px]"
                src="https://i.ibb.co/25N1PN4/logo5.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                className="w-[140px]"
                src="https://i.ibb.co/NpZ7BY9/logo4.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                className="w-[140px]"
                src="https://i.ibb.co/p4jfFMY/logo3.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                className="w-[140px]"
                src="https://i.ibb.co/NpZ7BY9/logo4.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                className="w-[140px]"
                src="https://i.ibb.co/25N1PN4/logo5.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                className="w-[140px]"
                src="https://i.ibb.co/NpZ7BY9/logo4.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div data-aos="fade-up" data-aos-duration="1000" className="mt-24">
          <h1 className="uppercase mb-4 text-center text-4xl font-bold text-white">
            Join US
          </h1>
          <div className="flex justify-center">
            <img
              className="w-48"
              src="https://i.ibb.co/Wc6ScBF/devider.png"
              alt=""
            />
          </div>
          <p className="text-[16px] text-center mt-4  text-white">
            Our Social Media Handler
          </p>
        </div>
        <div className="flex gap-8 justify-center mt-8">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex gap-8 justify-center mt-8 mb-20"
          >
            <span className="w-12 h-12 text-4xl text-white hover:text-[#0d6efd] transition-colors">
              <FaTwitterSquare />
            </span>
            <span className="w-12 h-12 text-4xl text-white hover:text-[#0d6efd] transition-colors">
              <FaFacebook />
            </span>
            <span className="w-12 h-12 text-4xl text-white hover:text-red-600 transition-colors">
              <FaYoutube />
            </span>
            <span className="w-12 h-12 text-4xl text-white hover:text-[#FD1D1D] transition-colors">
              <FaInstagramSquare />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartner;
