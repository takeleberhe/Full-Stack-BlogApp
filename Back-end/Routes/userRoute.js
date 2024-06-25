const express = require("express");
const {
  signup,
  login,
  deleteUser,
  getAllusers,
  getuser,
  updateUser,
  refreshToken,
  logout,
  updateUserProfile,
  getUserProfile,
} = require("../Controller/user_controller");
const {
  verifyToken,
  isAdmin,
  isAuth,
} = require("../Middlewares/authMiddleware");
const userRouter = express.Router();
// route api
userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.get("/logout", logout);
userRouter.get("/users", verifyToken, isAdmin, getAllusers);
userRouter.get("/users/:id", getuser);
userRouter.delete("/users/:id", verifyToken, isAuth, deleteUser);
userRouter.patch("/users/:id", verifyToken, isAuth, updateUser);
userRouter.post("/userprofile", verifyToken, isAuth, updateUserProfile);
userRouter.get("/userprofile", verifyToken, isAuth, getUserProfile);
userRouter.get("/refreshtoken", verifyToken, isAuth, refreshToken);

module.exports = userRouter;
