import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AddBlog from "../Pages/AddBlog";
import Blog from "../Pages/Blog";
import BlogDetail from "../Pages/BlogDetail";

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/blog-detail/:id" element={<BlogDetail />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/addblog" element={<AddBlog />} />
    </Routes>
  );
};

export default PageRouter;
