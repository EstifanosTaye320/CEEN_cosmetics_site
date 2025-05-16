import React, { useState, useEffect, useRef } from "react";
import TestimonialCard, { TestimonialCardProps } from "./TestimonialCard";

interface TestimonialCarouselProps {
  title: string;
  testimonials: TestimonialCardProps[];
}

const getItemsPerPage = (width: number): number => {
  if (width >= 1024) {
    return 3;
  } else if (width >= 768) {
    return 2;
  } else {
    return 1;
  }
};

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  title,
  testimonials,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [dynamicItemsPerPage, setDynamicItemsPerPage] = useState<number>(
    getItemsPerPage(window.innerWidth)
  );
  const visibleContainerRef = useRef<HTMLDivElement>(null);
  const [visibleContainerWidth, setVisibleContainerWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerPage = getItemsPerPage(window.innerWidth);
      setDynamicItemsPerPage((prevItemsPerPage) => {
        if (newItemsPerPage !== prevItemsPerPage) {
          setCurrentPage(0);
          return newItemsPerPage;
        }
        return prevItemsPerPage;
      });
      if (visibleContainerRef.current) {
        setVisibleContainerWidth(visibleContainerRef.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const measureWidth = () => {
      if (visibleContainerRef.current) {
        setVisibleContainerWidth(visibleContainerRef.current.offsetWidth);
      }
    };
    measureWidth();
    window.addEventListener("resize", measureWidth);
    return () => {
      window.removeEventListener("resize", measureWidth);
    };
  }, [dynamicItemsPerPage]);

  const totalPages = Math.ceil(testimonials.length / dynamicItemsPerPage);

  useEffect(() => {
    if (currentPage >= totalPages && totalPages > 0) {
      setCurrentPage(totalPages - 1);
    } else if (totalPages === 0 && currentPage !== 0) {
      setCurrentPage(0);
    }
  }, [currentPage, totalPages]);

  const carouselPaddingClass = "px-4 sm:px-6 md:px-8 lg:px-12";
  const carouselGapClass = "gap-4 sm:gap-6 md:gap-8 lg:gap-10";

  const gapClasses = carouselGapClass.split(" ");
  let relevantGapClass = "";
  if (window.innerWidth >= 1024) {
    relevantGapClass =
      gapClasses.find((cls) => cls.startsWith("lg:gap-")) || "";
  } else if (window.innerWidth >= 768) {
    relevantGapClass =
      gapClasses.find((cls) => cls.startsWith("md:gap-")) || "";
  } else if (window.innerWidth >= 640) {
    relevantGapClass =
      gapClasses.find((cls) => cls.startsWith("sm:gap-")) || "";
  }

  const finalGapClass: string =
    relevantGapClass ||
    gapClasses.find((cls) => cls.startsWith("gap-")) ||
    "gap-0";

  const gapValueTailwind = parseInt(finalGapClass.split("-").pop() || "0");

  const baseFontSize = 16;
  const gapPx = gapValueTailwind * 0.25 * baseFontSize;

  const totalGapWidthPx =
    dynamicItemsPerPage > 1 ? (dynamicItemsPerPage - 1) * gapPx : 0;
  const itemWidthPx =
    visibleContainerWidth > totalGapWidthPx && dynamicItemsPerPage > 0
      ? (visibleContainerWidth - totalGapWidthPx) / dynamicItemsPerPage
      : 0;

  const translateX = `-${currentPage * visibleContainerWidth}px`;

  const handlePrevPage = () => {
    setCurrentPage(Math.max(currentPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage(Math.min(currentPage + 1, totalPages - 1));
  };

  return (
    <div className="my-8">
      <h2 className="text-4xl font-bold mb-7 text-center">{title}</h2>
      <div
        ref={visibleContainerRef}
        className={`relative overflow-hidden ${carouselPaddingClass}`}
      >
        <div
          className={`flex ${carouselGapClass}`}
          style={{
            transform: `translateX(${translateX})`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: `${itemWidthPx}px`,
              }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
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
