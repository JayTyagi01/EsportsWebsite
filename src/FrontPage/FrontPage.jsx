import "./FrontPage.css";
import { MdOutlinePentagon } from "react-icons/md";
const FrontPage = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="">
      <div className="carousel w-10/12 mx-auto">
        <div
          id="item1"
          style={{ minHeight: "600px" }}
          className="carousel-item w-full"
        >
          <div className="flex justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center h-full  text-center">
              <h1
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif'",
                }}
                className="text-white font-bold my-5 text-center text-[40px] md:text-[60px] capitalize"
              >
                6Sparks LLC
              </h1>
              <p
                style={{
                  fontSize: "16px",
                  fontFamily: "Arial, Helvetica, sans-serif'",
                }}
                className="text-white my-2 font-bold text-lg capitalize"
              >
                Let's Take Indian Esports to the next level
              </p>
            </div>
          </div>
        </div>
        <div
          id="item2"
          style={{ minHeight: "600px" }}
          className="carousel-item w-full"
        >
          <div className="flex justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center h-full text-center">
              <h1
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif'",
                }}
                className="text-white font-bold my-5 text-center text-[40px] md:text-[60px] capitalize"
              >
                Paid Scrim
              </h1>
              <p
                style={{
                  fontSize: "16px",
                  fontFamily: "Arial, Helvetica, sans-serif'",
                }}
                className="text-white my-2 font-bold text-lg"
              >
                Official Daily Basis Paid Scrims Organised With Best way to
                "EARN IN E-SPORTS". Paid scrims price are Affordable ---
                Registration on whatsapp.l
              </p>
            </div>
          </div>
        </div>
        <div
          id="item3"
          style={{ minHeight: "600px" }}
          className="carousel-item w-full"
        >
          <div className="flex justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center h-full text-center">
              <h1
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif'",
                  lineHeight: "55px",
                }}
                className="text-white font-bold my-5 text-center text-[40px] md:text-[60px] capitalize"
              >
                please Join 6Sparks and get Permanent Slots
              </h1>
              <p
                style={{
                  fontSize: "16px",
                  fontFamily: "Arial, Helvetica, sans-serif'",
                }}
                className="text-white my-2 font-bold text-lg"
              >
                "# Work with us in following :- --- WhatsApp Ninja --- Discord
                Mod --- Video Editor --- Animation Specialist."
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="_Indicators"
        className="flex justify-center w-full py-2 gap-2 relative -mt-36 md:mt-0"
        // style={{ position: "relative", top: "-200px" }}
      >
        <a
          href="#item1"
          className="inline-block px-2 py-1 mx-1 text-white  rounded transition hover:bg-gray-400"
        >
          <MdOutlinePentagon />
        </a>
        <a
          href="#item2"
          className="inline-block px-2 py-1 mx-1 text-white  rounded transition hover:bg-gray-400"
        >
          <MdOutlinePentagon />
        </a>
        <a
          href="#item3"
          className="inline-block px-2 py-1 mx-1 text-white rounded transition hover:bg-gray-400"
        >
          <MdOutlinePentagon />
        </a>
      </div>
      <a
        id="btn1"
        href="#"
        style={{ position: "relative", top: "-200px" }}
        className="inline-block text-2xl px-4 py-2 my-12 border text-white rounded transition hover:bg-gray-400"
      >
        Join Now!
      </a>
    </div>
  );
};

export default FrontPage;
