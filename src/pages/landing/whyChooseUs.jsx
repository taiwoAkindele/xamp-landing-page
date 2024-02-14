import React from "react";
import SecureTransactions from "../../assets/icons/secure.svg";
import Support from "../../assets/icons/support.svg";
import Transparent from "../../assets/icons/transparent.svg";
import UserFriendly from "../../assets/icons/user-friendly.svg";
import PropertyListings from "../../assets/icons/property-listings.svg";
import PersonalizedService from "../../assets/icons/personalized-service.svg";

const WhyChooseUs = () => {
  const Reasons = [
    {
      icon: PropertyListings,
      title: "Extensive Property Listings",
      content:
        "Gain access to a diverse range of properties including apartments, houses, commercial spaces, and more, all in one place.",
    },
    {
      icon: UserFriendly,
      title: "User-Friendly Interface",
      content:
        "Our platform is designed for seamless navigation, making it effortless for users to search, filter, and find their ideal property quickly.",
    },
    {
      icon: Transparent,
      title: "Transparent Transactions",
      content:
        "We prioritize transparency in all transactions, ensuring both landlords and tenants have a clear understanding of terms and agreements.",
    },
    {
      icon: PersonalizedService,
      title: "Personalized Service",
      content:
        "Our dedicated team is committed to providing personalized assistance, guiding you through every step of the renting, selling, buying, or leasing process.",
    },
    {
      icon: SecureTransactions,
      title: "Secure Transactions",
      content:
        "Rest assured, your transactions are secured with the latest encryption technology, safeguarding your sensitive information at all times.",
    },
    {
      icon: Support,
      title: "Exceptional Support",
      content:
        "Whether you have questions, need assistance, or require guidance, our customer support team is always available to help you.",
    },
  ];
  return (
    <div className="py-[48px] md:py-[96px] px-[16px] md:px-[80px] flex flex-col gap-[32px] md:gap-[64px]">
      <div className="flex flex-col gap-[32px]">
        <h3 className="text-[24px] md:text-[48px] font-medium leading-[28px] md:leading-[56px] text-black100 text-center">
          Why choose us?
        </h3>
        <p className="text-[16px] md:text-[20px] leading-[18px] md:leading-[30px] font-normal text-center text-grayText">
          Discover the difference, find a world of comfort with Xamp
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] md:gap-x-[24px] md:gap-y-[64px]">
        {Reasons?.map((reason, i) => (
          <div
            key={i}
            className="h-[214px] md:h-[262px] w-max-[340px] md:w-max-[410px] rounded-[8px] border border-[#EAECF0] py-[24px] md:py-[32px] px-[20px] flex flex-col gap-[8px] shadow-100"
          >
            {/* {reason.icon} */}
            <img
              src={reason.icon}
              alt=""
              className="w-[48px] md:w-[72px] h-[48px] md:h-[72px]"
            />
            <h5 className="text-[18px] md:text-[20px] leading-[30px] text-heading100 font-semibold">
              {reason.title}
            </h5>
            <p className="text-[14px] md:text-[16px] leading-[20px] font-normal text-paragraph100">
              {reason.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
