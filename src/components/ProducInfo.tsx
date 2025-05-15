import React from "react";
import girlImg from "../assets/girl.svg";

interface ProductInfoProps {
  header: string;
  listItems: string[];
  buttonText: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  header,
  listItems,
  buttonText,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="w-full md:w-1/2 pr-8 flex flex-col items-start ml-20">
        <h2 className="text-4xl font-bold mb-4">{header}</h2>
        <ol className="space-y-2">
          {listItems.map((item, index) => (
            <li key={index} className="text-gray-400">
              {index + 1}. {item}
            </li>
          ))}
        </ol>
        <p className="text-gray-400 pt-2">Watch step by step video</p>
        <button className="bg-[#fcfcfc] hover:bg-[#f5e4ec] text-[#F472B6] font-bold py-3 px-6 rounded-full border-2 border-[#F472B6]  flex items-center justify-center transition-colors duration-300 my-2">
          {buttonText}
          <svg
            className="w-6 h-6 mr-2 mx-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 4.5L18 12L6 19.5V4.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="w-full md:w-1/2 items-end">
        <div className="bg-gradient-to-r from-white to-gray-100 h-full">
          <img
            src={girlImg}
            alt="Product"
            className="w-full h-auto object-cover ml-20"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
