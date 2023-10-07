import { motion } from "framer-motion";

const Message = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className={`section bg-cover relative`}
      id="contact"
    >
      <div className="text-center max-w-[600px] mx-auto py-4 bg-slate-700 bg-opacity-70 rounded-lg">
        <div className="sm:text-3xl text-2xl font-bold mb-5 text-white">
          Message From <br />
          Owner
        </div>
        <p className="text-sm leading-7 text-slate-300 pb-1">
          By One of 6Sparks Founder's
        </p>
        <p className="text-slate-200">
          In future, We are going to change Whole esports Scene. Everyting will
          be well-Coordinated, Easy and Fast. "FOR GAMERS BY GAMERS"
        </p>
        <p className="black text-slate-100 text-right pr-8 font-bold">-Daaku</p>
        <motion.form
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-5"
        ></motion.form>
      </div>
    </div>
  );
};

export default Message;
