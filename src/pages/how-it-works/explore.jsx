import React from "react";
import { ReactComponent as CircularArrowRight } from "../../assets/icons/circle-arrow-right.svg";
import { ReactComponent as CircularArrowLeft } from "../../assets/icons/circle-arrow-left.svg";
import Explore1 from "../../assets/images/explore-1.svg";
import Explore2 from "../../assets/images/explore-2.svg";
import Explore3 from "../../assets/images/explore-3.svg";
import { ReactComponent as LikeIcon } from "../../assets/icons/like-icon.svg";
import { ReactComponent as VerifyIcon } from "../../assets/icons/verify.svg";

const Explore = () => {
  const properties = [
    {
      image: Explore1,
      price: "₦500,000",
      propName: "Sophia estate",
      bed: "1",
      bath: "2",
      size: "1440",
      location: "100 Smith Street Collingwood VIC 3066 AU",
    },
    {
      image: Explore2,
      price: "₦500,000",
      propName: "Sophia estate",
      bed: "1",
      bath: "2",
      size: "1440",
      location: "100 Smith Street Collingwood VIC 3066 AU",
    },
    {
      image: Explore3,
      price: "₦500,000",
      propName: "Sophia estate",
      bed: "1",
      bath: "2",
      size: "1440",
      location: "100 Smith Street Collingwood VIC 3066 AU",
    },
  ];

  return (
    <div className="md:py-[96px] pb-[64px] px-[16px] md:px-[80px] flex flex-col gap-[32px] md:gap-[64px] overflow-x-auto scrollbar-hide">
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col gap-[16px] md:gap-[20px]">
          <h3 className="font-medium text-[24px] md:text-[40px] leading-[28px] md:leading-[44px] text-black100">
            Explore our listings
          </h3>
          <p className="font-normal text-[16px] md:text-[20px] leading-[18px] md:leading-[30px] text-grayText">
            Hear from some of our amazing customers who are automating their
            finances.
          </p>
        </div>
        <div className="hidden md:flex items-center gap-[32px]">
          <CircularArrowLeft />
          <CircularArrowRight width={56} height={56} />
        </div>
      </div>
      <div className="flex items-center gap-[24px] md:w-full w-[1029px]">
        {properties?.map((listing, i) => (
          <div
            key={i}
            className="relative md:w-full w-[343px] h-max-[258px] md:h-[407px] flex flex-col gap-[12px]"
          >
            <img
              src={listing.image}
              alt=""
              className="w-full h-[148px] object-cover"
            />
            <div className="absolute flex items-center justify-between w-full p-[16px]">
              <div className="flex items-center gap-[7px]">
                <div className="py-[5px] px-[10px] bg-green100 rounded-[5px]">
                  <span className="font-medium flex items-center justify-center text-[12px] leading-[14px] text-green200">
                    Available
                  </span>
                </div>
                <div className="py-[5px] px-[10px] flex items-center justify-center bg-blue300 rounded-[5px]">
                  <span className="font-medium text-[12px] leading-[14px] text-white">
                    Rent
                  </span>
                </div>
              </div>
              <LikeIcon />
            </div>
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-[10px]">
                <div className="py-[5px] w-max px-[10px] bg-green100 rounded-[5px] flex items-center gap-[8px]">
                  <VerifyIcon />
                  <span className="font-medium text-[12px] leading-[14px] text-green200">
                    Verified
                  </span>
                </div>
                <h6 className="font-medium text-[16px] leading-[18px] text-black100">
                  {listing.propName}
                </h6>
                <div className="flex item-center text-[13px] gap-[8px]">
                  <div className="font-semibold">
                    {listing.bed} <span className="font-normal">bed</span>
                  </div>
                  <div className="font-semibold">
                    {listing.bath} <span className="font-normal">bath</span>
                  </div>
                  <div className="font-semibold">
                    {listing.size} <span className="font-normal">sqft</span>
                  </div>
                </div>
                <span className="font-normal text-[13px] leading-[16px] text-gray400">
                  {listing.location}
                </span>
              </div>
              <span className="font-semibold text-[22px] leading-[25px] text-black100">
                {listing.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
