import lady1 from "../assets/lady1.svg";
import lady2 from "../assets/lady2.svg";

const ImageGrid = () => {
  return (
    <div className="container mx-auto py-8">
      {/* First Flex Container */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex items-center justify-center">
          <img className="w-[400px] h-auto" src={lady1} alt="Image 1" />
        </div>
        <div className="flex-1">
          <h3 className="text-4xl font-bold mb-4">History</h3>
          <p className="text-gray-400 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget
            aliquam nisl nisl eget nisl.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed euismod, nisl eget ultricies tincidunt, nisl
            nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget
            ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl
            eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
            eget aliquam nisl nisl eget nisl.{" "}
          </p>
        </div>
      </div>

      {/* Second Flex Container */}
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <div className="flex-1">
          <h3 className="text-4xl font-bold mb-4">Our Principles</h3>
          <p className="text-gray-400 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget
            aliquam nisl nisl eget nisl.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed euismod, nisl eget ultricies tincidunt, nisl
            nisl aliquam nisl, eget aliquam nisl nisl eget nisl.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget
            ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl
            eget nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
            eget aliquam nisl nisl eget nisl.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img className="w-[400px] h-auto" src={lady2} alt="Image 2" />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
