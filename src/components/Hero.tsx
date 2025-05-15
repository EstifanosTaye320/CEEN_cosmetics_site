import PropTypes from "prop-types";
import heroBG from "../assets/hero_background.svg";

interface HeroProps {
  title: string;
}

const Hero = ({ title }: HeroProps) => (
  <div className="relative left-0 right-0 -translate-y-[100px]">
    <img
      src={heroBG}
      alt="Hero background"
      className="w-full h-full object-cover"
    />

    <div className="absolute inset-0 flex items-center justify-center -translate-x-[300px] translate-y-[20px]">
      <h1 className="text-4xl md:text-[110px] font-bold tracking-wide p-4">
        {title}
      </h1>
    </div>
  </div>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Hero;
