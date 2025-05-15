import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const staticFAQItems = [
    {
      question: "Are CEEN Cosmetics products cruelty-free?",
      answer:
        "Yes! We are committed to ethical beauty and never test our products on animals.Each product page includes detailed descriptions and recommendations. You can also take our skincare quiz for personalized suggestions.",
    },
    {
      question: "How can I find the right product for my skin type?",
      answer:
        "You can use our personalized skincare quiz or consult the detailed product descriptions on each product page for recommendations based on skin type and concerns.",
    },
    {
      question: "Do your products contain any harmful chemicals?",
      answer:
        "We formulate our products without parabens, sulfates, phthalates, and other potentially harmful ingredients. We prioritize natural and safe ingredients.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy on all unused and unopened products. Please visit our returns page for detailed instructions.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to many countries. Shipping rates and delivery times vary depending on the destination. You can find more details on our shipping information page.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
          Frequently Ask Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {staticFAQItems.map((item, index) => {
            const isOpen = openIndex === index;
            const isFirst = index === 0;

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center mr-4">
                    {isOpen ? (
                      isFirst ? (
                        <div className="w-4 h-0.5 bg-green-500 mr-4"></div>
                      ) : (
                        <Minus className="w-5 h-5 text-gray-600 mr-4" />
                      )
                    ) : (
                      <Plus className="w-5 h-5 text-gray-600 mr-4" />
                    )}
                    <h3
                      className={`text-lg font-medium ${
                        isOpen ? "text-gray-900" : "text-gray-800"
                      }`}
                    >
                      {item.question}
                    </h3>
                  </div>
                </div>

                {isOpen && (
                  <div className="text-gray-600 text-sm ml-8 w-[78%]">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
