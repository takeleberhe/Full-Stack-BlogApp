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
          <div className="flex flex-col gap-5 m-5 p-5 w-[600px]">
            <div className=" mx-[15%]">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                name="title"
                className="p-3 m-2 rounded-xl w-[400px]"
                id="name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="row">
              <label htmlFor="description" className="">description:</label>
              <textarea
                type="text"
                name="description"
                className="p-4 m-4 rounded-xl w-[400px]"
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
              className="w-[200px] mx-[30%] rounded-3xl p-3 m-4 bg-yellow-600"
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
