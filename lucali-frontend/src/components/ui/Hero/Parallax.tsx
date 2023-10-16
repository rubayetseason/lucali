import styles from "./Parallax.module.css";

const Parallax = () => {
  return (
    <div>
      <header
        className={`${styles.bgHeader} flex items-center justify-center h-[30rem] pb-12`}
      >
        <div className="bg-white font-serif mx-4 p-4 text-center md:p-8">
          <p className={`italic text-sm text-gray-950 ${styles.paragraph}`}>
            Today Special
          </p>
          <h1 className={`text-2xl text-gray-950 font-semibold ${styles.text}`}>
            Salmon Supreme with Truffle-Infused Potato Galette
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Parallax;
