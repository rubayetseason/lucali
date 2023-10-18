import {
  useReviewCreateMutation,
  useReviewsQuery,
} from "@/redux/api/reviewApi";
import React from "react";
import LoadingFood from "./LoadingFood";
import styles from "./Food.module.css";
import { useForm } from "react-hook-form";
import { getUserInfo } from "@/services/auth.services";
import Swal from "sweetalert2";

type IdProps = {
  id: string;
};

const LeaveReview = ({ id }: IdProps) => {
  const { name } = getUserInfo() as any;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [reviewCreate] = useReviewCreateMutation();

  const handleReview = async (reviews: any) => {
    try {
      let obj = reviews;
      obj.foodId = id;
      obj.reviewer = name;

      const res = await reviewCreate(obj).unwrap();

      if (res?.id) {
        Swal.fire({
          text: "Review added successfully",
          icon: "success",
          confirmButtonText: "Continue",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const { data, isLoading } = useReviewsQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  if (isLoading) {
    return <LoadingFood></LoadingFood>;
  }

  return (
    <div className="py-10 bg-[#0F1D22]">
      <h1
        className={`py-10 text-4xl font-semibold ${styles.text} text-[#FED18D] text-center`}
      >
        Leave a review
      </h1>
      {/* comment */}
      {name ? (
        <div className="px-5">
          <form onSubmit={handleSubmit(handleReview)}>
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="flex-1 form-control w-full mt-2">
                <input
                  type="text"
                  placeholder="Leave a comment..."
                  required
                  {...register("reviewDescription", {
                    required: "Review is required",
                  })}
                  className="input input-bordered border-[1px] bg-[#0F1D22] border-[#FED18D] w-full"
                />
              </div>
              <input
                className={`border-t-[1px] border-b-[1px] border-[#FED18D] px-2 py-3  ${styles.paragraph} cursor-pointer`}
                value="Comment"
                type="submit"
              />
            </div>
          </form>
        </div>
      ) : (
        <h1 className={`text-3xl font-bold text-[#FED18D] text-center ${styles.text}`}>Login to leave a comment</h1>
      )}

      {/* reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 py-14">
        {data &&
          data.map((review: any) => {
            if (review?.createdAt) {
              const createdAt = new Date(review.createdAt);

              const options: Intl.DateTimeFormatOptions = {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZoneName: "short",
              };

              const formattedTime = createdAt.toLocaleString(
                undefined,
                options
              );

              return (
                <div key={review?.id}>
                  <div className="container flex flex-col border-[1px] border-[#FED18D] w-full max-w-lg p-6 mx-auto divide-y divide-[#FED18D] bg-[#0F1D22] text-gray-100">
                    <div className="flex justify-between p-4">
                      <div className="flex space-x-4">
                        <div>
                          <h4
                            className={`font-bold text-xl ${styles.paragraph} text-[#FED18D]`}
                          >
                            {review?.reviewer}
                          </h4>
                          <span
                            className={`font-semibold text-sm text-gray-100 ${styles.paragraph}`}
                          >
                            {formattedTime}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 space-y-2 text-gray-400">
                      <p className={`font-semibold text-lg ${styles.text}`}>
                        {review?.reviewDescription}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default LeaveReview;
