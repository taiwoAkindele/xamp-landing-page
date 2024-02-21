import React from "react";

const Card = () => {
  return (
    <div className="py-[48px] md:py-[96px] px-[16px] md:px-[80px] flex flex-col justify-normal md:justify-between gap-[24px] md:gap-[32px]">
      <h5 className="font-medium md:w-[915px] text-[19px] md:text-[52px] leading-[22px] md:leading-[61px] text-black100">
        We understand that selling your property is a significant decision.
      </h5>
      <div className="flex flex-col md:flex-row gap-[20px] md:gap-[64px]">
        <p className="font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-gray400">
          That's why we offer a user-friendly interface designed to make the
          process seamless and efficient. From creating your listing to managing
          inquiries and scheduling viewings, our platform provides all the tools
          you need to showcase your property effectively and connect with
          potential buyers.
        </p>

        <p className="font-normal text-[16px] md:text-[18px] leading-[22px] md:leading-[28px] text-gray400">
          Our team of experts is dedicated to helping you navigate the listing
          your properties with ease, offering personalized guidance and
          assistance to ensure a successful sale. With our platform, you can
          trust that your property is in good hands.
        </p>
      </div>
    </div>
  );
};

export default Card;
