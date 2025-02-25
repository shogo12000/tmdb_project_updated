import { NavLink, useNavigate, Link } from "react-router-dom";
import logo from "../assets/logosvg.svg";
import profile from "../assets/profile.png";
import { IoSearchOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { navigation } from "../constants/navigation";

 const Header = () => { 
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchInput}`);
  };

  useEffect(() => {
    // navigate(`/search?q=${searchInput}`)
  }, [searchInput]);

  return (
    <header className="fixed top-0 left-0 right-0 w-full h-16 bg-neutral-600/98 z-40">
      <div className="container px-3 flex justify-between items-center h-full mx-auto ">
        <Link to={"/"}>
          <img src={logo} alt="logo" width={50} />
        </Link>
        <nav className="hidden ml-3.5 lg:flex items-center gap-4" key={1}>
          {navigation.map((nav, index) => {
            return (
              <div key={nav.id}>
                <NavLink
                  to={nav.href}
                  className={({ isActive }) =>
                    isActive
                      ? " text-amber-500 font-bold text-lg"
                      : "text-white  text-lg hover:text-neutral-300 duration-300 ease-in"
                  }
                >
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-5 *:h-full ml-auto">
          <form className="items-center gap-4 hidden md:flex " onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearchInput(e.target.value)}
              className="bg-transparent px-4 p-1 rounded-md outline-none border-1 border-neutral-500  hidden md:block"
              value={searchInput}
            />
            <button type="submit" className="text-2xl text-white">
              <IoSearchOutline />
            </button>
          </form>

          <div className="flex items-center h-full ">
            <img
              src={profile}
              alt=""
              className="w-10 h-10 cursor-pointer active:scale-75 transition-all"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
