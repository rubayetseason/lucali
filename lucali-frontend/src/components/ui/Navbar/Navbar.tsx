"use client";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import textStyle from "../Footer/Footer.module.css";
import Link from "next/link";

const Navbar = () => {
  const [navbar, setNavbar] = useState<boolean>(false);

  const changeBackground = () => {
    if (window.scrollY >= 140) {
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
      }  py-2 flex justify-between items-center border-[#666564] sticky top-0 z-50`}
    >
      <div className="pl-4">
        <Link href={"/"}>
          <Image src={logo} className="w-8" alt="logo" />
        </Link>
      </div>
      <Link href={"/"}>
        <div className={`text-3xl ${textStyle.text}`}>Lucali</div>
      </Link>
      <div className="pr-4">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default Navbar;
