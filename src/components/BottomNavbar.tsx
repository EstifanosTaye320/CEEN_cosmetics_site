import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "../assets/logo.svg";

const BottomNavbar = () => {
  const location = useLocation();
  const pages = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Products" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
        <div className="flex flex-wrap gap-6 md:gap-8">
          {pages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className={`text-sm font-medium pb-1 ${
                location.pathname === page.path
                  ? "text-rose-600 border-b-2 border-rose-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {page.label}
            </Link>
          ))}
        </div>

        <div className="flex gap-6">
          {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-600 hover:text-rose-600 transition"
            >
              <Icon className="w-5 h-5" strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="text-gray-500 order-1 md:order-none">
          © 2025 CEEN. All rights reserved.
        </div>

        <div className="order-3 md:order-none flex items-center gap-2">
          <Link to="/">
            <img src={logo} alt="CEEN Logo" className="h-[100px] w-auto" />
          </Link>
        </div>

        <div className="flex gap-6 order-2 md:order-none">
          <Link to="/terms" className="text-gray-600 hover:text-rose-600">
            Terms of Service
          </Link>
          <Link to="/privacy" className="text-gray-600 hover:text-rose-600">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
