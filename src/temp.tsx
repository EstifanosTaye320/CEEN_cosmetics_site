import React from "react";

// Header Component
const Header: React.FC<{ title: string; text: string }> = ({ title, text }) => {
  return (
    <div className="flex items-center justify-center h-[30vh] bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-2 text-lg">{text}</p>
      </div>
    </div>
  );
};

// ImageGrid Component
const ImageGrid: React.FC = () => {
  return (
    <div className="flex justify-around items-center h-[70vh] relative">
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Placeholder"
          className="mb-2"
        />
      </div>
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Placeholder"
          className="mb-2"
        />
      </div>
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Placeholder"
          className="mb-2"
        />
      </div>
    </div>
  );
};

// Button Component
const Button: React.FC<{ label: string }> = ({ label }) => {
  return (
    <button className="bg-[rgba(255,105,180,0.1)] border-none text-[#ff00ff] font-bold py-2 px-4 rounded-lg relative transition-colors duration-300 hover:bg-[rgba(255,20,147,0.2)] hover:text-black">
      {label}
      <span className="absolute top-1/2 right-2 transform -translate-y-1/2 text-lg">
        →
      </span>
    </button>
  );
};

// OverlayCard Component
const OverlayCard: React.FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-10">
      <h2 className="text-xl font-bold">Card Title</h2>
      <p className="mt-2">Some interesting content goes here.</p>
      <div className="mt-4">
        <Button label="Show Detail" />
      </div>
    </div>
  );
};

// Main Component
const MyComponent: React.FC = () => {
  return (
    <div>
      <Header
        title="Welcome to My App"
        text="This is a simple example using React and Tailwind CSS."
      />
      <ImageGrid />
      <OverlayCard />
    </div>
  );
};

export default MyComponent;
