import "./App.css";
import messageBg from "./assets/message.jpg";
import team from "./assets/team.jpg";
import FrontPage from "./FrontPage/FrontPage";
// import DefaultNavbar from './FrontPage/DefaultNavbar/DefaultNavbar';
import OurSkills from "./FrontPage/OurSkills/OurSkills";
import About from "./components/About/About";
import Message from "./components/container/Message";
import Services from "./components/Services/Services";
import Contact from "./components/container/Contact";
import Courses from "./components/container/Course/Courses";
import OurTeam from "./components/OurTeam/OurTeam";
import OurPartner from "./components/OurPartner/OurPartner";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
function App() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          right: "0",
          bottom: "0",
          width: "100%",
          height: "100%",
          zIndex: 2,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="_backVideo"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        >
          <source src="./videos/ssq.mp4" type="video/mp4"></source>
        </video>
        <div
          style={{
            position: "absolute",
            right: "0",
            bottom: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 51, 0.6)",
            zIndex: 1,
          }}
        ></div>
      </div>
      <div className="" style={{ position: "relative", zIndex: "10" }}>
        {/* <DefaultNavbar /> */}
        <NavBar />
      </div>
      <div style={{ position: "relative", zIndex: "2" }}>
        <FrontPage />
      </div>
      <div
        className="w-11/12 mx-auto"
        style={{ position: "relative", zIndex: "2" }}
      >
        <About />
      </div>
      <div
        className="w-11/12 mx-auto"
        style={{ position: "relative", zIndex: "2" }}
      >
        <OurSkills />
      </div>
      <div
        className="w-11/12 mx-auto "
        style={{ position: "relative", zIndex: "2" }}
      >
        <Contact />
      </div>
      <div
        className="w-11/12 mx-auto"
        style={{ position: "relative", zIndex: "2" }}
      >
        <Services />
      </div>
      <div
        className="w-11/12 mx-auto bg-cover"
        style={{
          position: "relative",
          zIndex: "2",
          backgroundImage: `url(${messageBg})`,
        }}
      >
        <Message />
      </div>
      <div
        className="w-11/12 mx-auto bg-black"
        style={{ position: "relative", zIndex: "2" }}
      >
        <Courses />
      </div>
      <div
        className="w-11/12 mx-auto bg-cover "
        style={{
          position: "relative",
          zIndex: "2",
          backgroundImage: `url(${team})`,
        }}
      >
        <OurTeam />
      </div>
      <div
        className="w-11/12 mx-auto"
        style={{ position: "relative", zIndex: "2" }}
      >
        <OurPartner />
      </div>
      <div className="" style={{ position: "relative", zIndex: "2" }}>
        <Footer />
      </div>
    </>
  );
}

export default App;
