import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../../assets/icons/Icon.svg";
import { ReactComponent as RealEstate } from "../../assets/images/real-estate.svg";
import { ReactComponent as RealEstateMobile } from "../../assets/images/real-estate-mobile.svg";

const Users = () => {
  const whoUseUs = [
    {
      title: "1. Tenants",
      content:
        "Our platform simplifies the search for your next home. With detailed property listings, virtual tours, and secure communication channels, finding the perfect rental property has never been easier.",
      href: "",
      className: "border-l-[4px] border-l-blue100",
    },
    {
      title: "2. Landlords",
      content:
        "As a landlord, you can list your properties effortlessly, reaching a wide audience of potential tenants. Our platform offers tools to manage your listings, track inquiries, and communicate with prospective tenants seamlessly.",
      href: "",
    },
    {
      title: "3. Agents",
      content:
        "Real estate agents benefit from our platform's advanced features tailored to their needs. Manage multiple listings, collaborate with clients, and track leads efficiently, all within one intuitive interface.",
      href: "",
    },
  ];
  return (
    <div className="md:py-[96px] md:px-[80px] px-[16px] flex flex-col gap-[32px] md:gap-[64px]">
      <div className="flex items-start md:items-center md:justify-center">
        <h3 className="w-[auto] md:w-[647.61px] text-[24px] md:text-[48px] font-medium leading-[38px] md:leading-[60px] md:text-center text-black100">
          One App For All Your Real Estate Problems
        </h3>
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-between justify-normal gap-[32px] md:gap-[64px] h-full md:h-[650px]">
        <div className="md:w-[522px] w-[auto]">
          {whoUseUs?.map((user, i) => (
            <div
              key={i}
              className={`${user.className} py-[16px] md:py-[20px] pl-[24px] pr-[0px] flex flex-col gap-[16px]`}
            >
              <h5 className="text-[20px] md:text-[24px] font-medium leading-[23px] md:leading-[28.2px] text-black100">
                {user.title}
              </h5>
              <p className="text-[16px] md:text-[18px] font-normal text-gray100 leading-[24px]">
                {user.content}
              </p>
              <Link className="flex items-center text-[16px] leading-[24px] font-medium text-blue100 gap-[8px]">
                Learn more
                <ArrowRight />
              </Link>
            </div>
          ))}
        </div>
        <RealEstate className="hidden md:block" />
        <RealEstateMobile className="block md:hidden" />
      </div>
    </div>
  );
};

export default Users;
