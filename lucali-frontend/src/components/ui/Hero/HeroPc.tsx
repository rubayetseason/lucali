import Image from "next/image";
import hero from "../../../assets/hero/hero.jpg";
import styles from "./Hero.module.css";

const HeroPc = () => {
  return (
    <div>
      <Image
        src={hero}
        alt="hero-1"
        className="w-full relative brightness-[0.4]"
      />
      <div className="absolute top-1/2 left-1/2 z-40 transform -translate-x-1/2 -translate-y-1/2">
        <h1
          className={` ${styles.text} italic text-center font-bold text-7xl mb-4 tracking-wider`}
          data-aos="fade-down"
          data-aos-delay="300"
        >
          Welcome to Lucali
        </h1>
        <h1
          className={`text-center text-xl ${styles.paragraph} mb-8`}
          data-aos="fade-left"
          data-aos-delay="700"
        >
          Indulge in culinary perfection at our luxury fine dining restaurant,
          where every dish is a masterpiece, and every moment is an elegant
          celebration of taste and style.
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

export default HeroPc;
