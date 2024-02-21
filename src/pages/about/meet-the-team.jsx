import React from "react";
import Avatar1 from "../../assets/images/Avatar1.svg";
import Avatar2 from "../../assets/images/Avatar2.svg";
import Avatar3 from "../../assets/images/Avatar3.svg";
import Avatar4 from "../../assets/images/Avatar4.svg";
import { ReactComponent as LinkedIn } from "../../assets/icons/linkedin-gray.svg";
import { ReactComponent as Internet } from "../../assets/icons/internet.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter-gray.svg";

const MeetTheTeam = () => {
  const Staff = [
    {
      profilePicture: Avatar1,
      name: "Amélie Laurent",
      experience:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      role: "Founder & CEO",
    },
    {
      profilePicture: Avatar2,
      name: "Nikolas Gibbons",
      experience: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
      role: "Engineering Manager",
    },
    {
      profilePicture: Avatar3,
      name: "Sienna Hewitt",
      experience: "Former PM for Linear, Lambda School, and On Deck.",
      role: "Product Manager",
    },
    {
      profilePicture: Avatar4,
      name: "Lily-Rose Chedjou",
      experience: "Former frontend dev for Linear, Coinbase, and Postscript.",
      role: "Frontend Developer",
    },
  ];

  return (
    <div className="md:py-[96px] py-[48px] md:px-[80px] bg-[#F9FAFB] flex flex-col gap-[32px] md:gap-[64px] items-center justify-center">
      <div className="md:w-[768px] w-[311px] flex flex-col gap-[12px] md:gap-[20px]">
        <h3 className="text-[24px] md:text-[40px] leading-[28px] md:leading-[44px] text-center font-semibold text-black100">
          Meet our team
        </h3>
        <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-center font-normal text-grayText">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do your best work.
        </p>
      </div>
      <div className="flex md:flex-row flex-col items-center gap-[32px] md:gap-[20px]">
        {Staff?.map((staff, i) => (
          <div
            key={i}
            className="h-[308px] w-[343px] md:max-w-[296px] bg-white px-[16px] py-[24px] md:px-[0px] md:py-[0px] md:p-[20px]"
          >
            <div className="flex flex-col gap-[20px] items-center justify-center">
              <img src={staff.profilePicture} alt="" className="" />
              <div className="flex flex-col gap-[8px]">
                <div className="flex flex-col items-center">
                  <h6 className="text-[18px] leading-[28px] text-black100 text-center font-semibold">
                    {staff.name}
                  </h6>
                  <span className="text-[16px] leading-[24px] text-center font-normal text-blue100">
                    {staff.role}
                  </span>
                </div>
                <p className="text-[16px] w-[248px] leading-[24px] text-center text-gray400 font-normal">
                  {staff.experience}
                </p>
              </div>
              <div className="flex items-center gap-[16px]">
                <Twitter />
                <LinkedIn />
                <Internet />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
