import React, { useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext';
import SubTitle from '../components/SubTitle';

const About = () => {
  
  return (
    // <section className="section-about relative py-[50px] max-[991px]:py-[40px] max-[767px]:py-[35px]">
    //   <div className="container flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
    //     <div className="flex flex-wrap w-full mb-[-30px]">
    //       <div className="w-full px-[12px]">
    //         <div className="bix-banner mb-[30px] flex justify-center text-center max-[1199px]:mb-[25px] max-[767px]:mb-[20px]" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
    //           <h4 className="font-montserrat text-[36px] font-bold text-[#111a24] tracking-[0.03rem] leading-[1.2] max-[1199px]:text-[32px] max-[767px]:text-[28px] max-[575px]:text-[24px]">About <span className="text-[#f41a4a]">Me</span></h4>
    //         </div>
    //         <div className="bix-banner-line mb-[110px]" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
    //           <span className="inner-border relative flex justify-center"></span>
    //         </div>
    //       </div>

    //       {/* About Me Text and Image */}
    //       <div className="max-[1199px]:order-2 min-[1200px]:w-[33.33%] min-[992px]:w-[50%] w-full px-[12px] mb-[30px]" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
    //         <div className="bix-about-contact h-full flex flex-col justify-center">
    //           <h5 className="mb-[24px] font-montserrat text-[37px] font-bold text-[#fff] tracking-[0.08rem] opacity-[0.5] leading-[1.2] max-[1399px]:text-[32px] max-[1199px]:text-[28px] max-[575px]:text-[28px] max-[420px]:text-[22px]">
    //             “Creativity bleeds from the pen of inspiration.”
    //           </h5>
    //           <p className="mb-[16px] font-montserrat text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
    //           </p>
    //           <div className="about-name">
    //             <h6 className="mb-[0] font-montserrat text-[16px] text-[#111a24] font-bold tracking-[0.03rem] leading-[1.2]">Sr. Developer</h6>
    //             <p className="text-[14px] text-[#555] mb-[16px] font-montserrat font-normal leading-[26px] tracking-[0.03rem]">Jenny B. Brown</p>
    //             <div className="inner-sign-items">
    //               <img src="assets/img/about/sign.png" alt="sign" className="white-mode w-[120px] inline" />
    //               <img src="assets/img/about/sign-dark.png" alt="sign" className="dark-mode w-[120px] hidden" />
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Image Section */}
    //       <div className="max-[1199px]:order-1 min-[1200px]:w-[33.33%] min-[992px]:w-[100%] w-full px-[12px] mb-[30px]" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
    //         <div className="bix-about-img border-[1px] border-solid border-[#111a24] p-[15px] rounded-[200px] relative max-[1199px]:max-w-fit max-[1199px]:m-auto">
    //           <img src="assets/img/about/about.jpg" alt="about" className="w-full rounded-[200px]" />
    //           <div className="bix-rounded-circle z-[1] h-[130px] w-[130px] absolute bottom-[0] right-[0] bg-[#000000cc] rounded-[50%]">
    //             <a href="about.html" className="relative">
    //               <svg viewBox="0 0 100 100" width="100" height="100" className="fill-current h-auto origin-center w-full">
    //                 <defs>
    //                   <path id="circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"></path>
    //                 </defs>
    //                 <text>
    //                   <textPath xlinkHref="#circle" className="text-[10px] text-[#fff] tracking-[1.3px]">About Me - About Me - About Me -</textPath>
    //                 </text>
    //               </svg>
    //               <div className="inner-contact w-full h-full absolute top-[0] left-[0] right-[0] flex justify-center items-center">
    //                 <i className="ri-arrow-right-up-line text-[30px] text-[#fff]"></i>
    //               </div>
    //             </a>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Skills Section */}
    //       <div className="max-[1199px]:order-3 min-[1200px]:w-[33.33%] min-[992px]:w-[50%] w-full px-[12px]">
    //         <div className="bix-skill h-full flex flex-col justify-center max-[1199px]:h-auto" id="progress">
    //           <div className="skill-inner-box mb-[24px] p-[20px] flex flex-col relative rounded-[100px] max-[420px]:rounded-[50px] bg-[#faf1c6]" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
    //             <div className="skill-contact inline-flex flex-wrap max-[420px]:flex-col">
    //               <svg className="progress noselect w-[90px] h-full bg-transparent inline-block" data-progress="90" viewBox="0 0 80 80">
    //                 <path className="track" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"></path>
    //                 <path className="fill" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"></path>
    //                 <text className="value" x="50%" y="58%">90%</text>
    //               </svg>
    //               <div className="skill-box-contact w-[calc(100%-90px)] p-[10px] flex flex-col justify-center max-[420px]:w-full">
    //                 <h4 className="font-montserrat text-[16px] font-semibold text-[#111a24] mb-[8px] tracking-[0.03rem] leading-[1.2]">Frontend <span className="text-[13px] font-medium text-[#111a24]">(Angular, React)</span></h4>
    //                 <p className="font-montserrat text-[13px] leading-[22px] text-[#495461] tracking-[0.03rem]">Lorem ipsum dolor sit, amet elit. Quia sunt qui ducimus veritatis ullam.</p>
    //               </div>
    //             </div>
    //           </div>

    //           {/* Another Skill Item */}
    //           <div className="skill-inner-box mb-[24px] p-[20px] flex flex-col relative rounded-[100px] max-[420px]:rounded-[50px] bg-[#ffd5df]" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800">
    //             <div className="skill-contact inline-flex flex-wrap max-[420px]:flex-col">
    //               <svg className="progress blue noselect w-[90px] h-full bg-transparent inline-block" data-progress="80" viewBox="0 0 80 80">
    //                 <path className="track" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"></path>
    //                 <path className="fill" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"></path>
    //                 <text className="value" x="50%" y="58%">80%</text>
    //               </svg>
    //               <div className="skill-box-contact w-[calc(100%-90px)] p-[10px] flex flex-col justify-center max-[420px]:w-full">
    //                 <h4 className="font-montserrat text-[16px] font-semibold text-[#111a24] mb-[8px] tracking-[0.03rem] leading-[1.2]">Backend <span className="text-[13px] font-medium text-[#111a24]">(Node.js, .NET)</span></h4>
    //                 <p className="font-montserrat text-[13px] leading-[22px] text-[#495461] tracking-[0.03rem]">Lorem ipsum dolor sit, amet elit. Quia sunt qui ducimus veritatis ullam.</p>
    //               </div>
    //             </div>
    //           </div>

    //           {/* Third Skill Item */}
    //           <div className="skill-inner-box p-[20px] flex flex-col relative rounded-[100px] max-[420px]:rounded-[50px] bg-[#e8d4f7]" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000">
    //             <div className="skill-contact inline-flex flex-wrap max-[420px]:flex-col">
    //               <svg className="progress green noselect w-[90px] h-full bg-transparent inline-block" data-progress="70" viewBox="0 0 80 80">
    //                 <path className="track" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"></path>
    //                 <path className="fill" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"></path>
    //                 <text className="value" x="50%" y="58%">70%</text>
    //               </svg>
    //               <div className="skill-box-contact w-[calc(100%-90px)] p-[10px] flex flex-col justify-center max-[420px]:w-full">
    //                 <h4 className="font-montserrat text-[16px] font-semibold text-[#111a24] mb-[8px] tracking-[0.03rem] leading-[1.2]">UI/UX Design <span className="text-[13px] font-medium text-[#111a24]">(Figma, XD)</span></h4>
    //                 <p className="font-montserrat text-[13px] leading-[22px] text-[#495461] tracking-[0.03rem]">Lorem ipsum dolor sit, amet elit. Quia sunt qui ducimus veritatis ullam.</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="section-about relative py-[50px] max-[991px]:py-[40px] max-[767px]:py-[35px]">
        <SubTitle sub1="About" sub2="Me" />
        <div className='w-full  flex flex-wrap ' >
          <div className=' w-full lg:w-1/2 xl:w-1/3 bg-red-50 order-2 lg:order-2  xl:order-1' >1</div>
          <div className=' w-full lg:w-full xl:w-1/3 bg-green-50 order-1 lg:order-1 xl:order-2' >2</div>
          <div className=' w-full lg:w-1/2  xl:w-1/3 bg-blue-50 order-3 lg:order-3 xl:order-3' >3</div>
          
        </div>
    </section>
  );
};

export default About;
