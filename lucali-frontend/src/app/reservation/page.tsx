"use client";
import React, { useEffect, useState } from "react";
import { isLoggedIn } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import LoadingPage from "../loading";
import Reservation from "@/components/ui/Reservation";
import Link from "next/link";
import reservation from "../../assets/reservation.png";
import styles from "./Reservation.module.css";
import Image from "next/image";

const ReservationPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const userLoggedIn = isLoggedIn();

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, userLoggedIn]);

  if (!isLoading) {
    return <LoadingPage></LoadingPage>;
  }

  return (
    <div>
      <div className="h-[30rem] relative">
        <Image
          src={reservation}
          alt="reservation"
          className="w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute top-1/2 left-1/2 z-40 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-md breadcrumbs opacity-80">
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/reservation"}>Reservation</Link>
              </li>
            </ul>
          </div>
          <h1
            className={` ${styles.text} text-[#FED18D] italic text-center font-bold text-5xl md:text-7xl mb-4 tracking-wider`}
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Make Resevations
          </h1>
        </div>
      </div>

      <div>
        <Reservation></Reservation>
      </div>
    </div>
  );
};

export default ReservationPage;
