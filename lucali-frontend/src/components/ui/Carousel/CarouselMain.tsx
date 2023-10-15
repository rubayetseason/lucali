"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./CarouselMain.module.css";
import Image from "next/image";
import hero1 from "../../../assets/carousel/hero-1.jpg";
import hero2 from "../../../assets/carousel/hero-2.jpg";
import hero3 from "../../../assets/carousel/hero-3.jpg";

export const CarouselMain = () => {
  const autoplayOptions = {
    delay: 7000,
    rootNode: (emblaRoot: any) => emblaRoot.parentElement,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay(autoplayOptions),
  ]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}>
          <Image src={hero1} alt="hero-1" className="h-full" />
        </div>
        <div className={styles.embla__slide}>
          {" "}
          <Image src={hero2} alt="hero-2" className="h-full" />
        </div>
        <div className={styles.embla__slide}>
          {" "}
          <Image src={hero3} alt="hero-3" className="h-full" />
        </div>
      </div>
    </div>
  );
};
