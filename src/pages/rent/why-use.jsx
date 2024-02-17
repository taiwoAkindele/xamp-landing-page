import React from "react";
import Button from "../../components/button";
import { ReactComponent as WhyImage } from "../../assets/images/why-image.svg";
import { ReactComponent as WhyImageMobile } from "../../assets/images/why-image-mobile.svg";

const WhyUseXamp = () => {
  return (
    <div className="md:py-[96px] pt-[0px] px-[16px] pb-[64px] md:px-[120px] flex md:flex-row flex-col items-center justify-normal md:gap-[0px] gap-[48px] md:justify-between">
      <div className="md:w-[624px] w-[auto]">
        <h5 className="font-semibold md:font-medium text-[20px] md:text-[48px] leading-[23px] md:leading-[56px] text-black100">
          Why Use Xamp?
        </h5>
        <p className="font-normal text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-grayText md:w-[527px] w-[auto]">
          Well, why not? Xamp has made efficient property management and
          stress-free house hunting possible through one platform for both
          landlords and property seekers. No more agent palava. No more
          unnecessary house tours. No more rent collection headaches. Instead,
          you can now skyrocket your earnings, and save more of your money, time
          and energy. Sounds too good to be true? Try it out for yourself.
        </p>
        <Button
          btnText="Get Started"
          type="button"
          className="bg-[#023E8A] text-[16px] leading-[24px] mt-[32px] font-semibold text-white"
        />
      </div>
      <WhyImage className="md:block hidden" />
      <WhyImageMobile className="md:hidden block" />
    </div>
  );
};

export default WhyUseXamp;
