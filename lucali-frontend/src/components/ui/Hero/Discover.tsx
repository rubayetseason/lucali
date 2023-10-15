import Image from "next/image";
import discover from "../../../assets/hero/discover.jpg";
import styles from "./Hero.module.css";

const Discover = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row md:py-10">
      <div className="flex-1 pl-12 md:pl-24 lg:pl-32">
        <h1
          className={`pt-6 text-4xl font-thin ${styles.text} mb-5`}
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Exquisite Dining <br /> Experience Fit for <br />
          <span className={`text-[#FED18D] ${styles.text}`}>Royalty</span>
        </h1>
        <h1
          className={`hidden md:block text-xs text-gray-300 ${styles.paragraph} leading-loose pr-20 pb-8`}
        >
          Experience the epitome of dining opulence at our exclusive restaurant.
          From the moment you step inside, you are transported to a world of
          refined elegance. Impeccable service and a sumptuous ambiance elevate
          every meal into a regal affair. <br />
          <br />
          Whether its a romantic dinner, a celebratory event, or a business
          gathering, our restaurant offers an unmatched setting where gastronomy
          meets grandeur. Come and savor the taste of luxury in every bite.
        </h1>
        <h1
          className={`block md:hidden text-xs text-gray-300 ${styles.paragraph} leading-loose pr-20`}
        >
          Whether its a romantic dinner, a celebratory event, or a business
          gathering, our restaurant offers an unmatched setting where gastronomy
          meets grandeur. Come and savor the taste of luxury in every bite.
          Impeccable service and a sumptuous ambiance elevate every meal into a
          regal affair. <br />
          <br />
        </h1>
        <div className="pb-8">
          <button
            className={`text-xs border-t-2 border-b-2 border-[#FED18D] px-2 py-3 ${styles.paragraph}`}
          >
            DISCOVER THE KITCHEN
          </button>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-end">
          <Image
            src={discover}
            className="brightness-75 pl-8 md:pl-0 w-full"
            alt="steak"
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;
