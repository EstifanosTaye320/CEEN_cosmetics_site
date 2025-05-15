import React, { useState, ReactNode } from "react";

// Define the props for the ProductTabs component
interface ProductTabsProps {
  descriptionContent: ReactNode; // Content for the Description tab
  additionalInfoContent: ReactNode; // Content for the Additional Information tab
  reviewsContent: ReactNode; // Content for the Reviews tab
  reviewCount: number; // Number to display in the Reviews tab label
}

const ProductTabs: React.FC<ProductTabsProps> = ({
  descriptionContent,
  additionalInfoContent,
  reviewsContent,
  reviewCount,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0); // State to track the active tab index (0, 1, or 2)

  // Define the labels for the fixed tabs
  const tabs = [
    "Description",
    "Additional information",
    `Reviews (${reviewCount})`, // Dynamically include the review count
  ];

  // Determine which content to display based on the active tab index
  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return descriptionContent;
      case 1:
        return additionalInfoContent;
      case 2:
        return reviewsContent;
      default:
        return null; // Should not happen if state is managed correctly
    }
  };

  return (
    <div className="w-full">
      {/* Tab Headers Container (handles the full-width gray border) */}
      <div className="w-full border-b border-gray-300">
        {/* Inner Flex Container (centers the buttons) */}
        <div className="flex justify-center">
          {tabs.map((label, index) => (
            <button
              key={index} // Using index as key is acceptable here as the list is fixed
              className={`
                px-4 py-3 text-lg font-medium focus:outline-none transition-colors duration-200
                ${
                  index === activeTab
                    ? // Active tab styles: dark text, pink underline
                      "text-gray-900 border-b-2 border-pink-500"
                    : // Inactive tab styles: lighter text, hover effect, transparent underline
                      "text-gray-600 hover:text-gray-800 border-b-2 border-transparent"
                }
                ${
                  index === tabs.length - 1 ? "" : "mr-4 sm:mr-6"
                } {/* Add margin to all but the last tab */}
              `}
              onClick={() => setActiveTab(index)}
              role="tab" // ARIA role for accessibility
              aria-selected={index === activeTab} // ARIA state for accessibility
              id={`tab-${index}`} // ARIA ID for accessibility
              aria-controls={`panel-${index}`} // ARIA control for accessibility
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content Wrapper */}
      <div
        // Added w-4/5 (80% width) and mx-auto (center block element)
        className="py-6 text-gray-600 leading-relaxed w-4/5 mx-auto"
        role="tabpanel" // ARIA role for accessibility
        aria-labelledby={`tab-${activeTab}`} // ARIA label for accessibility
        id={`panel-${activeTab}`} // ARIA ID for accessibility
      >
        {/* Render the content of the active tab */}
        {renderContent()}
      </div>
    </div>
  );
};

export default ProductTabs;
