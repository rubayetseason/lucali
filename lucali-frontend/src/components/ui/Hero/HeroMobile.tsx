import Image from "next/image";
import hero from "../../../assets/hero/hero-mobile.jpg";
import styles from "./Hero.module.css";

const HeroMobile = () => {
  return (
    <div>
      <Image
        src={hero}
        alt="hero-1"
        className="h-screen object-cover relative brightness-[0.4]"
      />
      <div className="w-full absolute top-1/2 left-1/2 z-40 transform -translate-x-1/2 -translate-y-1/2">
        <h1
          className={` ${styles.text} italic text-center font-bold text-5xl mb-4 tracking-wider`}
          data-aos="fade-down"
          data-aos-delay="300"
        >
          Welcome to Lucali
        </h1>
        <h1
          className={`px-5 text-center text-sm ${styles.paragraph} mb-8`}
          data-aos="fade-left"
          data-aos-delay="700"
        >
          Experience culinary excellence at our luxury fine dining
          establishment, where each dish is a masterpiece and every moment
          exudes taste and style.
        </h1>
        <div className="text-center">
          <button
            className={`border-t-2 border-b-2 border-[#FED18D] px-2 py-3  ${styles.paragraph}`}
          >
            Make Reservations
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroMobile;
