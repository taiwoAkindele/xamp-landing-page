import React from "react";

const Button = ({ className, btnText, type, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`py-[10px] px-[20px] rounded-[40px] ${className}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
