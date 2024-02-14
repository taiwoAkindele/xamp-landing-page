import React from "react";
import { ReactComponent as ListingImage } from "../../assets/images/listing-image.svg";
import { ReactComponent as CircularArrow } from "../../assets/icons/circle-arrow-right.svg";

const Listings = () => {
  const properties = [
    { location: "Enugu", number: "132 properties" },
    { location: "Enugu", number: "132 properties" },
    { location: "Enugu", number: "132 properties" },
    { location: "Enugu", number: "132 properties" },
    { location: "Enugu", number: "132 properties" },
    { location: "Enugu", number: "132 properties" },
  ];
  return (
    <div className="md:px-[80px] px-[16px] pt-[64px] md:pt-[0px] flex flex-col gap-[32px]">
      <h3 className="font-medium text-[24px] md:text-[40px] leading-[28px] md:leading-[44px] text-black100">
        Explore listings
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[32px]">
        {properties?.map((list, i) => (
          <div
            key={i}
            className="flex justify-between items-center w-max-[343px] md:w-max-[405px] h-[72px] md:h-[122px] rounded-[8px] border py-[12px] px-[16px] md:p-[16px] shadow-100"
          >
            <div className="flex items-center gap-[8px]">
              <ListingImage className="w-[48px] h-[48px] md:w-[auto] md:h-[auto]" />
              <div className="flex flex-col md:gap-[8px]">
                <h5 className="font-semibold text-[18px] md:text-[20px] leading:[21px] md:leading-[23px] text-black100">
                  {list.location}
                </h5>
                <p className="font-normal text-[14px] md:text-[16px] leading-[24px] text-paragraph100">
                  {list.number}
                </p>
              </div>
            </div>
            <CircularArrow className="h-[40px] w-[40px] md:h-[auto] md:w-[auto]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
