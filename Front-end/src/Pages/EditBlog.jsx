import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBlog } from "../Redux/BlogReducer/BlogSlice";
const EditBlog = () => {
  const  {id}  = useParams();
  /* const exitingBlog = blogs?.allBlogs?.filter((blog) => blog._id == id);
  const { title, description } = exitingBlog[0];

  const [btitle, setTitle] = useState(title);
  const [bdescription, setDescription] = useState(description); */
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
    console.log("update blog..", updatedBlog);
    dispatch(updateBlog({id,...updatedBlog}));
    setUpdatedBlog(initialState);
    navigate("/");
  };

  /*  /* create FormData  
  const formData = new FormData();
  formData.append("id", id);
  formData.append("title", btitle);
  formData.append("description", bdescription);
  /* Form Submit API Call 
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    dispatch(updateBlog(id,{btitle,bdescription})).then(() => navigate("/"));
  }; */

  return (
    <>
      <div className="flex flex-col m-3 p-3 bg-gray-500">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
        >
          <div className="flex flex-col gap-5 m-5 p-5">
            <div className=" mx-[25%]">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                name="title"
                className="p-3 m-3 rounded-xl "
                id="name"
                value={updatedBlog.title}
                onChange={newBlog}
              />
            </div>
            <div className="">
              <label htmlFor="description">description:</label>
              <textarea
                type="text"
                name="description"
                className="p-4 m-4 rounded-xl"
                id="description"
                rows="5"
                value={updatedBlog.description}
                onChange={newBlog}
              />
            </div>
            {/* <div className="mx-[34%] p-2 m-2">
              <input
                type="file"
                className="file"
                id="file-up"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div> */}
            <button
              type="submit"
              className="w-[200px] mx-[35%] rounded-3xl p-3 m-4 bg-blue-600"
            >
              Edit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditBlog;
