import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#F2EFE8] w-[100%] h-full flex flex-col items-center gap-[48px] md:gap-[24px]">
      <div className="w-[340px] md:w-[816px] pt-[64px] px-[16px] flex flex-col gap-[8px] md:gap-[24px]">
        <h1 className="text-[30px] md:text-[62px] font-semibold leading-[35px] md:leading-[75px] text-center text-black100 md:px-[20px]">
          Real Estate should not be a stress.
        </h1>
        <p className="text-[16px] md:text-[20px] font-normal leading-[18px] md:leading-[30px] text-center text-subText">
          Discover your next home, manage your tenants, rent, lease and sell
          your properties, all from the comfort of your couch.
        </p>
      </div>
      <div className="bg-bannerMob md:bg-bannerImg md:h-bannerHeight h-[211px] w-[100%] bg-cover bg-no-repeat"></div>
    </div>
  );
};

export default Hero;
