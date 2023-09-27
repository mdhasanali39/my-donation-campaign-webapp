import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/Bi";
import { useState } from "react";

const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleMenuClicked = () => {
    setIsMenuClicked(!isMenuClicked);
  };
  return (
    <nav className="flex items-center gap-5">
      <ul
        className={`gap-6
       opacity-0 lg:opacity-100
       
        ${
          isMenuClicked
            ? "flex flex-col absolute top-[14%] right-[6.4%] opacity-100 bg-gray-900 text-white px-24 py-10 rounded-lg z-50"
            : "hidden"
        }
         lg:flex`}
      >
        <li className="text-lg">
          <NavLink
            to={`/`}
            className={({ isActive, isPending }) =>
              isActive
                ? "text-[#FF444A] font-bold underline"
                : isPending
                ? "pending"
                : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li className="text-lg">
          <NavLink
            to={`/donation`}
            className={({ isActive, isPending }) =>
              isActive
                ? "text-[#FF444A] font-bold underline"
                : isPending
                ? "pending"
                : ""
            }
          >
            Donation
          </NavLink>
        </li>
        <li className="text-lg">
          <NavLink
            to={`/statistics`}
            className={({ isActive, isPending }) =>
              isActive
                ? "text-[#FF444A] font-bold underline"
                : isPending
                ? "pending"
                : ""
            }
          >
            Statistics
          </NavLink>
        </li>
      </ul>
      {/* menu icon here  */}
      <span onClick={handleMenuClicked} className={`text-4xl lg:hidden`}>
        <BiMenu />
      </span>
    </nav>
  );
};

export default Navbar;
