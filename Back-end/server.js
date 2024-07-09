const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");

/*import Router modules here*/
const userRouter = require("./Routes/userRoute");
const blogRouter = require("./Routes/blogRoute");
const { connectDB } = require("./Dbconnection/Dbconnection");
connectDB();

/*Use NodeJs builtIn Middlewares here*/
const app = express();
app.use(cors({origin: true, withcredentials: true}));
//app.use(cors()); //allow port 3000 client react app runs which is the allowed server to access our back-end server!
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(morgan("tiny"));

/*serve the static file all files in public folder will be global varibale*/
app.use("/public", express.static("public"));

/* cutom middlewares(APIs) */
app.use("/BlogApi/users", userRouter);
app.use("/BlogApi/blogs", blogRouter);

const port = process.env.PORT || 3000;
//server listenes request at port 3000
app.listen(port, () => {
  console.log(`server is listening at port${port}`);
});
