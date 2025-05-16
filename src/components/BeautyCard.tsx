import FollowButton from "./FollowButton";
import footerbottle from "../assets/footerbottles.svg";

const BeautyCard = () => (
  <div className="bg-pink-400 rounded-2xl p-8 shadow-lg mx-auto mt-[65px] relative">
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-xl md:text-3xl font-bold text-gray-100 w-[40%] md:w-full">
          Join Our Beauty Community
        </h2>
        <p className="text-gray-300 leading-none pb-5 w-[40%] md:w-full">
          Discover the secret to radiant skin with our expert-curated routines.
          Explore innovative formulations that combine science and nature for
          transformative results. Join thousands of beauty enthusiasts in our
          exclusive community.
        </p>
        <div className="mt-4">
          <FollowButton />
        </div>
      </div>

      <div className="md:w-3/4 absolute bottom-0 right-0 translate-x-[86px] translate-y-[35px]">
        <div className="h-full p-6 flex items-center justify-center">
          <img src={footerbottle} alt="bottles side by side" />
        </div>
      </div>
    </div>
  </div>
);

export default BeautyCard;
