import React from "react";
import Button from "../../components/button";

const Banner = () => {
  return (
    <div className="md:py-[96px] py-[48px] px-[16px] md:px-[80px]">
      <div className="bg-[#F9FAFB] p-[16px] md:p-[32px] gap-[16px] flex md:flex-row flex-col justify-normal md:justify-between rounded-[16px]">
        <div className="">
          <h5 className="text-[20px] md:text-[24px] leading-[30px] font-semibold text-black100">
            Still have questions?
          </h5>
          <p className="font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-subText">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
        </div>
        <div className="">
          <Button
            btnText="Get in touch"
            type="button"
            className="bg-[#023E8A] text-[16px] leading-[24px] font-semibold text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
