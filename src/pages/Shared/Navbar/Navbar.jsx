import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };

  return (
    <div className=" bg-black text-white">
      <div className="navbar justify-center w-4/5 mx-auto">
        <div className="navbar-start">
          <Link to="/" className="btn italic text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text btn-ghost normal-case text-2xl font-bold logo">
          Toy Magic
          </Link>
        </div>
        <div className="navbar-center flex flex-col items-center justify-center md:flex-row gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-pink-700 ml-4" : " from-indigo-600 ml-4"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/alltoys"
            className={({ isActive }) =>
              isActive ? "text-pink-700 ml-4" : " from-indigo-600 ml-4"
            }
          >
            All Toys
          </NavLink>
          {user && (
            <div className="flex flex-col items-center justify-center md:flex-row gap-4">
              <NavLink
                to="/mytoys"
                className={({ isActive }) =>
                  isActive ? "text-pink-700 ml-4" : " from-indigo-600 ml-4"
                }
              >
                My Toys
              </NavLink>
              <NavLink
                to="/addtoys"
                className={({ isActive }) =>
                  isActive ? "text-pink-700 ml-4" : " from-indigo-600 ml-4"
                }
              >
                Add toy
              </NavLink>
            </div>
          )}
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? "text-pink-700 ml-4" : " from-indigo-600 ml-4"
            }
          >
            Blogs
          </NavLink>
          {!user && (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-pink-700 ml-4" : " from-indigo-600 ml-4"
              }
            >
              Login
            </NavLink>
          )}
        </div>
        <div className="navbar-end">
          {user && (
            <div className="flex items-center gap-4">
              <button className="btn btn-primary" onClick={handleLogout}>
                LogOut
              </button>
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
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
