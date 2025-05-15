import React from "react";

interface HorizontalScrollProps {
  items: string[];
}

const HorizontalScroll = ({ items }: HorizontalScrollProps) => (
  <div
    className="group overflow-x-hidden py-8 absolute flex justify-center bg-gradient-to-r from-white
    via-pink-50 to-pink-100 left-0"
  >
    <div className="flex animate-centered-bidirectional gap-4 whitespace-nowrap">
      {items.map((item, index) => (
        <React.Fragment key={`${item}-${index}`}>
          <div className="flex items-center text-2xl font-bold text-gray-900">
            {item}
          </div>
          <div className="flex items-center text-2xl font-bold text-gray-900 opacity-0">
            {item}
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default HorizontalScroll;
