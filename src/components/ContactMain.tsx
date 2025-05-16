import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import map from "../assets/map.svg";

const ContactMain = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Column */}
      <div>
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">
            Get in <span className="text-pink-400">Touch</span>
          </h2>
          <p className="text-gray-400">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
        </div>
        <ContactForm />
        <div className="grid grid-cols-3 gap-4 mt-8">
          <ContactInfo
            icon={<FaPhoneAlt className="text-pink-400 text-2xl" />}
            title="PHONE"
            data="03 5432 1234"
          />
          <ContactInfo
            icon={<FaMapMarkerAlt className="text-pink-400 text-2xl" />}
            title="Adress"
            data="Germany"
          />
          <ContactInfo
            icon={<FaEnvelope className="text-pink-400 text-2xl" />}
            title="EMAIL"
            data="info@ceen.com"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="relative">
        <div className="absolute top-0 right-0 bg-pink-400 rounded-tr-3xl h-full w-1/2"></div>
        <div className="p-8">
          <img
            src={map}
            alt="Map"
            className="relative z-10 w-auto h-[600px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
