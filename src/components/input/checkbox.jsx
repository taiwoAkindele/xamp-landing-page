import React from "react";

const Checkbox = ({ label }) => {
  return (
    <div className="flex items-center gap-[12px]">
      <input
        type="checkbox"
        name=""
        id=""
        className="w-[20px] h-[20px] rounded-[6px] border border-[#D0D5DD]"
      />
      {label && (
        <label className="font-normal text-gray400 text-[16px] leading-[24px] text-black100">
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
