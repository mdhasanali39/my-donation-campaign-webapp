import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-6">
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
    </nav>
  );
};

export default Navbar;
