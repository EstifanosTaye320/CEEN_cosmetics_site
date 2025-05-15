import { useState } from "react";
import background from "../assets/background1.svg";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MainProductPage from "../components/MainProductsPage";
import DetailsPage from "../components/DetailsPage";
import { ProductDetailData } from "../types";

const productDetailData: ProductDetailData[] = [
  {
    title: "Vitamin C Serum Details",
    introText:
      "This is the detailed introduction text for the Vitamin C Serum. It's a powerful antioxidant serum that helps to brighten and protect your skin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    appTip:
      "Apply a few drops to cleansed face and neck in the morning before moisturizer. Use sunscreen daily.",
    ingredients:
      "Aloe Barbadensis Leaf Juice, Glycerin, Sodium Ascorbyl Phosphate, Sodium Hyaluronate, Vitis Vinifera Leaf Extract, Cucumis Sativus Fruit Extract, Sodium PCA, Tocopherol, Panthenol, Xanthan Gum, Arginine, Citrus Paradisi Peel Oil, Citrus Limon Peel Oil Expressed, Aqua, Parfum, Ethylhexylglycerin, Sodium Benzoate, Phenethyl Alcohol, Caprylyl Glycol, Limonene, Citral",
  },
  {
    title: "Retinol Serum Details",
    introText:
      "This is the detailed introduction text for the Retinol Serum. Formulated with a stable retinol derivative, it helps to improve skin texture and reduce the appearance of fine lines and wrinkles. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    appTip:
      "Apply a pea-sized amount to clean, dry skin in the evening. Start with 2-3 times per week and increase frequency as tolerated. Use sunscreen daily.",
    ingredients:
      "ALOE BARBADENSIS LEAF JUICE, AQUA, SODIUM PCA, SODIUM ASCORBYL PHOSPHATE, SODIUM HYALURONATE, ROSA CANINA FRUIT EXTRACT, RETINOL, ACETYL GLUCOSAMINE, NIACINAMIDE, ARGANIA SPINOSA KERNEL OIL, TOCOPHEROL, XANTHAN GUM, GLYCERIN, SODIUM LEVULINATE, SODIUM ANISATE, CANNABIS SATIVA (HEMP) SEED OIL, CUCUMIS SATIVUS FRUIT EXTRACT, ETHYLHEXYLGLYCERIN, BETULA ALBA LEAF EXTRACT, HEMATOCOCCUS PLUVIALIS EXTRACT (ASTAXANTHIN), ROSMARINUS OFFICINALIS LEAF EXTRACT, OLEA EUROPAEA FRUIT OIL, CYANOCOBALMIN, LACTIC ACID, CITRIC ACID, CANANAGA ODORATA OIL, CITRUS RETICULATA PEEL OIL, CITRUS AURANTIUM FLOWER OIL, DEXTRIN",
  },
  {
    title: "Hyaluron Serum Details",
    introText:
      "This is the detailed introduction text for the Hyaluron Serum. This intensely hydrating serum replenishes moisture levels, leaving skin looking plump and smooth. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    appTip:
      "Apply a few drops to damp skin after cleansing, morning and evening. Follow with moisturizer.",
    ingredients:
      "ALOE BARBADENSIS LEAF JUICE, AQUA, SODIUM HYALURONATE, ROSA CANINA FRUIT EXTRACT, GLYCERIN, CUCUMIS SATIVUS (CUCUMBER) JUICE, RETINOL, ALLANTOIN, CANNABIS SATIVA (HEMP) SEED OIL, TOCOPHEROL, PANTHENOL, HAEMATOCOCCUS PLUVIALIS EXTRACT (ASTAXANTHIN), ROSMARINUS OFFICINALIS LEAF EXTRACT, OLEA EUROPAEA FRUIT OIL, DEXTRIN, ACACIA GUM, LECITHIN, CITRUS AURANTIUM OIL, SODIUM BENZONATE, SORBIC ACID, SODIUM HYDROXIDE, BENZYL ALCOHOL, LINALOOL, LIMONENE",
  },
];

const INITIAL_VIEW_ID = "-1";

export default function Products() {
  const [selectedProductId, setSelectedProductId] =
    useState<string>(INITIAL_VIEW_ID);

  const handleProductSelect = (id: string) => {
    setSelectedProductId(id);
  };

  const renderMainContent = () => {
    const antiAgeIndex = ["0", "1", "2"].indexOf(selectedProductId);

    if (selectedProductId === INITIAL_VIEW_ID) {
      return <MainProductPage onProductSelect={handleProductSelect} />;
    } else if (antiAgeIndex !== -1) {
      const product = productDetailData[antiAgeIndex];
      return (
        <DetailsPage
          product={product}
          onBackToList={() => handleProductSelect(INITIAL_VIEW_ID)}
        />
      );
    } else {
      return (
        <DetailsPage
          product={null}
          onBackToList={() => handleProductSelect(INITIAL_VIEW_ID)}
        />
      );
    }
  };

  return (
    <section
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `url(${background}) no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      <Hero title="Products" />

      <div className="container mx-auto px-4 py-8 md:py-12">
        {renderMainContent()}
      </div>

      <Footer />
    </section>
  );
}
