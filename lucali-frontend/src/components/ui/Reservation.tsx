import styles from "./Footer/Footer.module.css";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useReservationCreateMutation } from "@/redux/api/reservationApi";
import Swal from "sweetalert2";
import { getUserInfo } from "@/services/auth.services";

const Reservation = () => {
  const router = useRouter();

  const { number } = getUserInfo() as any;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [reservationCreate] = useReservationCreateMutation();

  const handleReservation = async (data: any) => {
    try {
      const res = await reservationCreate(data).unwrap();

      if (res?.id) {
        Swal.fire({
          text: "Reservation created successfully",
          icon: "success",
          confirmButtonText: "Continue",
        });
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="pt-[5rem] pb-[10rem]">
      <h1
        className={`${styles.text} text-4xl text-[#FED18D] text-center font-medium pb-5`}
      >
        Make Reservation
      </h1>
      <div className=" flex justify-center items-center">
        <form onSubmit={handleSubmit(handleReservation)}>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="form-control w-full mt-2">
              <label className="label">
                {" "}
                <span className={`label-text ${styles.text} font-semibold`}>
                  Full Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter name"
                required
                {...register("personName", {
                  required: "Name is required",
                })}
                className="input input-bordered border-[1px] border-[#FED18D] w-full"
              />
            </div>
            <div className="form-control w-full mt-2">
              <label className="label">
                {" "}
                <span className={`label-text ${styles.text} font-semibold`}>
                  Number
                </span>
              </label>
              <input
                type="text"
                placeholder="Phone number"
                required
                {...register("personNumber", {
                  required: "Number is required",
                })}
                defaultValue={number ? number : ""}
                className="input input-bordered border-[1px] border-[#FED18D] w-full"
              />
            </div>
          </div>
          <div className="form-control w-full mt-2">
            <label className="label">
              {" "}
              <span className={`label-text ${styles.text} font-semibold`}>
                Persons
              </span>
            </label>
            <select
              {...register("people", {
                required: "People is required",
              })}
              className="select select-bordered w-full border-[#FED18D]"
            >
              <option value="1 person">1 Person</option>
              <option value="2 person">2 Person</option>
              <option value="3 person">3 Person</option>
              <option value="4 person">4 Person</option>
              <option value="5 person">5 Person</option>
              <option value="6 person">6 Person</option>
            </select>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="form-control w-full mt-2">
              <label className="label">
                {" "}
                <span className={`label-text ${styles.text} font-semibold`}>
                  Select Date
                </span>
              </label>
              <input
                type="date"
                required
                {...register("date", {
                  required: "Date is required",
                })}
                className="input input-bordered border-[1px] border-[#FED18D] w-full"
              />
            </div>
            <div className="form-control w-full mt-2">
              <label className="label">
                {" "}
                <span className={`label-text ${styles.text} font-semibold`}>
                  Select Time
                </span>
              </label>
              <input
                type="time"
                required
                {...register("time", {
                  required: "Time is required",
                })}
                className="input input-bordered border-[1px] border-[#FED18D] w-full"
              />
            </div>
          </div>
          <input
            className={`btn btn-primary bg-slate-100 text-black w-full ${styles.text} text-lg mt-4`}
            value="RESERVE"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Reservation;
