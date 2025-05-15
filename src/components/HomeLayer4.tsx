import ProductInfo from "./ProducInfo";

const HomeLayer4: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <ProductInfo
        header="How to use?"
        listItems={[
          "Cleanse your skin thoroughly.",
          "Apply [Product Name] evenly to your face and neck.",
          "Use morning and night for best results.",
        ]}
        buttonText="Watch Video"
      />
    </div>
  );
};

export default HomeLayer4;
