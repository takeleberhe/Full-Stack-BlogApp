import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteBlog } from "../Redux/BlogReducer/BlogSlice";

const DeleteBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch=useDispatch();
      //delete blog
  const handleDeleteBlog = async () => {
       dispatch(deleteBlog({id})).then(()=>navigate('/'))
  };
  handleDeleteBlog();
};
export default DeleteBlog;
