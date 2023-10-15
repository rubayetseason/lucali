import styles from "./Footer/Footer.module.css";

const About = () => {
  return (
    <div>
      <h1
        className={`${styles.text} text-lg text-[#FED18D] text-center pt-5 pb-2 italic`}
      >
        Our Story
      </h1>
      <h1
        className={`${styles.text} text-4xl text-[#FED18D] text-center font-semibold pb-5`}
      >
        ABOUT US
      </h1>
      <h1
        className={`text-lg px-9 md:px-16 lg:px-36 text-justify pb-16 ${styles.paragraph}`}
      >
        Established in 2007, Lucali has since redefined the meaning of fine
        dining in the heart of the city. Founded by culinary visionary
        Alessandro Rossi, this restaurant was born out of a profound passion for
        the art of gastronomy. Seasons dream was to create a space that
        encapsulated the essence of luxury and fine dining, combining it with an
        ambiance that exudes elegance and warmth.
        <br />
        <br />
        Lucali operates under the principle that every guest deserves a truly
        exceptional dining experience. From the moment you step through our
        doors, you are welcomed into a world of exquisite cuisine and
        unparalleled service. Our kitchen, under the masterful direction of
        renowned Chef Isabella Marino, crafts a menu that showcases a symphony
        of flavors, blending the rich traditions of Italian and Mediterranean
        cuisine with innovative culinary techniques.
        <br />
        <br />
        Our goal is simple: to make every visit an unforgettable journey for
        your senses. We aim to be the epitome of opulence, crafting memorable
        moments and culinary delights that linger long after the last bite.
        Lucali, where luxury and culinary artistry converge to create an
        experience like no other.
      </h1>
    </div>
  );
};

export default About;
