import followUs from "../assets/follow_us.svg";

const FollowButton = () => (
  <button
    className="
    relative px-8 py-4 
    bg-white
    text-pink-400 font-bold text-lg
    rounded-full
    shadow-lg hover:shadow-xl
    transform transition-all duration-300
    hover:bg-pink-50
    group
  "
  >
    <span className="relative z-10 flex items-center gap-2">
      Follow Us
      <span>
        <img src={followUs} alt="Share" />
      </span>
    </span>

    <div
      className="
      absolute inset-0
      rounded-full
      bg-white/10
      opacity-0 group-hover:opacity-100
      transition-opacity duration-300
    "
    />
  </button>
);

export default FollowButton;
