import React, { useEffect, useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import SubTitle from "../components/SubTitle";
import "../style/About.css";
import eikhaingsoe from "../assets/images/eikhaingsoe-img.jpg";
import html from "../assets/images/HTML.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <section className="section-about  relative py-[50px] max-[991px]:py-[40px] max-[767px]:py-[35px]">
      <SubTitle sub1="About" sub2="Me" />
      <div className="w-full   flex items-center flex-wrap ">
        <div className=" w-full p-5 text-center lg:text-left  lg:w-1/2 xl:w-1/3  order-2 lg:order-2  xl:order-1">
          <h1 className="creativity text-4xl leading-tight  text-white opacity-[0.5] tracking-wide mb-2 ">
            “Creativity bleeds from the pen of inspiration.”
          </h1>
          <p className="mb-[16px] font-montserrat text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">
            Experienced Front-End Developer with 4+ years of experience
            specializing in building responsive web applications in eCommerce,
            ERP systems, POS systems and Real-Estate Management System.
            Expertise in JavaScript frameworks (Angular, React), state
            management (Redux, NgRx), and CSS frameworks (Tailwind, Bootstrap).
            Proven track record of optimizing performance, improving user
            satisfaction, and collaborating with cross-functional teams to
            deliver high-quality solutions.
          </p>
        </div>
        <div className=" w-full p-5  lg:w-1/2 xl:w-1/3   order-1 lg:order-1 xl:order-2  ">
          <div className="flex items-center justify-center" >
            <div className="border border-black p-5 rounded-full relative md:w-1/2 lg:w-full ">
              <img src={eikhaingsoe} alt="hero" className=" rounded-full" />
              <div className="absolute bottom-10 right-0  ">
                <div class="relative w-32 h-32 rounded-full bg-[rgba(0,0,0,0.7)] text-white flex items-center justify-center">
                  <svg
                    class="absolute w-full h-full"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                      />
                    </defs>
                    <text font-size="11" class="fill-current text-white">
                      <textPath
                        class="tracking-widest p-3"
                        href="#circlePath"
                        startOffset="0%"
                      >
                        About Me - About Me - About Me
                      </textPath>
                    </text>
                  </svg>

                  <div class="absolute">
                    <i class="ri-arrow-right-up-line text-3xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
        <div className=" w-full p-4  lg:w-1/2  xl:w-1/3  order-3 lg:order-3 xl:order-3 flex flex-col gap-5">
          <div className="p-5 flex items-center gap-5 bg-yellow-100 rounded-full relative ">
              <div className="w-24 h-24 rounded-full border border-black flex items-center justify-center" >
                95%
              </div>
              <div>
                 <h3 className="text-sm font-semibold" >HTML, CSS and JavaScript</h3>
                 <p></p>
              </div>
              <div className="absolute -top-7 right-32 flex items-center gap-5 " >
                <div className="border-4 w-12 rounded-full bg-white  border-white " >
                  <img src={html} alt="hero" className="w-10 h-10 rounded-full border border-black mx-auto" />
                </div>
                <div className="border-4 w-12 rounded-full bg-white  border-white " >
                  <img src={html} alt="hero" className="w-10 h-10 rounded-full border border-black mx-auto" />
                </div>
              </div>
          </div>
          <div className="p-5 flex items-center gap-5 bg-red-100 rounded-full ">
              <div className="w-24 h-24 rounded-full border border-black flex items-center justify-center" >
                80%
              </div>
              <div>
                 <h3 className="text-sm font-semibold" >Angular and React</h3>
                 <p></p>
              </div>
          </div>
          <div className="p-5 flex items-center gap-5 bg-blue-100 rounded-full ">
              <div className="w-24 h-24 rounded-full border border-black flex items-center justify-center" >
                95%
              </div>
              <div>
                 <h3 className="text-sm font-semibold" >Bootstrap, Tailwind and Ant Design</h3>
                 <p></p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
