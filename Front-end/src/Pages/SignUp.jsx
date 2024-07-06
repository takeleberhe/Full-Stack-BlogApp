import { useDispatch } from "react-redux";
import { signUp } from "../Redux/AuthReducer/AuthSlice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = (data) => {
    const payload = data;
    dispatch(signUp(payload)).then(() => navigate("/login"));
  };
  return (
    <div>
      <div className=" flex flex-col justify-center items-center bg-transparent">
        <form
          className="bg-indigo-800 w-[400px] rounded-lg p-4 m-6 shadow-3xl"
          onSubmit={handleSubmit(handleSignUp)}
        >
          <label htmlFor="name" className="text-white text-md">Name:</label>
          <input
            type="text"
            name="name"
              className="p-2 m-4 outline-none rounded-md w-[300px]"
            {...register("name", {
              required: "username required!",
              minLength: {
                value: 3,
                message: "username must be at least 3 characters!",
              },

              maxLength: {
                value: 20,
                message: "username must be at most 20 characters!",
              },
            })}
          
            placeholder="enter your name"
          />
          <p className="text-red-700 mx-[20%]"> {errors.name?.message}</p>

          <label htmlFor="email" className="text-white text-md">Email:</label>
          <input
            type="email"
            name="email"
             className="p-2 m-4 outline-none rounded-md w-[300px]"
            {...register("email", {
              required: "email required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "email must be valid",
              },
            })}
           
            placeholder="eneter your email"
          />
          <p className="text-red-700 mx-[20%]">{errors.email?.message}</p>
          <label htmlFor="password" className="text-white text-md">Password:</label>
          <input
            type="password"
            name="password"
            className="p-2 m-4 rounded-md outline-none w-[300px]"
            {...register("password", {
              required: "password required",
              /* To check a password between 7 to 15 characters which contain at 
                 least one numeric digit and a special character */
              pattern: {
                value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/,
                message:
                  "password must be 7-15characters and must include one numeric and one special character",
              },
            })}
            
            placeholder="enter password"
          />
          <p className="text-red-700 mx-[20%]">{errors.password?.message}</p>

          <button
            type="submit"
            className="w-[150px] rounded-3xl mx-[25%] px-[20px] p-2 bg-green-700 outline-none hover:bg-yellow-800"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
