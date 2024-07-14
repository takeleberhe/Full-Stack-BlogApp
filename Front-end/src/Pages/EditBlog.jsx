import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBlog } from "../Redux/BlogReducer/BlogSlice";
const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialState = {
    title: "",
    description: "",
  };
  const blogs = useSelector((state) => state.blog.data);
  const [updatedBlog, setUpdatedBlog] = useState(initialState);
  useEffect(() => {
    //retrieving single blog from blog list
    if (id) {
      const singleBlog = blogs?.allBlogs?.find((blog) => blog.id === id);
      console.log(singleBlog);
      setUpdatedBlog({ ...singleBlog });
    }
  }, []);

  //updating state as user changes input field data
  const newBlog = (e) => {
    setUpdatedBlog({ ...updatedBlog, [e.target.name]: e.target.value });
  };
  /* handle update function */
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBlog({ id, ...updatedBlog }));
    setUpdatedBlog(initialState);
    navigate("/");
  };
  return (
    <>
      <div className="flex flex-col m-3 p-3 bg-transparent">
        <form
          onSubmit={handleSubmit}
          className="md:flex flex-col justify-center items-center bg-indigo-500"
        >
          <div className="w-80 md:flex flex-col gap-5 m-5 p-5">
            <div className="md:mx-[8%]">
              <label htmlFor="title" className="px-[-30px]">
                Title:{" "}
              </label>
              <input
                type="text"
                name="title"
                className="p-2 w-80 md:p-3 m-3 rounded-md outline-none "
                id="name"
                value={updatedBlog.title}
                onChange={newBlog}
              />
            </div>
            <div className="">
              <label htmlFor="description" className="ml-[-10px]">
                description:{" "}
              </label>
              <textarea
                type="text"
                name="description"
                className="w-80 h-60 md:p-3 m-3 rounded-xl outline-none"
                id="description"
                rows="5"
                value={updatedBlog.description}
                onChange={newBlog}
              />
            </div>
            <button
              type="submit"
              className="w-[200px] mx-[25%] rounded-3xl p-3 m-4 bg-yellow-600 hover:bg-green-500"
            >
              EditBlog
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditBlog;
