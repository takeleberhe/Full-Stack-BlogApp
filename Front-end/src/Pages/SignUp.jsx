import { useDispatch } from "react-redux";
import { signUp } from "../Redux/AuthReducer/AuthSlice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const { register, handleSubmit } = useForm({ mode: "all" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = (data) => {
    const payload = data;
    dispatch(signUp(payload)).then(() => navigate("/login"));
  };
  return (
    <div>
      <div className=" flex flex-col justify-center items-center">
        <form
          className="bg-gray-500 w-[300px] rounded-md p-4 m-6 shadow-lg"
          onSubmit={handleSubmit(handleSignUp)}
        >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
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
            className="p-2 m-2 outline-none rounded-md w-[250px]"
            placeholder="enter your name"
          ></input>
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
            className="p-2 m-2 outline-none rounded-md w-[250px]"
            placeholder="eneter your email"
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
                value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/,
                message:
                  "password must be 7-15characters and must include one numeric and one special character",
              },
            })}
            className="p-2 m-2 rounded-md outline-none w-[250px]"
            placeholder="enter password"
          ></input>
          <button
            type="submit"
            className="w-[200px] rounded-2xl m-3 ml-8 p-2 bg-blue-500 outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
