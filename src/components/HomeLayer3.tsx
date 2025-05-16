import React from "react";
import leafTopSvg from "../assets/leaf_top.svg";
import leafBottomSvg from "../assets/leaf_bottom.svg";
import ElegantCard from "./ElegantCard";

const HomeLayer3: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-1/3 h-1/3">
        <img src={leafTopSvg} alt="Leaf Top" />
      </div>

      <div className="absolute right-0 w-1/3 h-1/3">
        <img src={leafBottomSvg} alt="Leaf Bottom" />
      </div>

      <div className="relative h-[700px] p-[200px] flex flex-col justify-center items-center gap-14">
        <div className="relative w-full h-full flex flex-col lg:flex-row gap-8 justify-between items-center">
          <ElegantCard
            title="Classy"
            content="Lorem ipsum dolor sit amet consectetur. Id tempus enim nisl lorem id morbi vitae. Vitae viverra s"
            position="top-0 left-0"
          />
          <ElegantCard
            title="Elegant"
            content="Lorem ipsum dolor sit amet consectetur. Id tempus enim nisl lorem id morbi vitae. Vitae viverra s"
            position="top-0 right-0"
          />
        </div>

        <h1 className="text-7xl font-bold text-center mb-8 w-[500px] hidden lg:flex">
          Why Choose Us?
        </h1>

        <div className="relative w-full h-full flex flex-col lg:flex-row gap-8 justify-between items-center">
          <ElegantCard
            title="Essence"
            content="Lorem ipsum dolor sit amet consectetur. Id tempus enim nisl lorem id morbi vitae. Vitae viverra s"
            position="bottom-0 left-0"
          />
          <ElegantCard
            title="Natural"
            content="Lorem ipsum dolor sit amet consectetur. Id tempus enim nisl lorem id morbi vitae. Vitae viverra s"
            position="bottom-0 right-0"
          />
        </div>

        <div className="hidden lg:flex absolute top-1/2 left-1/2 transform -translate-x-[230px] -translate-y-[230px]">
          <div className="w-[450px] h-[450px] rounded-full border-[3px] border-gray-300 absolute"></div>
          <div className="w-[380px] h-[380px]  rounded-full border-[3px] border-gray-300 absolute transform translate-x-[34px] translate-y-[34px]"></div>
          <div className="w-[310px] h-[310px]  rounded-full border-[3px] border-gray-300 absolute transform translate-x-[68px] translate-y-[68px]"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayer3;
