import React from "react";
import { ReactComponent as CircularArrowRight } from "../../assets/icons/circle-arrow-right.svg";
import { ReactComponent as CircularArrowLeft } from "../../assets/icons/circle-arrow-left.svg";
import { ReactComponent as Stars } from "../../assets/icons/stars.svg";

const Discover = () => {
  const reviews = [
    {
      reviewer: "TENANT",
      review:
        "Xamp changed my house-hunting game! I found my dream house without those endless and draining house tours. No more agent drama too, just pure convenience!",
      author: "Alisa Hester",
    },
    {
      reviewer: "LANDLORD",
      review:
        "As a tenant, XAMP made rent payments a breeze. I got notified of important information ASAP and my transactions were smooth.",
      author: "Zainab Ahmed",
    },
    {
      reviewer: "AGENT",
      review:
        "Xamp actually managed to make my property search fun! I found my new home, no stress, no agents – just the way I like it!",
      author: "Emeka Nwankwo",
    },
    {
      reviewer: "TENANT",
      review:
        "Managing my properties was never this easy. Xamp took away the headaches. Listings, tenants, rent – everything is now on autopilot. My stress level? Zero!",
      author: "Bisi Ogunleye",
    },
  ];

  return (
    <div className="md:py-[96px] py-[64px] px-[16px] md:px-[80px] flex flex-col gap-[32px] md:gap-[64px]">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-[16px] md:gap-[20px]">
          <h3 className="font-medium text-[24px] md:text-[40px] leading-[28px] md:leading-[44px] text-black100">
            Discover what we did for them
          </h3>
          <p className="font-normal text-[16px] md:text-[20px] leading-[18px] md:leading-[30px] text-grayText">
            Hear from some of those who used and loved Xamp
          </p>
        </div>
        <div className="hidden md:flex items-center gap-[32px]">
          <CircularArrowLeft />
          <CircularArrowRight width={56} height={56} />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-x-[24px] md:w-full w-[1280px] overflow-x-auto scrollbar-hide">
        {reviews?.map((review, i) => (
          <div
            key={i}
            className="md:w-max-[302px] w-full h-[363px] rounded-[16px] border shadow-100 flex flex-col justify-between py-[36px] px-[20px]"
          >
            <div className="border py-[6px] px-[12px] rounded-[32px] w-max">
              <span className="text-[14px] font-normal leading-[24px] text-gray200">
                {review.reviewer}
              </span>
            </div>
            <div className="flex flex-col pt-[12px]">
              <Stars />
              <p className="font-normal text-[16px] md:text-[18px] leading-[30px] md:leading-[28px] text-subText pt-[12px]">
                {review.review}
              </p>
              <span className="font-medium text-[16px] text-subText leading-[18px] pt-[12px]">
                {review.author}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
