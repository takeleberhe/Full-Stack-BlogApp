import { useState } from "react";
import { AiOutlineRead } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
  
const Navbar = ({ user, logout }) => {
      console.log(user);
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ADBLOG", link: "/addblog" },
    { name: "SERVICE", link: "/service" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full top-0 left-0 sticky z-[20]">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <Link to="/">
            <AiOutlineRead className="w-7 h-7 text-blue-600" />
          </Link>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <IoClose /> : <GiHamburgerMenu />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <div key={index}>
              <li className="md:ml-8 md:my-0 my-7 font-semibold">
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-blue-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            </div>
          ))}
          <div>
            {!user && (
              <button className=" text-white p-2 ml-[-15px] md:ml-[15px] bg-indigo-700 hover:bg-green-700 rounded-full">
                <Link to="/login" className="p-2 text-white">
                  Login
                </Link>
              </button>
            )}
            {user && (
              <button
                className=" text-white p-2 ml-[-15px] md:ml-[15px] bg-indigo-700
             hover:bg-green-700 rounded-full"
                onClick={() => logout()}
              >
                <Link to="/logout" className="p-2 text-white">
                  Logout
                </Link>
              </button>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
