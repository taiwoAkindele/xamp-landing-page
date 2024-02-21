import React from "react";
import { ReactComponent as PropertyListing } from "../../assets/icons/property-listings.svg";
import { ReactComponent as UserFriendly } from "../../assets/icons/user-friendly.svg";
import { ReactComponent as Transparent } from "../../assets/icons/transparent.svg";

const WhyXamp = () => {
  const ReasonArray = [
    {
      icon: <PropertyListing />,
      heading: "Extensive Property Listings",
      subtext:
        "Gain access to a diverse range of properties including apartments, houses, commercial spaces, and more, all in one place.",
    },
    {
      icon: <UserFriendly />,
      heading: "User-Friendly Interface",
      subtext:
        "Our platform is designed for seamless navigation, making it effortless for users to search, filter, and find their ideal property quickly.",
    },
    {
      icon: <Transparent />,
      heading: "Transparent Transactions",
      subtext:
        "We prioritize transparency in all transactions, ensuring both landlords and tenants have a clear understanding of terms and agreements.",
    },
  ];

  return (
    <div className="py-[48px] md:pt-[96px] md:pb-[96px] px-[16px] md:px-[80px] flex flex-col gap-[32px] md:gap-[64px]">
      <div className="flex flex-col gap-[32px] md:gap-[20px]">
        <h5 className="font-medium text-[24px] md:text-[40px] text-center md:text-left leading-[28px] md:leading-[44px] text-black100">
          Why Xamp?
        </h5>
        <p className="text-[16px] md:text-[20px] leading-[18px] text-center md:text-left md:leading-[30px] font-normal text-grayText">
          Discover the difference, find a world of comfort with Xamp
        </p>
      </div>

      <div className="flex md:flex-row flex-col items-center gap-[24px]">
        {ReasonArray?.map((item, i) => (
          <div
            key={i}
            className="md:w-[410px] w-[343px] h-[262px] py-[32px] px-[20px] flex flex-col gap-[20px] rounded-[8px] border-t-[4px] border-t-[#023E8A] shadow-100"
          >
            {item.icon}
            <h5 className="font-semibold text-[20px] leading-[30px] text-heading100">
              {item.heading}
            </h5>
            <p className="font-normal text-[16px] leading-[20px] text-gray400">
              {item.subtext}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyXamp;
