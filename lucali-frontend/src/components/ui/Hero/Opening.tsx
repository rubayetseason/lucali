import Image from "next/image";
import opening from "../../../assets/hero/opening.jpg";
import styles from "./Hero.module.css";
import Link from "next/link";

const Opening = () => {
  return (
    <div>
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div
          rel="noopener noreferrer"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-[#061115]"
        >
          <Image
            src={opening}
            alt="reservation"
            className="brightness-50 object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-[#061115]"
          />

          <div className="p-6 space-y-2 lg:col-span-5">
            <h3
              className={`${styles.text} text-3xl text-[#e0ad61] font-semibold sm:text-5xl pb-2 md:pb-4`}
            >
              Opening Hour
            </h3>
            <span className="text-xs text-gray-400">
              From dusk till midnight, savor luxury cuisine and ambiance
              nightly.
            </span>
            <p
              className={`border-b-[1px] border-[#FED18D] pt-5 pb-2 ${styles.paragraph} text-sm md:text-lg`}
            >
              SUNDAY - THURSDAY : 11:00 AM - 11:00 PM
            </p>
            <p
              className={`border-b-[1px] border-[#FED18D] pt-5 pb-2 ${styles.paragraph} text-sm md:text-lg`}
            >
              FRIDAY & SATURDAY : 11:00 AM - 12:00 AM
            </p>
            <div className="pt-6">
              <Link href={"/reservation"}>
                <button
                  className={`text-xs border-t-[1px] border-b-[1px] border-[#FED18D] px-2 py-3 ${styles.paragraph}`}
                >
                  MAKE RESERVATION
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opening;
