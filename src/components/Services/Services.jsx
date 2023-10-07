import { FaMobileAlt, FaChartPie, FaCloud, FaPencilAlt } from "react-icons/fa";
const Services = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="bg-[#000] py-20 text-white"
    >
      <div className="w-11/12 mx-auto">
        <div className="">
          <h1 className="uppercase mb-4 text-center text-4xl font-bold">
            What we provide
          </h1>
          <div className="flex justify-center ">
            <img
              className="w-48"
              src="https://i.ibb.co/Wc6ScBF/devider.png"
              alt=""
            />
          </div>
          <p className="text-[16px] text-center mt-4 mb-20 capitalize">
            what we really know how
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="hover:bg-[#778899] bg-white px-6 rounded-2xl pb-10 mt-8 md:mt-8 text-black hover:text-white transition-all duration-700">
            <div className="icon">
              <FaMobileAlt
                className="text-[#778899] bg-white p-6 rounded-full -mt-12 mb-8 "
                style={{ fontSize: "100px", border: "1px solid #778899" }}
              ></FaMobileAlt>
            </div>
            <h1 className="text-2xl font-bold">Daily Free Custom</h1>
            <p className="text-[16px] mt-2">
              Anyone can register “Tier 3” , “Tier 2” and “Tier 1” --
              Registration on discord --Teams winning (boyeah) “ 4 ” times will
              get Promoted To next Tier Category with better Comptetion.
            </p>
          </div>
          <div className="hover:bg-[#778899] bg-white px-6 rounded-2xl pb-10 mt-8 md:mt-8 text-black hover:text-white transition-all duration-700">
            <div className="icon">
              <FaChartPie
                className="text-[#778899] bg-white p-6 rounded-full -mt-12 mb-8"
                style={{ fontSize: "100px", border: "1px solid #778899" }}
              ></FaChartPie>
            </div>
            <h1 className="text-2xl font-bold">Paid Scrim</h1>
            <p className="text-[16px] mt-2">
              Official Daily Basis Paid Scrims Organised With Best way to "EARN
              IN E-SPORTS". Paid scrims price are Affordable.
            </p>
            <p className="mt-10">Registration on whatsapp</p>
          </div>
          <div className="hover:bg-[#778899] bg-white px-6 rounded-2xl pb-10 mt-8 md:mt-8 text-black hover:text-white transition-all duration-700">
            <div className="icon">
              <FaCloud
                className="text-[#778899] bg-white p-6 rounded-full -mt-12 mb-8 "
                style={{ fontSize: "100px", border: "1px solid #778899" }}
              ></FaCloud>
            </div>
            <h1 className="text-2xl font-bold">Sponsorship</h1>
            <p className="text-[16px] mt-2">
              If you get noticed by our Talent Hunter, We will Sponsor you ;
            </p>
          </div>
          <div className="hover:bg-[#778899] bg-white px-6 rounded-2xl pb-10 mt-8 md:mt-8 text-black hover:text-white transition-all duration-700">
            <div className="icon">
              <FaPencilAlt
                className="text-[#778899] bg-white p-6 rounded-full -mt-12 mb-8 "
                style={{ fontSize: "100px", border: "1px solid #778899" }}
              ></FaPencilAlt>
            </div>
            <h1 className="text-2xl font-bold ">Esports Package</h1>
            <p className="text-[16px] mt-2 ">
              Certificates for Tier 2 and Tier 1 Teams -- Instagram Business
              Account (Esports focus) setup with 100 bonus bot followers. --
              Roster Announcement Posters (Photo and non-photo) Certified with
              6sprx.-- Roster Announcement Video Edit Certified with 6Sprx.
            </p>
          </div>
        </div>
        <div className="text-center mt-20">
          <button className="bg-white text-[#000] hover:bg-[#778899] hover:text-white transition-all ease-in font-bold text-xl px-10 py-4 rounded">
            Register Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
