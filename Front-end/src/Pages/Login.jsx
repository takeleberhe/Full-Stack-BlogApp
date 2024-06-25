import { useState } from "react";
import { useDispatch } from "react-redux";
import { SignIn } from "../Redux/AuthReducer/AuthSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSingIn = () => {
    dispatch(SignIn({ email, password })).then(() => navigate("/"));
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-80 bg-gray-500 rounded-md m-8 p-4 shadow-lg">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 m-2 outline-none rounded-md w-[280px] "
            placeholder="enter email"
          ></input>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 m-2 outline-none rounded-md w-[280px]"
            placeholder="enter password"
          ></input>
          <button
            className="p-2 m-4 ml-10 w-[200px] rounded-2xl bg-blue-500"
            type="submit"
            onClick={handleSingIn}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
