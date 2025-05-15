import background from "../assets/background1.svg";
import ContactMain from "../components/ContactMain";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Contact() {
  return (
    <section
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `url(${background}) no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      <Hero title="Contact Us" />

      <div className="container mx-auto pt-20 px-[60px] md:pt-[50px] relative z-10">
        <ContactMain />
      </div>

      <Footer />
    </section>
  );
}
