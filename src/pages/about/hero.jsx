import React from "react";
import HeroOne from "../../assets/images/about-hero-1.svg";
import HeroTwo from "../../assets/images/about-hero-2.svg";
import HeroThree from "../../assets/images/about-hero-3.svg";
import HeroFour from "../../assets/images/about-hero-4.svg";

const Hero = () => {
  return (
    <div className="px-[16px] md:px-[80px] py-[48px] md:pt-[72px] md:pb-[96px] flex flex-col gap-[40px] md:gap-[64px] items-center">
      <h1 className="w-[343px] md:w-[911px] font-medium text-[32px] md:text-[64px] leading-[37px] md:leading-[73px] text-center text-black100">
        Discover the passion behind our mission to transform lives.
      </h1>
      <div className="flex flex-col md:flex-row items-start gap-[24px] md:gap-[32px] md:h-[517px]">
        <div className="">
          <img
            src={HeroOne}
            alt=""
            className="w-[343px] h-[166px] object-cover rounded-[16px] md:w-full md:h-full"
          />
        </div>
        <div className="flex flex-row-reverse md:flex-col gap-[24px]">
          <img
            src={HeroTwo}
            alt=""
            className="w-[163px] h-[106px] object-cover rounded-[16px] md:w-full md:h-full"
          />
          <img
            src={HeroThree}
            alt=""
            className="w-[156px] h-[106px] object-cover rounded-[16px] md:w-full md:h-full"
          />
        </div>
        <div className="">
          <img
            src={HeroFour}
            alt=""
            className="w-[343px] h-[166px] object-cover rounded-[16px] md:w-full md:h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
