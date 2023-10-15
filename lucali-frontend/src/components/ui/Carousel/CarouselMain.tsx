"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./CarouselMain.module.css";
import CaourselImage1 from "./CaourselImage1";

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
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <CaourselImage1></CaourselImage1>
      </div>
    </div>
  );
};
