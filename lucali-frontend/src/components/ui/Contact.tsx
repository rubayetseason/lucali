import styles from "./Footer/Footer.module.css";
import satelite from "../../assets/satelite.png";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center">
      <div className="px-5 md:px-14 lg:px-28 flex-1">
        <h1 className={`text-4xl text-[#FED18D] ${styles.text} py-10`}>
          Contact Us
        </h1>
        <form>
          <div className="flex gap-5">
            <input
              type="text"
              placeholder="Name"
              className={`input input-bordered placeholder-white w-full max-w-xs bg-[#040E10] ${styles.text}`}
            />
            <input
              type="text"
              placeholder="Email"
              className={`input input-bordered placeholder-white w-full max-w-xs bg-[#040E10] ${styles.text}`}
            />
          </div>
          <br />
          <div>
            <textarea
              className={`text-lg placeholder-white textarea textarea-bordered bg-[#040E10] w-full ${styles.text}`}
              placeholder="Bio"
            ></textarea>
          </div>
          <button
            className={`my-5 px-4 py-2 bg-slate-200 text-black ${styles.text} font-semibold`}
          >
            Contact Us
          </button>
        </form>
      </div>
      <div className="flex-1">
        <Image src={satelite} alt="map" className="pr-5" />
      </div>
    </div>
  );
};

export default Contact;
