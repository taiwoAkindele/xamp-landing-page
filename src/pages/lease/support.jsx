import React from "react";
import { ReactComponent as LaptopGirl } from "../../assets/images/laptop-girl.svg";
import { ReactComponent as LaptopGirlMobile } from "../../assets/images/laptop-girl-mobile.svg";

const Support = () => {
  return (
    <div className="md:py-[96px] md:px-[120px] px-[16px] py-[48px] flex md:flex-row flex-col items-center gap-[24px] md:gap-[64px] justify-normal md:justify-between">
      <div className="md:w-[480px] w-full">
        <LaptopGirl className="hidden md:block" />
        <LaptopGirlMobile className="md:hidden block" />
      </div>
      <div className="md:w-[624px] flex flex-col gap-[32px]">
        <h5 className="md:w-[484px] w-[343px] font-semibold md:font-medium text-[20px] md:text-[48px] leading-[23px] md:leading-[56px] text-black100">
          Hands-on support to guide you every step
        </h5>
        <p className="md:w-[527px] w-[343px] font-normal text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-gray400">
          Whether you're a first-time renter or a seasoned tenant, we provide
          personalized support and expert advice to ensure a seamless leasing
          experience. With Xamp, finding your dream property has never been
          easier.
        </p>
      </div>
    </div>
  );
};

export default Support;
