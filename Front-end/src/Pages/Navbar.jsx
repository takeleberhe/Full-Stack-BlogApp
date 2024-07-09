import { Link } from "react-router-dom";
const Navbar = ({ user,logout }) => {
  //const {user} =useSelector((state)=>state.user)
  
  return (
    <>
      <div className="flex flex-auto justify-around  w-full p-2 bg-black">
        <div className="">
          <h2 className="text-3xl text-start text-blue-800 from-neutral-900 font-bold">
            <Link to="/">TechBlog</Link>
          </h2>
        </div>
        <div>
          <ul className="flex justify-normal">
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
            </li>{" "}
            <li className="m-2 text-white">
              <Link to="/about">About</Link>
            </li>{" "}
            <li className="m-2 text-white">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-end">
          <p className="text-white p-2 m-2">{user?.user?.name}</p>
          {!user && (
            <button className=" text-white p-2 bg-indigo-700 hover:bg-green-700 rounded-full">
              <Link to="/login" className="p-2 text-white">
                Login
              </Link>
            </button>
          )}
          {user && (
            <button className=" text-white p-2 bg-slate-600
             hover:bg-green-700 rounded-full"
              onClick={()=>logout()}
             >
              <Link to="/logout" className="p-2 text-white">
                logout
              </Link>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
