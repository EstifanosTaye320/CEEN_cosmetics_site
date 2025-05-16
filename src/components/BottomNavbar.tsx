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
      <div className="flex flex-col items-center gap-8 md:hidden">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="CEEN Logo" className="h-24 w-auto" />
        </Link>

        <div className="flex flex-col items-center gap-4 text-lg font-medium">
          {pages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className={`
                 ${
                   location.pathname === page.path
                     ? "text-rose-600"
                     : "text-gray-800 hover:text-rose-600"
                 }
               `}
            >
              {page.label}
            </Link>
          ))}
        </div>

        <div className="flex gap-6 text-gray-600">
          {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
            <a key={index} href="#" className="hover:text-rose-600 transition">
              <Icon className="w-6 h-6" strokeWidth={1.5} />
            </a>
          ))}
        </div>

        <div className="text-gray-500 text-sm text-center">
          © 2025 CEEN. All rights reserved.
        </div>

        <div className="flex gap-6 text-gray-600 text-sm">
          <Link to="/terms" className="hover:text-rose-600">
            Terms of Service
          </Link>
          <Link to="/privacy" className="hover:text-rose-600">
            Privacy Policy
          </Link>
        </div>
      </div>

      <div className="hidden md:block w-full">
        <div className="flex justify-between gap-6 mb-6">
          <div className="flex flex-wrap gap-6 md:gap-8 justify-start text-sm font-medium">
            {pages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className={`
                    pb-1
                    ${
                      location.pathname === page.path
                        ? "text-rose-600 border-b-2 border-rose-600"
                        : "text-gray-500 hover:text-gray-700"
                    }
                  `}
              >
                {page.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-6 text-gray-600">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-rose-600 transition"
              >
                <Icon className="w-6 h-6" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex items-center justify-between gap-4 text-sm">
          <div className="text-gray-500">© 2025 CEEN. All rights reserved.</div>

          <div className="flex items-center gap-2">
            <Link to="/">
              <img src={logo} alt="CEEN Logo" className="h-20 w-auto" />
            </Link>
          </div>

          <div className="flex gap-6 text-gray-600">
            <Link to="/terms" className="hover:text-rose-600">
              Terms of Service
            </Link>
            <Link to="/privacy" className="hover:text-rose-600">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
