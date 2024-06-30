const Blog = require("./../Model/Blog");
const User = require("./../Model/User");
const mongoose = require("mongoose");
/* Add Blog */
const addBlog = async (req, res, next) => {
  const file = req.file;
  if (!file) {
    return res.send("pleace add file this can't be empty!");
  }
  /* Add image to req.body */
  const fileName = req.file.filename;
  const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;
  const { title, description, image } = req.body;
  const blog = new Blog({
    title,
    description,
    image: `${basePath}${fileName}`,
  });
  try {
    /* inorder to save the Blog both to blog table and to the user table we use mongo db session */
    /*   const session = await mongoose.startSession();
        session.startTransaction({ session });
        await blog.save();
        existingUser.blogs.push(blog);
        await existingUser.save({ session }); 
        await session.commitTransaction();
        */
    await blog.save();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  return res.status(201).json({ blog });
};
/*get All blogs*/
const getAllBlogs = async (req, res, next) => {
  let allBlogs;
  try {
    allBlogs = await Blog.find();
  } catch (error) {
    console.log(error);
  }
  if (!allBlogs) {
    return res.status(404).json({ message: "blogs not found" });
  }
  return res.status(200).json({ allBlogs });
};
/* get single blog by id */
const getBlogById = async (req, res, next) => {
  let id = req.params.id;
  let blog;
  try {
    blog = await Blog.findById(id);
  } catch (error) {
    return console.log(error);
  }
  if (!blog) {
    return res.status(400).json({ message: "blog not found" });
  }
  return res.status(200).json({ blog });
};

/* Delete blog */
const deleteBlog = async (req, res, next) => {
  /* how to delete blog from both the blog table and user table */
  const id = req.params.id;
  let blog;
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      blog = await Blog.findByIdAndRemove(id).populate("user");
      /* remove the blog from the user Array */
      await blog.user.blogs.pull(blog);
      await blog.user.save();
    } catch (error) {
      return console.log(error);
    }
  } else if (!blog) {
    return res.status(500).json({ message: "you can't delete blog" });
  }
  return res.status(200).json({ message: "blog deleted successfully" });
};
/* update blog */
const updateBlog = async (req, res, next) => {
  const { title, description } = req.body;
  let blogId = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(blogId, {
      title,
      description,
    });
  } catch (error) {
    return console.log(error);
  }
  if (!blog) {
    return res.status(404).json({ message: "you can't update this blog" });
  }
  return res.status(200).json({ blog });
};
/* get All blogs of a user */
const getBlogByUserId = async (req, res, next) => {
  const userId = req.params.id;
  let userBlogs;
  try {
    userBlogs = await User.findById(userId).populate("blogs");
  } catch (error) {
    return console.log(error);
  }
  if (userBlogs) {
    return res.status(400).json({ message: "you can't find blog by this Id" });
  }
  return res.status(200).json({ blogs: userBlogs });
};

module.exports = {
  addBlog,
  getAllBlogs,
  getBlogById,
  deleteBlog,
  updateBlog,
  getBlogByUserId,
};
