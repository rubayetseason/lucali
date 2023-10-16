"use client";

import { useForm } from "react-hook-form";
import styles from "./Login.module.css";
import image from "../../../assets/login/login.jpg";
import Image from "next/image";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data: any) => {
    console.log(data);
  };

  return (
    <div className={`relative`}>
      <Image
        src={image}
        alt="backgroundImage"
        className="h-screen w-full object-cover brightness-50"
      />
      <div className=" flex justify-center items-center">
        <div className="w-96 p-7 mt-10 border-2 absolute top-1/2 left-1/2 z-40 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-2xl text-center font-bold underline mb-5">
            Login
          </h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Your Number</span>
              </label>
              <input
                type="text"
                required
                {...register("number", {
                  required: "Number is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                required
                {...register("password", {
                  required: "Password is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <input
              className="btn btn-secondary w-full"
              value="Login"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
