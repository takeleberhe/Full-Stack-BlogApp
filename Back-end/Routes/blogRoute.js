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

/* create blogRouter from express */
blogRouter = express.Router();
/* API routes  */
blogRouter.get("/", getAllBlogs);
blogRouter.post("/addblog", uploadImage.single("image"), addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getBlogById);
blogRouter.get("/delete/:id", deleteBlog);
blogRouter.get("/user/:id", getBlogByUserId);

module.exports = blogRouter;
