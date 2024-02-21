import React from "react";
import Button from "../../components/button";
import { ReactComponent as SupportImage } from "../../assets/images/support-img.svg";
import { ReactComponent as SupportImageMobile } from "../../assets/images/support-img-mobile.svg";

const Support = () => {
  return (
    <div className="md:py-[96px] pb-[64px] px-[16px] md:px-[120px] flex md:flex-row flex-col items-center justify-normal md:gap-[0px] gap-[48px] md:justify-between">
      <div className="flex flex-col gap-[8px]">
        <h5 className="font-semibold md:font-medium md:w-[442px] text-[20px] md:text-[48px] leading-[23px] md:leading-[56px] text-black100">
          We prioritize your needs and delivers results.
        </h5>
        <p className="font-normal md:w-[527px] text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-grayText md:w-[527px] w-[auto]">
          Our platform offers unmatched visibility, reaching a wide audience of
          potential buyers to maximize your chances of a quick sale. With our
          innovative features and dedicated support, selling your property has
          never been easier or more rewarding.
        </p>
        <div className="">
          <Button
            btnText="Get Started"
            type="button"
            className="bg-[#023E8A] text-[16px] leading-[24px] mt-[32px] font-semibold text-white"
          />
        </div>
      </div>
      <SupportImage className="hidden md:block" />
      <SupportImageMobile className="md:hidden block" />
    </div>
  );
};

export default Support;
