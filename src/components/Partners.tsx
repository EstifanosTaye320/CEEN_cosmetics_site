import HorizontalScroll from "./HorizontalScroll";

const Partners = () => {
  return (
    <div className="pt-6 relative">
      <div className="flex justify-center items-center">
        <h2 className="text-4xl">Our Partners</h2>
      </div>
      <div className="relative h-[110px] -left-14">
        <HorizontalScroll
          items={[
            "Amplitude",
            "Invoice2go",
            "XPENG",
            "veroxfloor",
            "RPUBLICA",
            "Stripe",
            "Cloudflare",
            "Amplitude",
            "Invoice2go",
            "XPENG",
            "veroxfloor",
            "RPUBLICA",
            "Stripe",
            "Cloudflare",
          ]}
        />
      </div>
      <div className="flex justify-center items-center z-100">
        <p className="text-gray-600 text-xl">
          CEER is used by over 100,000+ clients across the globe
        </p>
      </div>
    </div>
  );
};

export default Partners;
