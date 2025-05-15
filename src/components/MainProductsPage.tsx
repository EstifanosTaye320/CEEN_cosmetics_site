import React from "react";
import ProductsDisplay from "./ProductsDisplay";
import uprightBottle from "../assets/upright_bottle.svg";
import mediumBottle from "../assets/medium_bottle_container.svg";
import smallBottle from "../assets/small_bottle_container.svg";
import { ProductCardData } from "../types";
import ResultsSection from "./ResultsSection";
import VisitStoreSection from "./VisitorsSection";

interface MainProductPageProps {
  onProductSelect: (id: string) => void;
}

const sampleCleanserProducts: ProductCardData[] = [
  {
    id: "c1",
    imageUrl: mediumBottle,
    title: "Foaming Cleanser",
    description:
      "A gentle foaming cleanser for daily use. Removes impurities without stripping moisture.",
  },
  {
    id: "c2",
    imageUrl: uprightBottle,
    title: "Cleansing Milk",
    description: "Hydrating cleansing milk that leaves skin soft and supple.",
  },
  {
    id: "c3",
    imageUrl: smallBottle,
    title: "Cleansing Balm",
    description: "Deep pore cleansing balm that melts away makeup and dirt.",
  },
];

const AntiAgeProductsList: ProductCardData[] = [
  {
    id: "0",
    imageUrl: mediumBottle,
    title: "Vitamin C Serum",
    description:
      "Brightening serum with powerful antioxidants for radiant skin.",
  },
  {
    id: "1",
    imageUrl: uprightBottle,
    title: "Retinol Serum",
    description: "Visibly reduces fine lines and wrinkles for smoother skin.",
  },
  {
    id: "2",
    imageUrl: smallBottle,
    title: "Hyaluron Serum",
    description: "Provides intense hydration and plumping effect.",
  },
];

const MainProductPage: React.FC<MainProductPageProps> = ({
  onProductSelect,
}) => {
  return (
    <>
      <ProductsDisplay
        title="Cleanser Products"
        introText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        products={sampleCleanserProducts}
        color="bg-gradient-to-b from-rose-50 to-white"
        onProductSelect={onProductSelect}
      />

      <ProductsDisplay
        title="Anti-Aging Products"
        introText="Our CEEN Anti-Aging Set contains three of the most effective anti-aging products in a pleasant travel size. These are the plumping Hyaluron Serum, the deeply effective Retinol Serum and the refreshing Vitamin C Serum. If you come together all these products, you get an extensive and highly effective care program for the home. This set is also ideal as a gift set. Convince yourself and discover the natural care routine."
        products={AntiAgeProductsList}
        color="bg-gradient-to-b from-white to-rose-50"
        onProductSelect={onProductSelect}
      />

      <ResultsSection />

      <VisitStoreSection />
    </>
  );
};

export default MainProductPage;
