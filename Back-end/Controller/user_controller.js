require("dotenv").config();
const User = require("../Model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const signup = async (req, res) => {
  const { name, email, password} = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    console.log(err);
  }
  if (existingUser) {
    res
      .status(400)
      .json({ message: "the user already existes! login instead" });
  }
  /*one way hashing can't decrypted*/
  const hashpassword = bcrypt.hashSync(password);
  const user = new User({
    name,
    email,
    password: hashpassword,
    isAdmin: false,
    blogs: [],
  });
  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }
  return res.status(201).json({ message: user });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  let existingUser;
  if (!email && !password) {
    response.send("pleace fill the credentials!");
  }
  existingUser = await User.findOne({ email: email });
  if (!existingUser) {
    res.status(400).json({ message: "user not found!pleace signup first!" });
  }
  const ispasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!ispasswordCorrect) {
    return res
      .status(400)
      .json({ message: "invalid credentail try again pleace!" });
  }
  /* when a user login generate token and send back to user as a credential to access server resources*/
  const token = jwt.sign(
    { id: existingUser._id, isAdmin: existingUser.isAdmin },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "1000s",
    }
  );
  //send token to user
  res.cookie(String(existingUser._id), token, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 1000),
    httpOnly: true,
    sameSite: "lax",
  });
  return res
    .status(200)
    .json({ message: "successfully Logged in", user: existingUser, token });
};

const getuser = async (req, res) => {
  let user;
  let id = req.params.id;
  user = await User.findById(id);
  if (!user) {
    return res.status(400).json({ message: "user not found" });
  }
  return res.status(200).json({ user });
};
/*get All users*/
const getAllusers = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const allUsers = await User.find();
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(403).json("you are not authorized!");
  }
};
/* Delete user */
const deleteUser = async (req, res, next) => {
  const id = req.params.id;
  let user;
  if (req.user.id === req.params.id || req.user.isAdmin) {
    user = await User.findByIdAndRemove(id);
    res.status(200).json("user has been deleted successfully");
  } else {
    res.status(403).json("you are not allowed to delete this user!");
  }
};

/* update user */
const updateUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  let user;
  if (req.user.id === req.params.id || req.user.isAdmin) {
    user = await User.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        password,
      },
      {
        new: true,
      }
    );
    res.status(200).json({ user });
  } else {
    return res
      .status(404)
      .json({ message: "canot be updated user by this id" });
  }
};

/* refresh token to re-generate a token  */
const refreshToken = (req, res, next) => {
  const cookies = req.headers.cookie;
  const oldToken = cookies?.split("=")[1];
  console.log(oldToken);
  // verify token
  if (!oldToken) {
    return res.status(400).json({ message: "token coud't find!" });
  }

  jwt.verify(String(oldToken), process.env.JWT_VERIFY_KEY, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(403).json({ message: " authentication failed! " });
    }
    res.clearCookie("${user.id}");
    req.cookies["${user.id}"] = "";

    /*
       then after the cookies are clear from the browser and 
        request headers then re-generate newAcccess token and send to client(user)!
      */
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "30s",
    });
    console.log("RegeneratedToken\n", token);
    res.cookie(String(user.id), token, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 20),
      httpOnly: true,
      sameSite: "lax",
    });
    req.id = user.id;
    next();
  });
};

const logout = async (req, res, next) => {
  /* get toeken from the cookie first!*/
  const cookies = req.headers.cookie;
  const oldToken = cookies?.split("=")[1];
  console.log(oldToken);
  if (!oldToken) {
    return res.status(400).json({ message: "token coud't find!" });
  }

  /*verify token!*/
  jwt.verify(String(oldToken), process.env.JWT_VERIFY_KEY, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(403).json({ message: " authentication failed! " });
    }
    res.clearCookie("${user._id}");
    req.cookies["${user._id}"] = "";
    return res
      .status(200)
      .json({ message: "you are successfully logged out!" });
  });
};

/* update user profile */
const updateUserProfile = async (req, res, next) => {
  let user = await User.findById(req.user.id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.image = req.body.image || user.image;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    res.json({
      id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      image: updatedUser.image,
    });
  } else {
    res.status(404).json("user not found");
  }
};

/* Get User Profile */
const getUserProfile = async (req, res, next) => {
  let user;
  user = await User.findById(req.user.id);
  if (!user) {
    return res.status(400).json({ message: "user not found" });
  }
  return res.status(200).json({ user });
};

module.exports = {
  signup,
  login,
  logout,
  getAllusers,
  getuser,
  deleteUser,
  updateUser,
  refreshToken,
  updateUserProfile,
  getUserProfile,
};
