import background from "../assets/background1.svg";
import Footer from "../components/Footer";
import BottleDisplay1 from "../components/BottleDisplay1";
import CustomButton from "../components/CustomButton";
import HorizontalScroll from "../components/HorizontalScroll";
import HomeLayer2 from "../components/HomeLayer2";
import HomeLayer3 from "../components/HomeLayer3";
import HomeLayer4 from "../components/HomeLayer4";
import HomeLayer5 from "../components/HomeLayer5";

const HomePage = () => {
  return (
    <section
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `url(${background}) no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      <div className="grid md:grid-cols-2 gap-12 items-center pt-20 px-[60px]">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight pb-7">
            Natural Beauty, Perfected for You
          </h1>
          <p className="text-lg md:leading-none text-gray-400 md:text-lg font-normal ">
            Experience the glow of naturally radiant, healthy skin with CEEN
            products Our ingredients rich in antioxidants and deeply nourishing.
            Paired with this formula delivers proven results.
          </p>
          <CustomButton text="Explore" />
        </div>

        <div className="relative group left-2">
          <BottleDisplay1 />
        </div>
      </div>

      <div className="container pt-20 md:pt-[50px] relative z-10">
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

        <HomeLayer2 />
        <HomeLayer3 />
        <HomeLayer4 />
        <HomeLayer5 />
      </div>

      <Footer />
    </section>
  );
};

export default HomePage;
