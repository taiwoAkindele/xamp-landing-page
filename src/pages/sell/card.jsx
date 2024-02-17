import React from "react";

const Card = () => {
  return (
    <div className="py-[48px] md:py-[96px] px-[16px] md:px-[80px] flex md:flex-row flex-col items-center justify-normal md:justify-between gap-[24px] md:gap-[64px]">
      <div className="flex flex-col gap-[20px] md:w-[608px]">
        <h5 className="font-medium text-[19px] md:text-[52px] leading-[22px] md:leading-[61px] text-black100">
          The only card you’ll ever need. Simple.
        </h5>
        <p className="font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-gray400">
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
          suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
          montes, sit sit. Tellus aliquam enim urna, etiam.
        </p>
      </div>
      <div className="md:w-[608px]">
        <p className="font-normal text-[16px] md:text-[18px] leading-[22px] md:leading-[28px] text-gray400">
          Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas
          sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor
          rutrum lacus malesuada massa ornare et. Vulputate consectetur ac
          ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim
          massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac
          elementum gravida cursus dis.
        </p>
      </div>
    </div>
  );
};

export default Card;
