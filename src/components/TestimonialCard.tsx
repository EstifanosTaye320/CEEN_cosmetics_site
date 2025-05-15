import React from "react";
import quotation from "../assets/quotation.svg";

export interface TestimonialCardProps {
  testimonial: string;
  name: string;
  relation: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  name,
  relation,
  image,
}) => {
  return (
    <div className="flex flex-col justify-between items-center my-8">
      <div className="relative w-full p-8 shadow-lg h-[270px] shadow-pink-300/50 border-2 border-gray-300 mb-5">
        <div className="absolute -top-2 left-12 -translate-x-1/2 -translate-y-1/2 bg-white">
          <img src={quotation} alt="quotation mark" className="w-14 h-14" />
        </div>
        <p className="text-gray-700 italic py-10">{testimonial}</p>
      </div>
      <div className="flex items-center mt-4 md:mt-0">
        <img
          src={image}
          alt="Profile"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-gray-800 font-bold">{name}</h3>
          <p className="text-gray-600">{relation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
