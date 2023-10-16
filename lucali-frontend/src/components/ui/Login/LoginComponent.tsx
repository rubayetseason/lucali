"use client";

import { useForm } from "react-hook-form";
import styles from "./Login.module.css";
import image from "../../../assets/login/login.jpg";
import Image from "next/image";
import Link from "next/link";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.services";
import Swal from "sweetalert2";

const Login = () => {
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [userLogin] = useUserLoginMutation();

  const handleLogin = async (data: any) => {
    try {
      const res = await userLogin(data).unwrap();
      if (res?.accessToken) {
        Swal.fire({
          text: "User login successful",
          icon: "success",
          confirmButtonText: "Continue",
        });
        router.push("/");
      }
      storeUserInfo({ accessToken: res?.accessToken });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`relative`}>
      <Image
        src={image}
        alt="backgroundImage"
        className="h-screen w-full object-cover brightness-50"
      />
      <div className=" flex justify-center items-center">
        <div className="w-96 p-7 bg-[#040E10] bg-opacity-20 mt-10 border-[1px] border-[#FED18D] absolute top-1/2 left-1/2 z-40 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className={`text-2xl text-center font-bold mb-5 ${styles.text}`}>
            Welcome Back
          </h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full">
              <label className="label">
                {" "}
                <span className={`label-text ${styles.text} font-semibold`}>
                  Your Number
                </span>
              </label>
              <input
                type="text"
                placeholder="Phone number"
                required
                {...register("number", {
                  required: "Number is required",
                })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                {" "}
                <span className={`label-text ${styles.text} font-semibold`}>
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="******"
                required
                {...register("password", {
                  required: "Password is required",
                })}
                className="input input-bordered w-full"
              />
            </div>

            <div className="mt-2">
              <h1 className="text-sm font-bold">
                Dont have an account?{" "}
                <Link href={"/signup"}>
                  <span className="text-sm text-white">
                    {" "}
                    Create new account
                  </span>{" "}
                </Link>
              </h1>
            </div>

            <input
              className={`btn btn-primary w-full ${styles.text} text-lg mt-4`}
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
