import React from "react";
import ProductCard from "./ProductCard";
import { ProductCardData } from "../types";

interface ProductsDisplayProps {
  title: string;
  introText: string;
  products: ProductCardData[];
  color: string;
  onProductSelect: (id: string) => void;
}

const ProductsDisplay: React.FC<ProductsDisplayProps> = ({
  title,
  introText,
  products,
  color,
  onProductSelect,
}) => {
  return (
    <section className={`py-12 md:py-20 ${color}`}>
      {" "}
      <div className="container mx-auto px-4">
        {" "}
        <h2 className="text-center text-3xl sm:text-5xl font-bold text-gray-800 mb-4">
          {title}
          <div className="w-[200px] h-[1.3px] bg-black mx-auto mt-6 md:mt-3"></div>{" "}
        </h2>
        <p className="text-center text-gray-700 w-[90%] md:w-[55%] mx-auto mb-10 md:mb-16">
          {introText}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              description={product.description}
              onProductSelect={onProductSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsDisplay;
