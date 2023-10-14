"use client";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState<boolean>(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeBackground);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", changeBackground);
      }
    };
  }, []);

  return (
    <div
      className={`${
        navbar ? `${styles.navbar} ${styles.active}` : `${styles.navbar}`
      }  py-2 flex justify-between items-center border-b-[0.5px] border-[#666564] sticky top-0 z-50`}
    >
      <div className="pl-4">
        <Image src={logo} className="w-8" alt="logo" />
      </div>
      <div className="text-3xl">Lucali</div>
      <div className="pr-4">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default Navbar;
