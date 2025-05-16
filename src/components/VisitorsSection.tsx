import React from "react";
import background4 from "../assets/background4.png";
import cleaningCream from "../assets/cleaningCream.svg";
import { ArrowRight } from "lucide-react";

const VisitStoreSection: React.FC = () => {
  return (
    <section
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${background4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-8">
        <div className="w-full xl:w-7/12 text-white ml-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 w-[80%]">
            Visit Our Store to Buy Beauty Products
          </h2>
          <p className="text-md md:text-md my-20 max-w-xl w-[55%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            accumsan arcu est, at lobortis nulla porta eu. Aenean vel dolor
            enim. Etiam aliquam mauris eros, eget ornare diam volutpat eu. Fusce
            auctor pretium tellus vitae bibendum. Proin eget accumsan felis.
          </p>
          <a
            href="/store"
            className="inline-flex items-center bg-white text-pink-500 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-pink-50 transition-colors duration-200 border-2 border-pink-500"
          >
            View Our Store
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>

        <img
          src={cleaningCream}
          alt="Cleansing Cream Product"
          className="absolute w-[850px] transform translate-x-1/2 -translate-y-4 hidden xl:flex"
        />
      </div>
    </section>
  );
};

export default VisitStoreSection;
