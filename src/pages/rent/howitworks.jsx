import React from "react";
import DownloadAppIcon from "../../assets/icons/download-app.svg";
import BrowseListingIcon from "../../assets/icons/browse-listings.svg";
import RentApptIcon from "../../assets/icons/rent-appartment.svg";

const Howitworks = () => {
  const howItWorksList = [
    {
      icon: DownloadAppIcon,
      heading: "Download App",
      subtext:
        "Get started by downloading our user-friendly app on your smartphone.",
    },
    {
      icon: BrowseListingIcon,
      heading: "Browse Listings",
      subtext:
        "Explore our extensive marketplace featuring a diverse range of apartment listings. ",
    },
    {
      icon: RentApptIcon,
      heading: "Rent Your Ideal Apartment",
      subtext:
        "Once you've found the apartment of your dreams, simply follow the easy steps to secure your rental.",
    },
  ];

  return (
    <div className="py-[48px] md:py-[96px] px-[16px] md:px-[80px] flex flex-col gap-[64px]">
      <h3 className="font-semibold text-[24px] md:text-[48px] leading-[28px] md:leading-[56px] text-black100 text-center">
        How it works
      </h3>
      <div className="flex md:flex-row flex-col items-center gap-[24px]">
        {howItWorksList?.map((list, i) => (
          <div
            key={i}
            className="py-[16px] px-[20px] flex flex-col gap-[20px] items-center justify-center w-[343px] md:w-[410px]"
          >
            <img
              src={list.icon}
              alt=""
              className="w-[48px] md:w-[72px] h-[48px] md:h-[72px]"
            />
            <h5 className="font-semibold text-[16px] md:text-[20px] leading-[30px] text-center text-heading100">
              {list.heading}
            </h5>
            <p className="font-normal text-[14px] md:text-[16px] leading-[20px] text-center text-gray400">
              {list.subtext}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Howitworks;
