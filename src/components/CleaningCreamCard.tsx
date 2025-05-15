import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const ProductDisplay = () => {
  return (
    <div className="md:w-1/2">
      {/* Rating */}
      <h2 className="text-5xl mb-2">Cleaning Cream</h2>

      <div className="flex items-center mb-3">
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

      {/* Description */}
      <p className="text-gray-600 text-sm my-20 w-[80%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        tempus enim massa, sed finibus leo consectetur a. Fusce quis vulputate
        urna, sed iaculis ante. Etiam ultricies nunc augue, non ultrices arcu
        euismod non. Duo error nobis mnesarchum ad, latine feugait in sea. His
        ad diam altera.
      </p>

      {/* Product Info */}
      <div className="border-t border-gray-200 pt-4 mb-6">
        <h3 className="text-xl font-semibold mb-3">Info</h3>
        <ul className="text-xs text-gray-500 space-y-1">
          <li>
            <span className="font-medium">SKU:</span> 03
          </li>
          <li>
            <span className="font-medium">Category:</span> Cream
          </li>
          <li>
            <span className="font-medium">Tags:</span> Design, Ideas,
            Innovative, New
          </li>
        </ul>
      </div>

      {/* Share */}
      <div className="border-t border-gray-200 pt-4">
        <p className="text-xl font-semibold mb-4">Share:</p>
        <div className="flex gap-6">
          {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-600 hover:text-rose-600 transition"
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
