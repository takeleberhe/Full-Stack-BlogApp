import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="flex flex-auto justify-around  w-full p-2 bg-black">
        <div>
          <ul
            className="flex justify-normal"
          >
            <li className="m-2 text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="m-2 text-white">
              <Link to="/addblog">AddBlog</Link>
            </li>
            <li className="m-2 text-white">
              <Link to="/services">Services</Link>
            </li>
            <li className="m-2 text-white">
              <Link to="/news">News</Link>
            </li>  <li className="m-2 text-white">
              <Link to="/about">About</Link>
            </li>  <li className="m-2 text-white">
              <Link to="/contact">Contact</Link>
            </li>
            
          </ul>
        </div>
        <div className="flex flex-row justify-end">
           <button className=" text-white p-2 bg-slate-600 hover:bg-green-700 rounded-full">
              <Link to="/login" className="p-2 text-white">Login</Link>
            </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
