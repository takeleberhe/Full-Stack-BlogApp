import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../Redux/AuthReducer/AuthSlice";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSignUp = () => {
    dispatch(signUp({ name, email, password })).then(() => navigate("/login"));
  };
  return (
    <div>
      <div className=" flex flex-col justify-center items-center">
        <div className="bg-gray-500 w-[300px] rounded-md p-4 m-6 shadow-lg">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 m-2 outline-none rounded-md w-[250px]"
            placeholder="enter your name"
          ></input>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 m-2 outline-none rounded-md w-[250px]"
            placeholder="eneter your email"
          ></input>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 m-2 rounded-md outline-none w-[250px]"
            placeholder="enter password"
          ></input>
          <button
            type="submit"
            className="w-[200px] rounded-2xl m-3 ml-8 p-2 bg-blue-500 outline-none"
            onClick={handleSignUp}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
