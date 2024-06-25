import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="w-full p-2 bg-black">
        <nav>
          <ul
            className=" flex justify-center items-centertext-1xl
             text-white "
          >
            <li className="m-2 text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="m-2 text-white">
              <Link to="/addblog">AddBlog</Link>
            </li>
            <li className="m-2 text-white">
              <Link to="/signup">Sign Up</Link>
            </li>
            <li className="m-2 text-white">
              <Link to="/login">Login</Link>
            </li>
            <button type="btn" className="m-2 p-1 rounded-md bg-gray-500">
              Logout
            </button>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
