import { NavLink } from "react-router-dom";
import { mobileNavigation } from "../constants/navigation";

const MobileNavigation = () => {
  return (
    <section className="lg:hidden h-14 bg-neutral-600 bg-opacity-40 fixed bottom-0 w-full  ">
      <div className="flex items-center justify-between h-full max-w-md mx-auto text-neutral-400">
        {mobileNavigation.map((nav, index) => {
          return (
            <NavLink
              to={nav.href}
              key={nav.id}
              className={({ isActive }) =>
                ` px-3 flex h-full items-center flex-col justify-center 
                ${isActive && "text-amber-500"} `
              }
            >
              <div className="text-2xl">{nav.icon}</div>
              <p className="text-sm">{nav.label}</p>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default MobileNavigation;
