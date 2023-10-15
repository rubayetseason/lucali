import Image from "next/image";
import logo from "../../../assets/logo.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="pt-10 flex justify-center items-center bg-[#0B1315]">
      <div>
        <div className="flex justify-center items-center">
          <Image src={logo} className="w-10 md:w-14 pt-10" alt="logo" />
        </div>
        <div className="pt-14">
          <h1
            className={`${styles.text} text-base md:text-xl text-center py-1 font-medium`}
          >
            Lucali Kitchen & Fine Dining, 71 Madison Ave
          </h1>
          <h1
            className={`${styles.text} text-base md:text-xl text-center py-1 px-1 md:px-0 font-medium`}
          >
            10013 New York, (+88) 01978-258725, reservations@lucali.com
          </h1>
          <h1
            className={`${styles.text} text-base md:text-xl text-center py-1 font-medium`}
          >
            Open: 11:00 am - 11:00 pm
          </h1>
        </div>
        <div className="pt-8 pb-36 grid grid-cols-1 md:grid-cols-3 gap-5">
          <button
            className={`${styles.text} px-2 py-3 border-b-[1px] border-[#FED18D] text-xl w-36 mx-auto`}
          >
            Facebook
          </button>
          <button
            className={`${styles.text} px-2 py-3 border-b-[1px] border-[#FED18D] text-xl w-36 mx-auto`}
          >
            Instagram
          </button>
          <button
            className={`${styles.text} px-2 py-3 border-b-[1px] border-[#FED18D] text-xl w-36 mx-auto`}
          >
            Trip Advisor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
