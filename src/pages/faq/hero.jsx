import React from "react";

const Hero = () => {
  const FAQArray = [
    {
      questions:
        "Are there any loyalty programs or incentives for frequent users of Xamp?",
      answer:
        "Are there any loyalty programs or incentives for frequent users of Xamp?",
    },
    {
      questions: "How do I recover my account if I lost my password?",
      answer:
        "If you don't remember your password, use password reset. If you don't remember your email or username, go to password reset and enter possible email addresses you own. When you enter an email that's registered with Xamp, you will get a password reset link in your email from us.",
    },
    {
      questions:
        "Does Xamp provide any feature to help people that list their properties to market it or increase its visibility?",
      answer:
        "At the moment, the current version of Xamp doesn't have any features that cater to this. But, they are being developed and will be added to future versions of Xamp application.",
    },
    {
      questions:
        "Does Xamp provide analytics for listed properties, especially the verified ones?",
      answer:
        "At the moment, the current version of Xamp doesn't have any features that cater to this. But, they are being developed and will be added to future versions.",
    },
    {
      questions: "How does a landlord get his listing verified?",
      answer:
        "To get your property verified, please provide government issued ID cards that prove your ownership of the property you listed.",
    },
    {
      questions:
        "Can tenants set up automatic reminders or notifications on XAMP to keep track of important dates, such as lease renewals or rent collection deadlines?",
      answer:
        "Not yet. This feature will be made available in future versions of our app.",
    },
  ];
  return (
    <div className="">
      <div className="flex flex-col items-center gap-[32px] md:gap-[48px] py-[48px] px-[16px] md:py-[96px]">
        <h1 className="font-semibold text-[30px] md:text-[48px] leading-[35px] md:leading-[60px] text-center text-black100 tracking-[-0.02]">
          FAQs
        </h1>
        <p className="md:w-[960px] font-normal text-[16px] md:text-[20px] leading-[22px] md:leading-[30px] text-center text-subText">
          See if you can find the answers you are looking for below. If not,
          please contact our support team (embed link to email support) and we
          will get back to you ASAP.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-[32px] gap-y-[32px] md:gap-y-[64px] px-[16px] md:px-[80px]">
        {FAQArray?.map((item, i) => (
          <div key={i} className="flex flex-col gap-[24px]">
            <h5 className="font-medium text-[18px] leading-[28px]">
              {item.questions}
            </h5>
            <p className="font-normal text-[16px] leading-[24px]">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
