import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
interface ProductProps {
  title: string;
  introText: string;
  appTip: string;
  ingredients: string;
}
const ProductDisplay: React.FC<ProductProps> = ({
  title,
  introText,
  appTip,
  ingredients,
}) => {
  return (
    <div className="md:w-1/2">
      <h2 className="text-5xl mb-2">{title}</h2>

      <div className="flex items-center mb-6">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-pink-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-gray-500 text-sm ml-1">(1 customer review)</span>
      </div>
      <p className="text-gray-600 text-sm w-[80%]">{introText}</p>

      <div className="border-t border-gray-200 pt-4 mb-6">
        <h3 className="text-xl font-semibold mb-3">Application Tip:</h3>
        <p className="text-gray-600 text-sm w-[80%]">{appTip}</p>
      </div>

      {/* Ingredients */}
      <div className="border-t border-gray-200 pt-4 mb-6">
        <h3 className="text-xl font-semibold mb-3">Ingredients:</h3>
        <p className="text-gray-600 text-sm w-[80%]">{ingredients}</p>
      </div>

      {/* Share Section (static) */}
      <div className="border-t border-gray-200 pt-4">
        <p className="text-xl font-semibold mb-4">Share:</p>
        <div className="flex gap-6">
          {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-600 hover:text-rose-600 transition"
              aria-label={`Share on ${Icon.displayName}`}
            >
              <Icon className="w-5 h-5" strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductDisplay;
