import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

type LoginFormData = {
  username: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<LoginFormData>();
  const { login } = useAppContext();

  const onSubmit = handleSubmit((data) => {
    login(data);
  });
  return (
    <div className="container mx-auto flex justify-center translate-y-16">
      <form
        onSubmit={onSubmit}
        className="border border-slate-500 w-[400px] p-5 flex flex-col gap-5 "
      >
        <input
          type="text"
          placeholder="USERNAME"
          className="w-full p-2 text-sm font-bold border border-gray-300"
          {...register("username", {
            required: "This field is required",
          })}
        />
        <input
          type="password"
          placeholder="PASSWORD"
          className="w-full p-2 text-sm font-bold border border-gray-300"
          {...register("password", {
            required: "This field is required",
          })}
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className=" bg-black text-white p-2 text-sm font-bold"
          >
            Login
          </button>
        </div>
        <div className="flex justify-center">
          <p className="text-xs font-bold">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
