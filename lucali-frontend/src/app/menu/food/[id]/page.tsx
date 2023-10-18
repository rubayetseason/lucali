"use client";
import React from "react";
import { useSingleFoodQuery } from "@/redux/api/foodApi";
import Image from "next/image";
import Link from "next/link";
import styles from "../../Menu.module.css";
import LoadingPage from "@/app/loading";
import LeaveReview from "@/components/ui/Food/LeaveReview";

type IdProps = {
  params: any;
};

const SingleFoodItem = ({ params }: IdProps) => {
  const { id } = params;
  const { data, isLoading } = useSingleFoodQuery(id);

  if (isLoading) {
    return <LoadingPage></LoadingPage>;
  }

  return (
    <div>
      <div className="h-[30rem] relative">
        <Image
          src={data?.img}
          alt="food"
          width={400}
          height={400}
          className="w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute top-1/2 left-1/2 z-40 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-md breadcrumbs opacity-80">
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/food"}>Food</Link>
              </li>
            </ul>
          </div>
          <h1
            className={` ${styles.text} text-[#FED18D] italic text-center font-bold text-5xl md:text-7xl mb-4 tracking-wider`}
            data-aos="fade-down"
            data-aos-delay="100"
          >
            {data?.name}
          </h1>
        </div>
      </div>
      {/* information */}
      <div className="bg-[#0F1D22]">
        <div className="w-full md:w-2/3 mx-auto px-5 md:px-0 pt-16 pb-10 md:pb-7">
          <div
            className={` ${styles.text} text-[#FED18D] italic font-bold text-3xl md:text-5xl mb-4 tracking-wider`}
          >
            {data?.name}
          </div>
          <div
            className={` ${styles.paragraph} text-[#FED18D] font-bold text-2xl md:text-4xl mb-4 tracking-wider`}
          >
            ${data?.price}
          </div>
          <div
            className={` ${styles.paragraph} text-slate-200 font-semibold text-xl md:text-2xl mb-4 tracking-wider`}
          >
            {" "}
            <span
              className={` ${styles.text} text-[#FED18D] italic font-bold text-xl md:text-2xl mb-4 tracking-wider`}
            >
              Key Ingredients:
            </span>{" "}
            {data?.detail}
          </div>
          <div
            className={`text-justify ${styles.text} text-gray-100 italic font-medium text-base md:text-xl mb-4 tracking-wider`}
          >
            {data?.description}
          </div>
        </div>
      </div>
      {/* review */}
      <div>
        <LeaveReview id={data?.id}></LeaveReview>
      </div>
    </div>
  );
};

export default SingleFoodItem;
