import { useDispatch } from "react-redux";
import { SignIn } from "../Redux/AuthReducer/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register,formState:{errors}, handleSubmit } = useForm({ mode: "all" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSingIn = async (data) => {
    const payload = data;
    dispatch(SignIn(payload)).then(() => navigate("/"));
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-transparent">
        <form onSubmit={handleSubmit(handleSingIn)}>
          <div className="w-[350px] bg-indigo-800 rounded-md m-8 p-4 shadow-lg">
            <label htmlFor="email" className="text-white text-xl">Email:</label>
            <input
              type="email"
              name="email"
               className="p-2 mt-5 outline-none rounded-md w-[300px] "
              {...register("email", {
                required: "email required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "email must be valid",
                },
              })}
              placeholder="enter email"
             
            />
             <p className="text-red-700 mx-[20%]">{errors.email?.message}</p>
            <label htmlFor="password" className="text-xl text-white">Password:</label>
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
              className="p-2 mt-6 outline-none rounded-md w-[300px]"
              placeholder="enter password"
            />
             <p className="text-red-700 mx-[20%]">{errors.password?.message}</p>
             <h2 className="text-yellow-600 mx-[10%]">Dont have Acount?<Link to="/signup" className="text-green-500 text-1xl">Create Acount</Link></h2>
            <button
              className="p-2 m-2 ml-10 w-[150px] mx-[280%] px-[20px] rounded-full bg-green-700 hover:bg-yellow-700"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
