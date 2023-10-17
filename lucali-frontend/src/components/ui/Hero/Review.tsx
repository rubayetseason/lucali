import { TfiQuoteLeft, TfiQuoteRight } from "react-icons/tfi";
import styles from "./Hero.module.css";

const Review = () => {
  return (
    <div className="flex justify-evenly items-center">
      <div className="text-2xl md:text-4xl lg:text-5xl text-[#FED18D]">
        <TfiQuoteLeft />
      </div>
      <div>
        <div
          className={`text-md md:text-xl text-center text-[#FED18D] ${styles.paragraph} pb-2`}
        >
          Steven K. Roberts
        </div>
        <div className="text-center text-xs text-gray-500">From Melbourne</div>
        <br />
        <div
          className={`text-sm md:text-lg italic text-center font-semibold w-[13rem] md:w-[19rem] lg:w-[30rem] mx-auto ${styles.text}`}
        >
          The talented team of passionate chefs masterfully crafts each dish,
          combining the finest ingredients with innovative techniques to present
          culinary creations that are as visually stunning as they are
          delicious.
        </div>
      </div>
      <div className="text-2xl md:text-4xl lg:text-5xl text-[#FED18D]">
        <TfiQuoteRight />
      </div>
    </div>
  );
};

export default Review;
