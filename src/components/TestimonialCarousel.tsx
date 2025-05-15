import React, { useState } from "react";
import TestimonialCard, { TestimonialCardProps } from "./TestimonialCard";

interface TestimonialCarouselProps {
  title: string;
  testimonials: TestimonialCardProps[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  title,
  testimonials,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePrevPage = () => {
    setCurrentPage(Math.max(currentPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage(Math.min(currentPage + 1, totalPages - 1));
  };

  return (
    <div className="my-8">
      <h2 className="text-4xl font-bold mb-7 text-center">{title}</h2>
      <div className="flex space-x-20 px-20 overflow-x-auto">
        {currentTestimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className={`px-4 py-2 rounded-l-lg ${
            currentPage === 0
              ? "bg-pink-300 cursor-not-allowed"
              : "bg-pink-100 hover:bg-pink-200"
          }`}
          onClick={handlePrevPage}
          disabled={currentPage === 0}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className={`px-4 py-2 rounded-r-lg ${
            currentPage === totalPages - 1
              ? "bg-pink-300 cursor-not-allowed"
              : "bg-pink-100 hover:bg-pink-200"
          }`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
