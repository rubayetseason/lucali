import Link from "next/link";
import styles from "../Footer/Footer.module.css";
import lucali from "../../../assets/logo.png";
import Image from "next/image";

const SidebarContent = () => {
  return (
    <ul className="menu p-4 w-80 min-h-full bg-[#191E24] text-base-content">
      {/* Sidebar content here */}
      <div className="flex gap-3 items-center mb-5">
        <Image src={lucali} alt="logo" className="w-7" />
        <h1 className={`text-xl ${styles.text} font-extrabold`}>LUCALI</h1>
      </div>
      <li>
        <Link href={"/"}>
          <button
            className={`${styles.text} px-2 py-2 border-b-[1px] border-[#FED18D] text-base font-semibold`}
          >
            Home
          </button>
        </Link>
      </li>
      <li>
        <Link href={"/"}>
          <button
            className={`${styles.text} px-2 py-2 border-b-[1px] border-[#FED18D] text-base font-semibold`}
          >
            About Us
          </button>
        </Link>
      </li>
      <li>
        <Link href={"/"}>
          <button
            className={`${styles.text} px-2 py-2 border-b-[1px] border-[#FED18D] text-base font-semibold`}
          >
            Food Menu
          </button>
        </Link>
      </li>
      <li>
        <Link href={"/"}>
          <button
            className={`${styles.text} px-2 py-2 border-b-[1px] border-[#FED18D] text-base font-semibold`}
          >
            Reservations
          </button>
        </Link>
      </li>
      <li>
        <Link href={"/"}>
          <button
            className={`${styles.text} px-2 py-2 border-b-[1px] border-[#FED18D] text-base font-semibold`}
          >
            Contact Us
          </button>
        </Link>
      </li>
    </ul>
  );
};

export default SidebarContent;
