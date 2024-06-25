import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../Redux/BlogReducer/BlogSlice";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.blog.data);
  console.log(data);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <>
      {data?.allBlogs?.map((blog) => (
        <div
          key={blog._id}
          className="grid grid-cols-1 md:grid-cols-2 px-8 lg:grid-col-3px-32 rounded-lg shadow-sm"
          onClick={() => navigate(`/blog-detail/${blog._id}`)}
        >
          <div className="rounded-md p-5 m-5 cursor-pointer">
            <img
              src={blog.image}
              className="rounded-2xl object-cover w-[400px] h-[250px] cursor-pointer"
            />
          </div>
          <div className=" m-3 p-5 overflow-hidden cursor-pointer">
            <h2 className="text-2xl font-bold mt-3">{blog.title}</h2>
            <p
              className="overflow-y-auto overflow-hidden line-clamp-4
             text-gray-400 mt-5"
            >
              {blog.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
export default Blog;
