import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Menu, X } from "lucide-react";

const NavigationBar = () => {
  const location = useLocation();
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const desktopNavRef = useRef<HTMLUListElement>(null);

  const pages = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Products" },
    { path: "/contact", label: "Contact" },
  ];

  const updateActiveLine = (target: HTMLElement) => {
    if (!desktopNavRef.current) return;

    const containerLeft = desktopNavRef.current.getBoundingClientRect().left;
    const targetLeft = target.getBoundingClientRect().left;
    const leftPosition = targetLeft - containerLeft;

    setLineStyle({
      left: leftPosition,
      width: target.offsetWidth,
    });
  };

  useEffect(() => {
    if (window.innerWidth >= 768 && desktopNavRef.current) {
      const activeLink = desktopNavRef.current.querySelector(
        `a[href="${location.pathname}"]`
      );
      if (activeLink) {
        updateActiveLine(activeLink as HTMLElement);
      }
    } else {
      setLineStyle({ left: 0, width: 0 });
    }

    const handleResize = () => {
      if (window.innerWidth >= 768 && desktopNavRef.current) {
        const activeLink = desktopNavRef.current.querySelector(
          `a[href="${location.pathname}"]`
        );
        if (activeLink) {
          updateActiveLine(activeLink as HTMLElement);
        } else {
          setLineStyle({ left: 0, width: 0 });
        }
      } else {
        setLineStyle({ left: 0, width: 0 });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className="flex justify-between items-center bg-white p-3 md:px-20 shadow-md relative z-50"
    >
      <Link to="/" className="text-2xl font-bold text-gray-800 z-50">
        <img src={logo} alt="CEEN Logo" className="h-14 w-auto" />
      </Link>

      <ul
        ref={desktopNavRef}
        className="hidden md:flex list-none m-0 p-0 space-x-10 lg:space-x-20 font-semibold"
      >
        {pages.map((page) => (
          <li key={page.path}>
            <Link
              to={page.path}
              className={`text-base pb-1 transition-colors duration-300 relative ${
                location.pathname === page.path
                  ? "text-rose-600"
                  : "text-gray-800 hover:text-rose-600"
              }`}
            >
              {page.label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="md:hidden p-2 focus:outline-none z-50"
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMobileMenuOpen ? (
          <X className="w-8 h-8 text-gray-800" />
        ) : (
          <Menu className="w-8 h-8 text-gray-800" />
        )}
      </button>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-40 py-4">
          <ul className="flex flex-col items-center list-none m-0 p-0 space-y-4 font-semibold">
            {pages.map((page) => (
              <li key={page.path}>
                <Link
                  to={page.path}
                  className={`text-lg py-2 px-4 w-full text-center ${
                    location.pathname === page.path
                      ? "text-rose-600"
                      : "text-gray-800 hover:text-rose-600"
                  }`}
                  onClick={handleMobileLinkClick}
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div
        className={`absolute bottom-0 h-0.5 bg-rose-600 transition-all duration-300 hidden md:block`}
        style={{
          left: `${lineStyle.left}px`,
          width: `${lineStyle.width}px`,
        }}
      />
    </nav>
  );
};

export default NavigationBar;
