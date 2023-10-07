import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#000] py-[60px] ">
        <div className="w-11/12 md:w-10/12 mx-auto">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 items-start">
            <div className="lg:border-r border-amber-500 md:w-[500px]">
              <ul
                className="text-[#fcfcfc] text-[15px] md:text-[16px] "
                style={{ fontFamily: "Nunito Sans, sans-serif" }}
              >
                <li className="flex align-middle items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="30"
                    height="30"
                  >
                    <path
                      d="M12 0C7 0 3 4 3 9c0 7.4 8.1 14.3 8.4 14.5l.6.5.6-.5c.3-.2 8.4-7.1 8.4-14.5 0-5-4-9-9-9zm0 21.5C10.2 19.9 5 14.3 5 9c0-3.9 3.1-7 7-7s7 3.1 7 7c0 5.3-5.2 10.9-7 12.5zM12 5C9.8 5 8 6.8 8 9s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                      className="text-amber-500"
                    ></path>
                  </svg>{" "}
                  demo address
                </li>
                <li className="flex align-middle items-center gap-4 mt-5 text-[15px] md:text-[16px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="25"
                    height="25"
                  >
                    <path
                      d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22c-1.2 0-2.6-1.9-3.3-4.8 2.2-.3 4.5-.3 6.7 0-.8 2.9-2.2 4.8-3.4 4.8zm0-20c1.2 0 2.6 1.9 3.3 4.8-2.1.2-4.4.2-6.6 0C9.4 3.9 10.8 2 12 2zM8 12c0-1.2.1-2.3.2-3.3 1.3.2 2.5.3 3.8.3 1.3 0 2.5-.1 3.8-.3.2 1 .2 2.1.2 3.3 0 1.2-.1 2.3-.2 3.3-2.5-.3-5.1-.3-7.5 0-.2-1-.3-2.1-.3-3.3zm9.7-3.6c1.1-.2 2.1-.5 3.2-.9.7 1.4 1.1 2.9 1.1 4.5s-.4 3.1-1.1 4.5c-1.1-.4-2.1-.6-3.2-.9.2-1.1.3-2.3.3-3.6 0-1.3-.1-2.5-.3-3.6zm2.1-2.6c-.8.3-1.6.5-2.5.6-.3-1.4-.8-2.6-1.4-3.6 1.6.7 2.9 1.7 3.9 3zm-11.7-3C7.5 3.8 7 5 6.6 6.4c-.8-.1-1.6-.3-2.4-.6 1-1.3 2.3-2.3 3.9-3zm-5 4.7c1.1.4 2.1.6 3.2.9C6.1 9.5 6 10.7 6 12s.1 2.5.3 3.6c-1.1.2-2.1.5-3.2.9C2.4 15.1 2 13.6 2 12s.4-3.1 1.1-4.5zm1.1 10.7c.8-.3 1.6-.5 2.5-.6.3 1.4.8 2.6 1.4 3.6-1.6-.7-2.9-1.7-3.9-3zm11.7 3c.6-1 1.1-2.2 1.4-3.6.8.2 1.7.4 2.5.6-1 1.3-2.3 2.3-3.9 3z"
                      className="text-amber-500"
                    ></path>
                  </svg>{" "}
                  support@6sparks.com
                </li>
                <li className="flex align-middle items-center gap-4 mt-5 text-[15px] md:text-[16px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="28"
                    height="28"
                  >
                    <path
                      d="M18.9 24l-.7-.4C14.4 21.5 11 19.1 7.9 16 4.9 13 2.4 9.6.4 5.8L0 5.1 5.1 0l6.2 6.2-2 2.9 5.5 5.5 2.9-2 6.2 6.2-5 5.2zm-9.6-9.3c2.8 2.7 5.8 5 9.2 6.9l2.7-2.7-3.6-3.6-2.9 2-7.9-7.9 2-2.9-3.7-3.7-2.6 2.7c1.9 3.4 4.1 6.4 6.8 9.2z"
                      className="text-amber-500"
                    ></path>
                  </svg>
                  +000000000
                </li>
              </ul>
              <span className="flex gap-5 mt-5 text-white">
                <FaFacebookF
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "8px",
                    width: "45px",
                    height: "45px",
                    borderRadius: "20px",
                  }}
                  className="hover:bg-blue-600 hover:border-text-amber-500 border-1"
                ></FaFacebookF>
                <FaTwitter
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "8px",
                    width: "45px",
                    height: "45px",
                    borderRadius: "20px",
                  }}
                  className="hover:bg-blue-800"
                ></FaTwitter>
                <FaLinkedinIn
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "8px",
                    width: "45px",
                    height: "45px",
                    borderRadius: "20px",
                  }}
                  className="hover:bg-blue-700"
                ></FaLinkedinIn>
                <FaInstagram
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "8px",
                    width: "45px",
                    height: "45px",
                    borderRadius: "20px",
                  }}
                  className="hover:bg-pink-600"
                ></FaInstagram>
              </span>
            </div>
            <div
              className=" text-[#CCCCCC] grid grid-cols-2 mt-10 md:mt-5 lg:-mt-1 pl-0 lg:pl-20 text-[16px] md:text-[18px] gap-14 md:gap-0"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              <div>
                <h1 className="text-xl text-white font-bold text-left">
                  Popular Game
                </h1>
                <ul className="leading-10 text-center">
                  <li className="w-[55px] text-[15px] whitespace-nowrap group relative before:absolute before:inset-x-0 before:top-8 before:h-0.5 before:origin-right before:scale-x-0 before:bg-amber-500 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                    Game 1
                  </li>
                  <li className="w-[55px] text-[15px] whitespace-nowrap group relative before:absolute before:inset-x-0 before:top-8 before:h-0.5 before:origin-right before:scale-x-0 before:bg-amber-500 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                    Game 2
                  </li>
                  <li className="w-[55px] text-[15px] whitespace-nowrap group relative before:absolute before:inset-x-0 before:top-8 before:h-0.5 before:origin-right before:scale-x-0 before:bg-amber-500 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                    Game 3
                  </li>
                  <li className="w-[55px] text-[15px] whitespace-nowrap group relative before:absolute before:inset-x-0 before:top-8 before:h-0.5 before:origin-right before:scale-x-0 before:bg-amber-500 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                    Game 4
                  </li>
                  <li className="w-[55px] text-[15px] whitespace-nowrap group relative before:absolute before:inset-x-0 before:top-8 before:h-0.5 before:origin-right before:scale-x-0 before:bg-amber-500 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                    Game 5
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-xl text-white font-bold text-left">
                  Useful Links
                </h1>
                <ul className="leading-8 md:leading-7">
                  <li className="w-[40px] text-[15px] whitespace-nowrap group relative before:absolute before:inset-x-0 before:top-6 before:h-0.5 before:origin-right before:scale-x-0 before:bg-amber-500 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                    Home
                  </li>
                  <li className="w-[40px] text-[15px] whitespace-nowrap group relative before:absolute before:inset-x-0 before:top-6 before:h-0.5 before:origin-right before:scale-x-0 before:bg-amber-500 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                    About
                  </li>
                  <li className="w-[60px] text-[15px] whitespace-nowrap group relative before:absolute before:inset-x-0 before:top-6 before:h-0.5 before:origin-right before:scale-x-0 before:bg-amber-500 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                    Services
                  </li>
                  <li className="w-[40px] text-[15px] whitespace-nowrap group relative before:absolute before:inset-x-0 before:top-6 before:h-0.5 before:origin-right before:scale-x-0 before:bg-amber-500 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                    Press
                  </li>
                  <li className="w-[60px] text-[15px] whitespace-nowrap group relative before:absolute before:inset-x-0 before:top-6 before:h-0.5 before:origin-right before:scale-x-0 before:bg-amber-500 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                    Copyright
                  </li>
                  <li className="w-[60px] text-[15px] whitespace-nowrap group relative before:absolute before:inset-x-0 before:top-6 before:h-0.5 before:origin-right before:scale-x-0 before:bg-amber-500 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                    Advertise
                  </li>
                  <li className="w-[40px] text-[15px] whitespace-nowrap group relative before:absolute before:inset-x-0 before:top-6 before:h-0.5 before:origin-right before:scale-x-0 before:bg-amber-500 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                    Legal
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="cpyright bg-[#000]">
        <div className="md:flex md:justify-center align-middle items-center w-11/12 md:w-10/12 mx-auto text-center py-4">
          <div>
            <p className="text-[#8A9298] text-[14px] mt-[14px] md:mt-[0]">
              © Copyright {new Date().getFullYear()}{" "}
              <span className="font-bold text-amber-500">6 SPARKS</span> - All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
