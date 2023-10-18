import { useReviewsQuery } from "@/redux/api/reviewApi";
import React from "react";
import LoadingFood from "./LoadingFood";
import styles from "./Food.module.css";

type IdProps = {
  id: string;
};

const LeaveReview = ({ id }: IdProps) => {
  const { data, isLoading } = useReviewsQuery(id);

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
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
                  <div className="container flex flex-col border-[1px] border-[#FED18D] w-full max-w-lg p-6 mx-auto divide-y divide-[#FED18D] bg-gray-900 text-gray-100">
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
