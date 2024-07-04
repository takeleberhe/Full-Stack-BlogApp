import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AddBlog from "../Pages/AddBlog";
import Blog from "../Pages/Blog";
import BlogDetail from "../Pages/BlogDetail";
import EditBlog from "../Pages/EditBlog";
import DeleteBlog from "../Pages/DeleteBlog";

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/blog-detail/:id" element={<BlogDetail />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/addblog" element={<AddBlog />} />
      <Route path="/editblog/:id" element={<EditBlog/>} />
      <Route path="/deleteblog/:id" element={<DeleteBlog />} />
    </Routes>
  );
};

export default PageRouter;
