import React from "react";
import background3 from "../assets/background3.svg";
import girl from "../assets/girl2.svg";

const ResultsSection: React.FC = () => {
  return (
    <section
      className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${background3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-2">
          Cosmetics That Really Works
        </h2>
        <div className="w-60 h-[1.3px] bg-black"></div>
      </div>

      <div className="max-w-full max-h-[70%] overflow-hidden">
        <img
          src={girl}
          alt="Before and after result"
          className="object-contain h-full"
        />
      </div>
    </section>
  );
};

export default ResultsSection;
