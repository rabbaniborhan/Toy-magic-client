import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-black text-white">
      <div className="navbar w-4/5 mx-auto">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            daisyUI
          </Link>
        </div>
        <div className="navbar-center flex flex-row md:flex-row">
          <ul className=" md:menu md:menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li></li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
