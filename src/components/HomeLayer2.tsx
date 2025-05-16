import CustomButton from "./CustomButton";
import smallBottleContainer from "../assets/small_bottle_container.svg";
import mediumBottleContainer from "../assets/medium_bottle_container.svg";
import bottle from "../assets/upright_bottle.svg";

const HomeLayer2: React.FC = () => {
  return (
    <div className="relative ">
      <div className="flex items-center justify-center mt-40">
        <div className="flex items-center justify-center flex-col text-center gap-4">
          <h1 className="text-2xl lg:text-4xl font-bold w-[90%] md:w-[60%]">
            Luxurious Beauty Products Tailored to Every Skin Type and Concern
          </h1>
          <p className="mt-2 text-sm md:text-xs text-gray-400 w-[90%] md:w-[60%]">
            Our Products combines the power of nature and science to deliver
            visible results. Crafted with the finest ingredients, it nourishes,
            hydrates, and rejuvenates your skin, leaving it soft, smooth, and
            radiant
          </p>
        </div>
      </div>

      <div className="flex justify-around items-center relative">
        <div className="flex flex-col items-center">
          <img src={smallBottleContainer} alt="Placeholder" className="mb-2" />
        </div>
        <div className="flex flex-col items-center">
          <img src={bottle} alt="Placeholder" className="mb-2" />
        </div>
        <div className="flex flex-col items-center">
          <img src={mediumBottleContainer} alt="Placeholder" className="mb-2" />
        </div>
        <div className="absolute top-[25%] left-1/2 translate-x-[5%] transform lg:translate-x-[25%] -translate-y-1/2 p-6 z-10 max-w-[300px]">
          <h2 className="text-xl font-bold">Luxurious Beauty</h2>
          <p className="mt-2 text-xs">
            Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem I Lorem
            IpsumLo
          </p>
          <div className="mt-4">
            <CustomButton text="Show Detail" variant="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayer2;
