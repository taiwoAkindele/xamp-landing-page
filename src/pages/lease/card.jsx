import React from "react";
import { ReactComponent as PhoneImage } from "../../assets/images/Phone-Image.svg";
import { ReactComponent as PhoneImageMobile } from "../../assets/images/phone-screen-mobile.svg";

const Card = () => {
  return (
    <div className="md:py-[96px] py-[48px] px-[16px] md:px-[120px] flex md:flex-row flex-col items-center justify-normal gap-[64px] md:gap-[0px] md:justify-between">
      <div className="md:w-[624px] flex flex-col gap-[32px]">
        <h5 className="md:w-[442px] font-medium text-[20px] md:text-[48px] leading-[23px] md:leading-[56px] text-black100">
          Dedicated to revolutionizing your search
        </h5>
        <p className="md:w-[527px] font-normal text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-gray400">
          Our comprehensive listings feature detailed descriptions and
          high-quality images, making it easy for you to visualize your future
          home.
        </p>
      </div>
      <PhoneImage className="hidden md:block" />
      <PhoneImageMobile className="md:hidden block" />
    </div>
  );
};

export default Card;
