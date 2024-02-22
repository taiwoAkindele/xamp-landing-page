import React from "react";

const Textarea = ({ label, value, placeholder, onChange }) => {
  return (
    <div className="flex flex-col gap-[8px]">
      {label && (
        <label className="font-medium text-[14px] leading-[20px] text-black100">
          {label}
        </label>
      )}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="py-[10px] px-[14px] rounded-[8px] border border-[#D0D5DD] placeholder:text-[16px] placeholder:text-[#4A4A4A] placeholder:leading-[24px]"
      />
    </div>
  );
};

export default Textarea;
