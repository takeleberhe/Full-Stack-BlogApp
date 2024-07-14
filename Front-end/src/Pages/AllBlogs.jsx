import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../Redux/BlogReducer/BlogSlice";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const AllBlogs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.blog.data);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <>
      {data?.allBlogs?.map((blog) => (
        <>
          <div
            key={blog._id}
            className="grid grid-cols-1 md:grid-cols-2 rounded-lg shadow-md relative mt-35"
          >
            <div className="rounded-md p-3 m-3 cursor-pointer">
              <img
                src={blog.image}
                className="rounded-2xl object-cover w-[400px] h-[250px] cursor-pointer"
                onClick={() => navigate(`/blog-detail/${blog._id}`)}
              />
            </div>
            <div className=" m-3 p-3 overflow-hidden cursor-pointer">
              <h2 className="text-2xl font-bold mt-3">{blog.title}</h2>
              <p
                className="overflow-y-auto overflow-hidden line-clamp-10
             text-gray-400 mt-3"
              >
                {blog.description}
              </p>
            </div>
            <button
              className="text-blue-600 absolute top-0 right-5"
              onClick={() => navigate(`/editblog/${blog._id}`)}
            >
             <CiEdit className="h-5 w-5"/>
            </button>
            <button
              className="text-red-700 absolute top-0 right-0"
              onClick={() => navigate(`deleteblog/${blog._id}`)}
            >
             <MdDelete className="h-5 w-5" />
            </button>
          </div>
        </>
      ))}
    </>
  );
};
export default AllBlogs;
