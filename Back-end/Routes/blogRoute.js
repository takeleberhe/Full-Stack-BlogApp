const express = require("express");
const {
  getAllBlogs,
  addBlog,
  updateBlog,
  deleteBlog,
  getBlogById,
  getBlogByUserId,
} = require("../Controller/blog-controller");
const { uploadImage } = require("./../Middlewares/imageUploadMdw");
const {
  verifyToken,
  isAuth,
  isAdmin,
} = require("../Middlewares/authMiddleware");

/* create blogRouter from express */
blogRouter = express.Router();
/* API routes  */
blogRouter.get("/", getAllBlogs);
blogRouter.post(
  "/addblog",
  uploadImage.single("image"),
  verifyToken,
  isAuth,
  addBlog
);
blogRouter.put("/update/:id", verifyToken, isAuth, updateBlog);
blogRouter.get("/:id", verifyToken, isAuth, getBlogById);
blogRouter.get("/delete/:id", verifyToken, isAuth, deleteBlog);
blogRouter.get("/user/:id", verifyToken, isAuth, getBlogByUserId);

module.exports = blogRouter;
