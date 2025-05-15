import leftBottle from "../assets/left_tilt_bottle.svg";
import rightBottle from "../assets/right_tilt_bottle.svg";
import bottleShadow from "../assets/bottle_shadow.svg";

const BottleDisplay1 = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto h-[400px]">
      <div className="absolute bottom-0 left-3/4 -translate-x-1/2 w-[80%] z-0">
        <img
          src={bottleShadow}
          alt="bottle shadow"
          className="w-48 h-auto opacity-60"
        />
      </div>

      <div className="relative h-full flex items-end justify-center">
        <div className="relative bottom-7 left-[100px] z-10">
          <img
            src={leftBottle}
            alt="Cleansing Cream Bottle Left View"
            className="w-auto drop-shadow-lg"
            role="img"
          />
        </div>

        <div className="relative bottom-20 right-[70px]">
          <img
            src={rightBottle}
            alt="Cleansing Cream Bottle Right View"
            className="w-auto drop-shadow-lg"
            role="img"
          />
        </div>
      </div>
    </div>
  );
};

export default BottleDisplay1;
