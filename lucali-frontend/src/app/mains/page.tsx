import Image from "next/image";
import React from "react";
import styles from "./Mains.module.css";
import mainsHome from "../../assets/mainsHome.jpg";
import Link from "next/link";
import MainsWrapper from "@/components/ui/Food/MainsWrapper";

const MainsPage = () => {
  return (
    <div>
      <div className="h-[30rem] relative">
        <Image
          src={mainsHome}
          alt="mainsHome"
          className="w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute top-1/2 left-1/2 z-40 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-md breadcrumbs opacity-80">
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/mains"}>Mains</Link>
              </li>
            </ul>
          </div>
          <h1
            className={` ${styles.text} text-[#FED18D] italic text-center font-bold text-5xl md:text-7xl mb-4 tracking-wider`}
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Main Course
          </h1>
        </div>
      </div>
      <div className="pb-10 md:pb-7 bg-[#0F1D22]">
        <MainsWrapper></MainsWrapper>
      </div>
    </div>
  );
};

export default MainsPage;
