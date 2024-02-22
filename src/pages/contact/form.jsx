import React from "react";
import { Button, Checkbox, InputField, TextArea } from "../../components";
import { ReactComponent as ContactImage } from "../../assets/images/contact.svg";

const ContactForm = () => {
  return (
    <div className="md:pt-[64px] md:pb-[96px] py-[40px] px-[16px] md:px-[80px]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[4px] md:gap-[20px] pb-[16px]">
            <h5 className="font-semibold text-[24px] md:text-[36px] leading-[36px] md:leading-[44px] tracking-[0.02] text-black100">
              Get in touch
            </h5>
            <p className="font-normal text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-subText">
              Our friendly team would love to hear from you.
            </p>
          </div>
          <div className="flex flex-col gap-[24px]">
            <div className="flex md:flex-row flex-col items-center gap-[32px]">
              <InputField
                type="text"
                label="First Name"
                placeholder="First Name"
              />
              <InputField
                type="text"
                label="Last Name"
                placeholder="Last Name"
              />
            </div>
            <InputField
              type="text"
              label="Email"
              placeholder="you@company.com"
            />
            <InputField
              type="text"
              label="Phone Number"
              placeholder="+1 (555) 000-0000"
            />
            <TextArea label="Message" placeholder="Leave us a message" />
            <Checkbox label="You agree to our friendly privacy policy." />
          </div>

          <Button
            btnText="Send Message"
            type="button"
            className="bg-[#023E8A] text-[16px] leading-[24px] mt-[32px] font-semibold text-white"
          />
        </div>
        <div className="hidden md:block">
          <ContactImage />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
