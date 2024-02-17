import React from "react";
import Button from "../../components/button";
import { ReactComponent as SupportImage } from "../../assets/images/support-img.svg";
import { ReactComponent as SupportImageMobile } from "../../assets/images/support-img-mobile.svg";

const Support = () => {
  return (
    <div className="md:py-[96px] pb-[64px] px-[16px] md:px-[120px] flex md:flex-row flex-col items-center justify-normal md:gap-[0px] gap-[48px] md:justify-between">
      <div className="md:w-[624px] w-[auto]">
        <h5 className="font-semibold md:font-medium text-[20px] md:text-[48px] leading-[23px] md:leading-[56px] text-black100">
          Hands-on support well beyond launch
        </h5>
        <p className="font-normal text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-grayText md:w-[527px] w-[auto]">
          Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
          mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis
          fusce augue enim. Quis at habitant diam at. Suscipit tristique risus,
          at donec.
        </p>
        <Button
          btnText="Get Started"
          type="button"
          className="bg-[#023E8A] text-[16px] leading-[24px] mt-[32px] font-semibold text-white"
        />
      </div>
      <SupportImage className="hidden md:block" />
      <SupportImageMobile className="md:hidden block" />
    </div>
  );
};

export default Support;
