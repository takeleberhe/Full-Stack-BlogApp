import { useDispatch } from "react-redux";
import { SignIn } from "../Redux/AuthReducer/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm({ mode: "all" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSingIn = async (data) => {
    const payload = data;
    dispatch(SignIn(payload)).then(() => navigate("/"));
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit(handleSingIn)}>
          <div className="w-80 bg-gray-500 rounded-md m-8 p-4 shadow-lg">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              {...register("email", {
                required: "email required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "email must be valid",
                },
              })}
              placeholder="enter email"
              className="p-2 m-2 outline-none rounded-md w-[280px] "
            ></input>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: "password required",
                /* To check a password between 7 to 15 characters which contain at 
               least one numeric digit and a special character */
                pattern: {
                  value:
                    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/,
                  message:
                    "password must be 7-15characters and must include one numeric and one special character",
                },
              })}
              className="p-2 m-2 outline-none rounded-md w-[280px]"
              placeholder="enter password"
            ></input>
             <h2>You Dont have Acount?<Link to="/signup">Create Acount</Link></h2>
            <button
              className="p-2 m-4 ml-10 w-[200px] rounded-2xl bg-blue-500"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
