import React, { useState, ReactNode } from "react";

interface ProductTabsProps {
  descriptionContent: ReactNode;
  additionalInfoContent: ReactNode;
  reviewsContent: ReactNode;
  reviewCount: number;
}

const ProductTabs: React.FC<ProductTabsProps> = ({
  descriptionContent,
  additionalInfoContent,
  reviewsContent,
  reviewCount,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    "Description",
    "Additional information",
    `Reviews (${reviewCount})`,
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return descriptionContent;
      case 1:
        return additionalInfoContent;
      case 2:
        return reviewsContent;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <div className="w-full border-b border-gray-300">
        <div className="flex justify-center">
          {tabs.map((label, index) => (
            <button
              key={index}
              className={`
                px-4 py-3 text-sm md:text-md lg:text-lg font-medium focus:outline-none transition-colors duration-200
                ${
                  index === activeTab
                    ? "text-gray-900 border-b-2 border-pink-500"
                    : "text-gray-600 hover:text-gray-800 border-b-2 border-transparent"
                }
                ${index === tabs.length - 1 ? "" : "mr-4 sm:mr-6"}
              `}
              onClick={() => setActiveTab(index)}
              role="tab"
              aria-selected={index === activeTab}
              id={`tab-${index}`}
              aria-controls={`panel-${index}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div
        className="py-6 text-gray-600 leading-relaxed md:w-4/5 mx-auto"
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        id={`panel-${activeTab}`}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default ProductTabs;
