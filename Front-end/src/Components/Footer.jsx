import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className=" bg-slate-700 overflow-x-auto">
        <div className=" grid grid-cols-2 md:grid-cols-3 col-span-3">
          <div className="flex flex-col">
            <h2 className="mt-3 text-2xl text-black-900 hover:text-blue-700 cursor-pointer">About</h2>
            <ul className="w-[400px] h-[200px] text-white mt-2 p-2">
              <li  className="hover:text-red-900">
                <Link to="/">Home</Link>
              </li>
              <li  className="hover:text-red-900">
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
              <li  className="hover:text-red-900">
                <Link to="/news">News</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="mt-3 text-2xl text-black-900 hover:text-blue-700
             cursor-pointer">Services</h2>
            <ul className="w-[400px] h-[200px] text-white mt-2 p-2">
              <li  className="hover:text-red-900">
                <Link to="/">Software Developemnt</Link>
              </li>
              <li  className="hover:text-red-900">
                <Link to="/about">UI/UX</Link>
              </li>
              <li  className="hover:text-red-900">
                <Link to="contact">Testing</Link>
              </li>
              <li  className="hover:text-red-900">
                <Link to="/news">DevOps</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="flex mt-3 text-2xl text-black-900 hover:text-blue-700 
            cursor-pointer">Social Media</h2>
            <ul className="w-[400px] h-[200px] text-white mt-2 p-2">
              <li className="hover:text-red-900">
                <Link to="/">Facebook</Link>
              </li>
              <li  className="hover:text-red-900">
                <Link to="/about">LinkedIn</Link>
              </li>
              <li  className="hover:text-red-900">
                <Link to="contact">Youtube</Link>
              </li>
              <li  className="hover:text-red-900">
                <Link to="/news">X(twitter)</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
