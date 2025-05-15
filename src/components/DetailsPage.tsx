import CleaningCreamCard from "../components/CleaningCreamCard";
import DetailsFooter from "../components/DetailsFooter";
import upright_bottle from "../assets/upright_bottle.svg";
import bottle from "../assets/bottle.svg";
import { ProductDetailData } from "../types";
import ProductDetailCard from "../components/ProductDetailCard";
import { ArrowLeft } from "lucide-react";

// Removed unused imports like bottle and DetailsFooter

interface DetailsPageProps {
  product: ProductDetailData | null;
  onBackToList: () => void;
}

const DetailsPage: React.FC<DetailsPageProps> = ({ product, onBackToList }) => {
  return (
    <div className="container mx-auto pt-20 px-[60px] md:pt-[50px] relative z-10">
      <button
        onClick={onBackToList}
        className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-8"
      >
        <ArrowLeft className="w-5 h-5 mr-1" />
        Back to all products
      </button>
      <div className=" mx-auto p-6">
        {/* First Row: Image + Content */}
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          {/* Image Column */}
          <div className="md:w-1/2 flex items-center justify-center">
            <img src={upright_bottle} alt="bottle" />
          </div>

          {product === null ? (
            <CleaningCreamCard />
          ) : (
            <ProductDetailCard {...product} />
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {[1, 2, 3].map((item) => (
            <img
              key={item}
              src={bottle}
              alt="bottle"
              className="bg-pink-100 w-[200px]"
            />
          ))}
        </div>
      </div>
      <DetailsFooter />
    </div>
  );
};

export default DetailsPage;
