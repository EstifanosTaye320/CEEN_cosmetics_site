import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

const NavigationBar = () => {
  const location = useLocation();
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  const pages = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Products" },
    { path: "/contact", label: "Contact" },
  ];

  const updateActiveLine = (target: HTMLElement) => {
    if (!navRef.current) return;

    const containerLeft = navRef.current.getBoundingClientRect().left;
    const targetLeft = target.getBoundingClientRect().left;
    const leftPosition = targetLeft - containerLeft;

    setLineStyle({
      left: leftPosition,
      width: target.offsetWidth,
    });
  };

  useEffect(() => {
    const activeLink = navRef.current?.querySelector(
      `ul a[href="${location.pathname}"]`
    );
    if (activeLink) {
      updateActiveLine(activeLink as HTMLElement);
    }
  }, [location.pathname]);

  return (
    <nav
      ref={navRef}
      className="flex justify-between items-center bg-white p-3 px-20 shadow-md relative"
    >
      <Link to="/" className="text-2xl font-bold text-gray-800">
        <img src={logo} alt="CEEN Logo" className="h-14 w-auto" />
      </Link>

      <ul className="flex list-none m-0 p-0 space-x-20 font-semibold">
        {pages.map((page) => (
          <li key={page.path}>
            <Link
              to={page.path}
              className={`text-base pb-1 transition-colors duration-300 ${
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

      {/* Active line indicator */}
      <div
        className="absolute bottom-0 h-0.5 bg-rose-600 transition-all duration-300"
        style={{
          left: `${lineStyle.left}px`,
          width: `${lineStyle.width}px`,
        }}
      />
    </nav>
  );
};

export default NavigationBar;
