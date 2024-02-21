import React from "react";
import Button from "../../components/button";
import { ReactComponent as GetStartedImage } from "../../assets/images/get-started.svg";
import { ReactComponent as GetStartedImageMobile } from "../../assets/images/get-started-mobile.svg";

const GetStarted = () => {
  return (
    <div className="md:pt-[48px] md:pb-[96px] pb-[64px] px-[16px] md:px-[80px]">
      <div className="py-[32px] md:py-[40px] px-[16px] md:px-[32px] rounded-[24px] bg-[#3565A1] bg-opacity-20 flex md:flex-row flex-col items-center justify-normal md:justify-between gap-[32px]">
        <div className="md:w-[572px] flex flex-col gap-[24px] md:gap-[20px]">
          <h5 className="text-[20px] leading-[30px] md:text-[40px] md:leading-[44px] font-medium text-black100">
            Are you a property owner looking to maximize your rental income?
          </h5>
          <p className="font-normal text-[14px] md:text-[20px] leading-[22px] md:leading-[30px] text-subText">
            List your property with Xamp and gain access to a vast network of
            potential tenants. Our streamlined listing process makes it quick
            and hassle-free to showcase your property to prospective renters.
          </p>
          <div className="">
            <Button
              btnText="Get Started"
              type="button"
              className="bg-[#023E8A] text-[16px] leading-[24px] mt-[32px] font-semibold text-white"
            />
          </div>
        </div>
        <GetStartedImage className="md:block hidden" />
        <GetStartedImageMobile className="block md:hidden" />
      </div>
    </div>
  );
};

export default GetStarted;
