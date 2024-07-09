import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className=" bg-black overflow-x-auto">
      <div className="pt-5">
                <h2 className="text-center text-white text-2xl ">Join us</h2>
              <div className="pt-5 mt-5">
                 <input className="width-[500px] p-3 outline-none ml-[40%]" type="text" placeholder="enter your email"/>
                  <button className="w-[80px] p-3 text-white bg-indigo-500 hover:bg-green-500">Subscribe</button>
              </div>
          </div>
        <div className=" grid grid-cols-2 md:grid-cols-3 col-span-3 lg:grid-cols-4">
          <div className="flex flex-col">
            <h2 className="mt-3 text-2xl text-black-900 hover:text-blue-700 cursor-pointer text-white">
              About
            </h2>
            <ul className="w-[400px] h-[200px] text-white mt-2 p-2">
              <li className="hover:text-green-900">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-green-900">
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
              <li className="hover:text-green-900">
                <Link to="/news">News</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="mt-3 text-2xl text-black-900 text-white  hover:text-blue-700 cursor-pointer ">
              Conceltancy
            </h2>
            <ul className="w-[400px] h-[200px] text-white mt-2 p-2">
              <li className="hover:text-green-900">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-green-900">
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
              <li className="hover:text-green-900">
                <Link to="/news">News</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2
              className="mt-3 text-2xl text-black-900 text-white  hover:text-blue-700
             cursor-pointer"
            >
              Services
            </h2>
            <ul className="w-[400px] h-[200px] text-white mt-2 p-2">
              <li className="hover:text-green-900">
                <Link to="/">Software Developemnt</Link>
              </li>
              <li className="hover:text-green-900">
                <Link to="/about">UI/UX</Link>
              </li>
              <li className="hover:text-green-900">
                <Link to="contact">Testing</Link>
              </li>
              <li className="hover:text-green-900">
                <Link to="/news">DevOps</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2
              className="flex mt-3 text-2xl text-black-900 text-white hover:text-blue-700 
            cursor-pointer"
            >
              Social Media
            </h2>
            <ul className="w-[400px] h-[200px] text-white mt-2 p-2">
              <li className="hover:text-green-900">
                <Link to="/">Facebook</Link>
              </li>
              <li className="hover:text-green-900">
                <Link to="/about">LinkedIn</Link>
              </li>
              <li className="hover:text-green-900">
                <Link to="contact">Youtube</Link>
              </li>
              <li className="hover:text-green-900">
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
