import React from "react";
import { ReactComponent as ReadyToSell } from "../../assets/images/ready-to-sell.svg";
import { ReactComponent as ReadyToSellMobile } from "../../assets/images/ready-to-sell-mobile.svg";
import Button from "../../components/button";

const ReadytoSell = () => {
  return (
    <div className="md:px-[80px] md:pt-[48px] px-[16px] pb-[64px] md:pb-[96px]">
      <div className="py-[32px] md:py-[40px] px-[16px] md:px-[32px] rounded-[24px] bg-[#F2EFE8] flex md:flex-row flex-col items-center justify-normal md:justify-between gap-[32px]">
        <div className="md:w-[572px] flex flex-col gap-[24px] md:gap-[20px]">
          <h5 className="text-[20px] leading-[30px] md:text-[40px] md:leading-[44px] font-medium text-black100">
            Ready to sell your property?
          </h5>
          <p className="font-normal text-[14px] md:text-[20px] leading-[22px] md:leading-[30px] text-subText">
            Get started today by listing your property on our platform. Simply
            create your account, upload photos and details of your property, and
            set your desired price.
          </p>
          <div className="">
            <Button
              btnText="Get Started"
              type="button"
              className="bg-[#023E8A] text-[16px] leading-[24px] mt-[32px] font-semibold text-white"
            />
          </div>
        </div>
        <ReadyToSell className="hidden md:block" />
        <ReadyToSellMobile className="md:hidden block" />
      </div>
    </div>
  );
};

export default ReadytoSell;
