import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as XAMPLogo } from "../../assets/icons/xamp.svg";
import { ReactComponent as DropDown } from "../../assets/icons/chevron-down.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";

const Navbar = () => {
  const navItems = [
    {
      name: "Properties",
      icon: <DropDown />,
      href: "",
    },
    {
      name: "About",
      icon: null,
      href: "",
    },
    {
      name: "FAQs",
      icon: null,
      href: "",
    },
    {
      name: "Contact Us",
      icon: null,
      href: "",
    },
  ];

  return (
    <nav className="bg-[#fff] pr-[12px] pl-[16px] md:px-[23px] py-[10px] md:py-[20px] flex items-center md:gap-[300px] md:justify-normal justify-between">
      <XAMPLogo className="w-[105px] h-[32px] md:w-[auto] md:h-[auto]" />
      <ul className="hidden md:flex items-center gap-[32px]">
        {navItems?.map((nav, i) => (
          <li
            key={i}
            className="flex text-[18px] font-medium leading-[26px] items-center gap-[4px]"
          >
            <Link>{nav.name}</Link>
            {nav.icon && nav.icon}
          </li>
        ))}
      </ul>
      <MenuIcon className="flex md:hidden" />
    </nav>
  );
};

export default Navbar;
