import background from "../assets/background2.svg";

const ImageCard = () => {
  return (
    <div className="relative w-full h-80">
      <div className="absolute w-screen -left-14 h-80">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={background}
            alt="Background Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-10 left-10 bg-gradient-to-r from-pink-400 to-white bg-opacity-70 rounded-lg p-6 shadow-lg z-10 max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">15+ Years of Experience</h2>
            <i className="fas fa-arrow-right text-2xl text-pink-500"></i>
          </div>
          <p className="text-gray-500">
            amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies
            tincidunt, nisl nisl aliquam nisl, eget aliqua
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
