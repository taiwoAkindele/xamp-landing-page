import React from "react";
import Button from "../../components/button";
import BuildingImage from "../../assets/images/building.svg";

const Rectangle = () => {
  return (
    <div className="md:pt-[48px] px-[16px] md:px-[80px] pb-[64px] md:pb-[96px]">
      <div className="bg-blue200 py-[32px] md:py-[40px] px-[16px] md:px-[32px] rounded-[16px] md:rounded-[24px] flex md:flex-row flex-col gap-[32px] md:gap-[0px] justify-normal items-center md:justify-between">
        <div className="md:w-[700px] w-[auto]">
          <div className="md:p-[24px] md:w-[572px] flex flex-col gap-[24px] md:gap-[20px]">
            <h5 className="font-medium text-[20px] md:text-[40px] leading-[30px] md:leading-[44px] text-white">
              List your property for rent
            </h5>
            <p className="font-normal text-[14px] md:text-[20px] leading-[22px] md:leading-[30px] text-gray500">
              Tired of chasing late rent, giving endless reminders, and
              struggling to find tenants for your properties? It's time for a
              change! Join Xamp today and experience stress-free property
              management.
            </p>
            <div className="">
              <Button
                btnText="Get Started"
                type="button"
                className="bg-[#023E8A] text-[16px] leading-[24px] mt-[32px] font-semibold text-white"
              />
            </div>
          </div>
        </div>
        <div className="">
          <img
            src={BuildingImage}
            alt=""
            className="w-[311px] h-[209px] md:w-[515px] md:h-[319px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Rectangle;
