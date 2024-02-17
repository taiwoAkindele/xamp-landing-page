import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as XAMPLogo } from "../../assets/icons/xamp.svg";
import { ReactComponent as DropDown } from "../../assets/icons/chevron-down.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as SellIcon } from "../../assets/icons/sell.svg";
import { ReactComponent as RentIcon } from "../../assets/icons/rent.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/x-close.svg";
import { ReactComponent as ArrowDownAsh } from "../../assets/icons/arrow-down-ash.svg";

const propertySublink = [
  {
    icon: <SellIcon />,
    title: "Sell",
    subtext: "News and writings, press releases, and resources.",
    href: "/sell",
  },
  {
    icon: <RentIcon />,
    title: "Rent",
    subtext: "All the boring stuff that we Dan from legal made us add.",
    href: "/rent",
  },
  {
    icon: <RentIcon />,
    title: "Lease",
    subtext: "All the boring stuff that we Dan from legal made us add.",
    href: "/lease",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isShowProperties, setIsShowProperties] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const navItems = [
    {
      name: "Properties",
      icon: <DropDown />,
      mobileIcon: <ArrowDownAsh />,
      onClick: true,
      sublink: propertySublink,
    },
    {
      name: "About",
      icon: null,
      href: "/about",
    },
    {
      name: "FAQs",
      icon: null,
      href: "/faq",
    },
    {
      name: "Contact Us",
      icon: null,
      href: "/contact-us",
    },
  ];

  const handleLink = (nav) => {
    if (nav.href) {
      navigate(nav.href);
    } else {
      setIsShowProperties(!isShowProperties);
    }
  };

  return (
    <React.Fragment>
      <nav className="bg-[#fff] pr-[12px] pl-[16px] md:px-[23px] py-[10px] md:py-[20px] flex items-center md:gap-[300px] md:justify-normal justify-between">
        <XAMPLogo
          onClick={() => navigate("/")}
          className="w-[105px] h-[32px] md:w-[auto] md:h-[auto] cursor-pointer"
        />
        <ul className="hidden md:flex items-center gap-[32px]">
          {navItems?.map((nav, i) => (
            <React.Fragment key={i}>
              <li
                className="relative flex text-[18px] font-medium leading-[26px] items-center gap-[4px]"
                onClick={() => handleLink(nav)}
              >
                <Link>{nav.name}</Link>
                {nav.icon && nav.icon}
              </li>
              {isShowProperties && (
                <div
                  className="fixed z-10 inset-0"
                  onClick={() => setIsShowProperties(false)}
                >
                  <div className="p-[32px] bg-white rounded-[16px] border absolute mx-[auto] left-[50px] top-[100px] flex items-center gap-[20px]">
                    {propertySublink?.map((item, i) => (
                      <div
                        key={i}
                        className="w-[288px] p-[12px] flex items-start gap-[16px]"
                      >
                        <Link to={item.href}>
                          {item.icon}
                          <div className="flex flex-col gap-[12px]">
                            <h6 className="text-[16px] font-medium leading-[24px] text-black100">
                              {item.title}
                            </h6>
                            <p className="font-normal text-[14px] leading-[20px] text-gray400">
                              {item.subtext}
                            </p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </ul>
        <div className="flex md:hidden">
          {!isMobileNavOpen ? (
            <MenuIcon onClick={() => setIsMobileNavOpen(true)} />
          ) : (
            <CloseIcon
              width={24}
              height={24}
              onClick={() => setIsMobileNavOpen(false)}
            />
          )}
        </div>
      </nav>
      {isMobileNavOpen && (
        <ul className="h-[100vh] py-[24px] px-[16px] flex flex-col gap-[8px]">
          {navItems?.map((nav, i) => (
            <React.Fragment key={i}>
              <li
                onClick={() => handleLink(nav)}
                className="py-[12px] flex items-center justify-between text-[18px] font-medium leading-[26px]"
              >
                <Link>{nav.name}</Link>
                {nav.mobileIcon && nav.mobileIcon}
              </li>
              {nav.sublink &&
                isShowProperties &&
                nav.sublink?.map((item, i) => (
                  <div key={i} className="flex flex-col gap-[12px]">
                    <Link to={item.href}>
                      <h6 className="text-[16px] font-medium leading-[24px] text-black100">
                        {item.title}
                      </h6>
                      <p className="font-normal text-[14px] leading-[20px] text-gray400">
                        {item.subtext}
                      </p>
                    </Link>
                  </div>
                ))}
            </React.Fragment>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};

export default Navbar;
