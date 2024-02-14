import React from "react";
import { ReactComponent as GooglePlaystore } from "../../assets/images/google-play-badge.svg";
import { ReactComponent as AppStore } from "../../assets/images/app-store-badge.svg";
import { ReactComponent as Phone } from "../../assets/images/phone.svg";
import { ReactComponent as PhoneMobile } from "../../assets/images/Image.svg";

const Access = () => {
  return (
    <div className="md:pb-[96px] pb-[64px] md:px-[80px] px-[16px]">
      <div className="bg-gray300 md:pt-[0px] md:py-[32px] md:pr-[24px] md:pl-[0px] pt-[32px] px-[16px] rounded-[24px]">
        <div className="flex flex-col md:flex-row items-center justify-normal md:justify-between">
          <div className="flex flex-col md:p-[64px] pb-[32px] gap-[16px] md:gap-[40px] w-[auto] md:w-[776px]">
            <div className="flex flex-col gap-[16px] md:gap-[32px]">
              <h3 className="md:w-[465px] w-[auto] font-medium text-[20px] md:text-[36px] leading-[30px] md:leading-[44px] tracking-[-2%] text-black100">
                Access the power of our platform on the go.
              </h3>
              <p className="md:w-[389px] w-[auto] font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-black200">
                Download our app now and start searching for your perfect
                property anytime, anywhere!
              </p>
            </div>
            <div className="flex flex-col gap-[16px]">
              <span className="font-semibold text-[14px] leading-[20px] text-black100">
                Get the app
              </span>
              <div className="flex items-center gap-[16px]">
                <GooglePlaystore />
                <AppStore />
              </div>
            </div>
          </div>
          <Phone className="hidden md:block" />
          <PhoneMobile className="block md:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Access;
