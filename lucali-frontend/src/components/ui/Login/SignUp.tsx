"use client";

import { useForm } from "react-hook-form";
import styles from "./Login.module.css";
import image from "../../../assets/login/login.jpg";
import Image from "next/image";
import Link from "next/link";
import { useUserCreateMutation } from "@/redux/api/userApi";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [userCreate] = useUserCreateMutation();

  const handleLogin = async (data: any) => {
    data.role = "admin";

    try {
      const res = await userCreate(data).unwrap();
      if (res?.id) {
        Swal.fire({
          title: "User created successully",
          text: "Kindly login now",
          icon: "success",
          confirmButtonText: "Cool",
        });
        router.push("/login");
      }

      console.log(res);
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
            Welcome to Lucali
          </h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full">
              <label className="label">
                {" "}
                <span className={`label-text ${styles.text} font-semibold`}>
                  Your Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Full name"
                required
                {...register("name", {
                  required: "Name is required",
                })}
                className="input input-bordered w-full"
              />
            </div>
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
                Already have an account?{" "}
                <Link href={"/login"}>
                  <span className="text-sm text-white"> Login</span>{" "}
                </Link>
              </h1>
            </div>

            <input
              className={`btn btn-primary w-full ${styles.text} text-lg mt-4`}
              value="Sign up"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
