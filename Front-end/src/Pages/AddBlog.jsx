import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBlog } from "../Redux/BlogReducer/BlogSlice";
import { useDispatch } from "react-redux";

const AddBlog = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  /* create FormData  */
  const formData = new FormData();
  formData.append("image", image);
  formData.append("title", title);
  formData.append("description", description);
  /* Form Submit API Call */
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addBlog(formData)).then(() => navigate("/"));
  };

  return (
    <>
      <div className="md:flex flex-col m-3 p-3 bg-transparent">
        <form
          onSubmit={handleSubmit}
          className="md:flex flex-col justify-center items-center bg-indigo-500"
        >
          <div className="w-80 md:flex flex-col gap-5 m-5 p-5">
            <div className="md:mx-[8%] w-[600px]">
              <label htmlFor="title" className="px-[-40px]">
                Title:
              </label>
              <input
                type="text"
                name="title"
                className="p-2 w-80 mx-[-40px]md:p-2 rounded-md outline-none"
                id="name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="">
              <label htmlFor="description" className="px-[-10px]">
                description:{" "}
              </label>
              <textarea
                type="text"
                name="description"
                className="w-80 h-60 md:p-5 m-4 rounded-md outline-none"
                id="description"
                rows="5"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mx-[25%] p-2 m-2">
              <input
                type="file"
                className="file"
                id="file-up"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <button
              type="submit"
              className="w-[200px] mx-[30%] rounded-3xl p-3 m-4 bg-yellow-600 hover:bg-green-500"
            >
              AddBlog
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBlog;
