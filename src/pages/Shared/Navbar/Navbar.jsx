import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";
import img from "../../../assets/toyeLogo.png"

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };

  return (
    <div className=" bg-pink-600 text-white font-semibold">
      <div className="navbar  justify-between w-11/12  mx-10">
        <div className=" ml-14">
          <Link to="/" className="w-[90px]">
          <img src={img} alt="" />
          </Link>
        </div>
        <div className="  flex flex-col items-center justify-center md:flex-row gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "py-2 px-3 bg-indigo-400 hover:bg-indigo-500 transition-all duration-300 rounded-md ml-4" : " py-2 px-3  hover:bg-indigo-400 transition-all duration-500 rounded-md ml-4"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/alltoys"
            className={({ isActive }) =>
              isActive ? "py-2 px-3 bg-indigo-400 hover:bg-indigo-500 transition-all duration-300 rounded-md ml-4" : "py-2 px-3  hover:bg-indigo-400 transition-all duration-500 rounded-md ml-4"
            }
          >
            All Toys
          </NavLink>
          {user && (
            <div className="flex flex-col items-center justify-center md:flex-row gap-4">
              <NavLink
                to="/mytoys"
                className={({ isActive }) =>
                  isActive ? "py-2 px-3 bg-indigo-400 hover:bg-indigo-500 transition-all duration-300 rounded-md ml-4" : "py-2 px-3  hover:bg-indigo-400 transition-all duration-500 rounded-md ml-4"
                }
              >
                My Toys
              </NavLink>
              <NavLink
                to="/addtoys"
                className={({ isActive }) =>
                  isActive ? "py-2 px-3 bg-indigo-400 hover:bg-indigo-500 transition-all duration-300 rounded-md ml-4" : "py-2 px-3  hover:bg-indigo-400 transition-all duration-500 rounded-md ml-4"
                }
              >
                Add toy
              </NavLink>
            </div>
          )}
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? "py-2 px-3 bg-indigo-400 hover:bg-indigo-500 transition-all duration-300 rounded-md ml-4" : "py-2 px-3  hover:bg-indigo-400 transition-all duration-500 rounded-md ml-4"
            }
          >
            Blogs
          </NavLink>
          {!user && (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "py-2 px-3 bg-indigo-400 hover:bg-indigo-500 transition-all duration-300 rounded-md ml-4" : "py-2 px-3   hover:bg-indigo-400 transition-all duration-500 rounded-md ml-4"
              }
            >
              Login
            </NavLink>
          )}
        </div>
        <div className="">
          {user && (
            <div className="flex items-center gap-4">
              <button className=" py-2 px-3 rounded-md bg-indigo-400 hover:bg-indigo-500 transition-all duration-300 outline-none border-none" onClick={handleLogout}>
                LogOut
              </button>
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-white  ">
                  <img src={user?.photoURL} title={user?.displayName} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
