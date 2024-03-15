import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

type RegisterFormData = {
  name: string;
  email: string;
  phone: string;
  otp: string;
};

const Register = () => {
  const { register, handleSubmit, watch } = useForm<RegisterFormData>();

  function sendOTP(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    const phoneNumber = watch("phone");
    console.log(phoneNumber);
  }
  const { registerUser } = useAppContext();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    registerUser(data);
  });
  return (
    <div className="container mx-auto flex justify-center translate-y-16 ">
      <form
        onSubmit={onSubmit}
        className="border border-slate-500 w-[400px] p-5 flex flex-col gap-5 "
      >
        <input
          type="text"
          placeholder="NAME"
          className="w-full p-2 text-sm font-bold border border-gray-300"
          {...register("name", {
            required: "This field is required",
          })}
        />
        <input
          type="email"
          placeholder="EMAIL"
          className="w-full p-2 text-sm font-bold border border-gray-300"
          {...register("email", {
            required: "This field is required",
          })}
        />
        <div className="flex flex-col gap-2">
          <div className="flex gap-3">
            <input
              type="phone"
              placeholder="PHONE NUMBER"
              className="w-full p-2 text-sm font-bold border border-gray-300"
              {...register("phone", {
                required: "This field is required",
              })}
            />
            <button
              onClick={(event) => sendOTP(event)}
              className="bg-black text-white px-2 text-xs font-bold"
            >
              Send OTP
            </button>
          </div>
          <p className="text-xs">
            Didn't recieve It?{" "}
            <button className="text-blue-500 ">RESEND</button>
          </p>
        </div>
        <input
          type="text"
          placeholder="OTP"
          className="w-full p-2 text-sm font-bold border border-gray-300"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className=" bg-black text-white p-2 text-sm font-bold"
          >
            Sign Up
          </button>
        </div>
        <div className="flex justify-center">
          <p className="text-sm font-bold text-xs">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 text-xs">
              Log In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Register;
