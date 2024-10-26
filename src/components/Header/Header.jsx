import logo from "../../assets/logo.png";
import PropTypes from 'prop-types';

const Header = ({coins}) => {
  return (
    <div className="container mx-auto sticky top-0 z-30 bg-white">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Team</a>
              </li>
              <li>
                <a>Schedule</a>
              </li>
            </ul>
          </div>
          <img className="btn btn-ghost text-xl" src={logo}></img>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Team</a>
              </li>
              <li>
                <a>Schedule</a>
              </li>
            </ul>
          </div>
          <a className="p-4 font-bold border rounded-lg flex items-center gap-2">
            <span>{coins}</span>
            coin
            <img
              src="https://static.vecteezy.com/system/resources/previews/009/383/442/non_2x/bonus-icon-clipart-design-illustration-free-png.png"
              alt=""
              className="w-8"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

Header.propTypes={
   coins: PropTypes.number
}

export default Header;
