"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./Reviews.module.css";
import Review from "./Review";

export const Reviews = () => {
  const autoplayOptions = {
    delay: 4000,
    rootNode: (emblaRoot: any) => emblaRoot.parentElement,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  return (
    <div>
      <div
        className={`${styles.text} text-[#FED18D] pt-5 text-center text-3xl md:text-4xl`}
      >
        Our Reviews
      </div>
      <div className={`${styles.embla} py-10`} ref={emblaRef}>
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}>
            <Review></Review>
          </div>
          <div className={styles.embla__slide}>
            <Review></Review>
          </div>
          <div className={styles.embla__slide}>
            <Review></Review>
          </div>
        </div>
      </div>
    </div>
  );
};
