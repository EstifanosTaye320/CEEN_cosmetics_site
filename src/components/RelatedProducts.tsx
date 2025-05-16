import React from "react";

export interface Product {
  imageUrl: string;
  name: string;
}

interface RelatedProductsProps {
  products: Product[];
  title?: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({
  products,
  title = "Related products",
}) => {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="py-8 md:py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 md:mb-10">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div key={index} className="group flex flex-col items-center">
              <div className="bg-soft-pink w-full aspect-square rounded-lg flex items-center justify-center p-4 sm:p-6 mb-4 overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain bg-pink-100"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-gray-700 text-center">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
