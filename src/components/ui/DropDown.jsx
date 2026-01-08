import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Dropdown = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Find active item based on current route
  const activeItem = items.find(item =>
    location.pathname === item.link
  );

  const displayTitle = activeItem ? activeItem.label : title;

  return (
    <div
      className="relative w-full md:w-auto cursor-pointer"
      onMouseEnter={() => window.innerWidth >= 768 && setOpen(true)}
      onMouseLeave={() => window.innerWidth >= 768 && setOpen(false)}
    >
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center md:justify-start gap-1  font-medium text-white w-full md:w-auto"
      >
        {displayTitle}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""
            }`}
        />
      </button>

      {/* Dropdown menu */}
      <div
        className={`
          md:absolute md:top-full md:left-0 md:mt-3 md:w-44 w-full mt-2 rounded-xl bg-black shadow-md overflow-hidden transition-all duration-300 ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"} `}
      >
        <div className="p-2 space-y-1">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              onClick={() => {
                // setSelected(item.label)
                setOpen(false)
              }}
              className="block px-4 py-2 rounded-md text-sm text-white/80 hover:bg-title hover:text-black transition"
            >
              <p> {item.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
