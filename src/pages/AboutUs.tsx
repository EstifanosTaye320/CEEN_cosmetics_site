import background from "../assets/background1.svg";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ImageCard from "../components/ImageCard";
import ImageGrid from "../components/ImageGrid";
import Partners from "../components/Partners";

export default function AboutUs() {
  return (
    <section
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `url(${background}) no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      <Hero title="About Us" />

      <div className="container mx-auto pt-20 px-[60px] md:pt-[50px] relative z-10">
        <ImageGrid />
        <ImageCard />
        <Partners />
        <FAQSection />
      </div>

      <div></div>

      <Footer />
    </section>
  );
}
