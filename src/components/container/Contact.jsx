import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      className="section bg-fixed"
      id="contact"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/HpSYm8X/ella-don-k-CFXVis-Uqug-unsplash-overlay-1.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 backdrop-filter backdrop-blur-md"
        style={{
          zIndex: -1,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
        }}
      ></div>
      <div className="text-center max-w-[600px] mx-auto relative">
        <div className="uppercase sm:text-3xl text-2xl font-bold mb-5 text-white">
          Wanna play <br />
          NOW?
        </div>
        <p className="text-sm leading-7 text-white capitalize">
          Register In On-going Tournaments Now!!!
        </p>
        <motion.form
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-5"
        >
          <button className="text-white bg-black px-4 py-3 hover:text-black hover:bg-white transition-all">
            Apply to attend
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
