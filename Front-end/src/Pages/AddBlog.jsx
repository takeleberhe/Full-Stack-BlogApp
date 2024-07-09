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
      <div className="flex flex-col m-3 p-3 bg-transparent">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center bg-indigo-500"
        >
          <div className="flex flex-col gap-5 m-5 p-5 w-[700px]">
            <div className=" mx-[8%] w-[600px]">
              <label htmlFor="title">Title:
              <input
                type="text"
                name="title"
                className="p-3 m-2 rounded-xl w-[400px] outline-none"
                id="name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              </label>
            </div>
            <div className="">
              <label htmlFor="description" className="">description:
              <textarea
                type="text"
                name="description"
                className="p-5 m-4 rounded-xl w-[400px] outline-none"
                id="description"
                rows="5"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              </label>
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
