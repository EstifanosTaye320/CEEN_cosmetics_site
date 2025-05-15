import React from "react";
import { ProductCardData } from "../types";

interface ProductCardProps extends ProductCardData {
  onProductSelect: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  imageUrl,
  title,
  description,
  onProductSelect,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onProductSelect(id);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <img src={imageUrl} alt={title} className="h-[400px] object-contain" />
      <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-2">{title}</h3>

        <p className="text-sm mb-4 flex-grow line-clamp-2 w-[80%]">
          {description}
        </p>

        <a
          href="#"
          onClick={handleClick}
          className="inline-flex items-center text-pink-500 font-medium group hover:text-pink-600 transition-colors duration-200 mt-auto underline"
        >
          LEARN MORE
          <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
