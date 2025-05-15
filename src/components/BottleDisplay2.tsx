import shadow from "../assets/long_shadow.svg";
import bottle from "../assets/upright_bottle.svg";
import smallBottle from "../assets/small_bottle.svg";

const BottleDisplay2 = ({ className }: { className?: string }) => {
  return (
    <div className={`relative h-[640px] w-[480px] ${className}`}>
      <img
        src={shadow}
        alt="Bottle shadow"
        className="absolute bottom-3 left-1/2 -translate-x-[120px] w-[60%]"
      />

      <div className="absolute right-1/4 translate-x-1/2 bottom-0 z-10">
        <img
          src={smallBottle}
          alt="Small bottle"
          className="h-[250px] w-auto -translate-y-2 -translate-x-[98px]"
        />
      </div>

      <div className="absolute left-1/3 -translate-x-1/2 bottom-0 z-20">
        <img src={bottle} alt="Long bottle" className="h-[340px] w-auto" />
      </div>
    </div>
  );
};

export default BottleDisplay2;
