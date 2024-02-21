import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as XAMP } from "../../assets/icons/xamp-white.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";

const Footer = () => {
  const footerItems = [
    {
      heading: "Properties",
      list: [
        { title: "Buy", link: "/properties/sell" },
        { title: "Rent", link: "/properties/rent" },
        { title: "Lease", link: "/properties/lease" },
      ],
    },
    {
      heading: "Company",
      list: [
        { title: "About us", link: "/about" },
        { title: "Privacy", link: "#" },
        { title: "Terms", link: "#" },
      ],
    },
    {
      heading: "Support",
      list: [
        { title: "Help Center", link: "#" },
        { title: "Contact", link: "#" },
      ],
    },
  ];

  return (
    <div className="bg-blue200 pt-[64px] pb-[48px] px-[16px] md:px-[80px]">
      <div className="flex flex-col md:flex-row items-start gap-[48px] pb-[64px]">
        <div className="flex flex-col gap-[32px]">
          <XAMP />
          <span className="md:w-[320px] font-normal text-[16px] leading-[24px] text-white">
            Design amazing digital experiences that create more happy in the
            world.
          </span>
        </div>
        <div className="grid grid-cols-3 grid-row-3 gap-x-[32px]">
          {footerItems?.map((item) => (
            <div
              key={item.heading}
              className="flex flex-col gap-[16px] md:w-[256px]"
            >
              <h5 className="font-normal text-[14px] leading-[20px] text-white">
                {item.heading}
              </h5>
              <ul className="flex flex-col gap-[12px]">
                {item.list?.map((list) => (
                  <li
                    key={list.title}
                    className="font-medium text-[16px] leading-[24px] text-white"
                  >
                    <Link to={list.link}>{list.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t-[1px] border-t-gray400 flex flex-col md:flex-row items-start md:items-center gap-[32px] md:gap-[0px] md:justify-between pt-[32px]">
        <span className="font-normal text-[16px] leading-[24px] text-white">
          © 2024 XampApp UI. All rights reserved.
        </span>
        <div className="flex items-center gap-[24px]">
          <Twitter />
          <Facebook />
          <Instagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
