import Image from "next/image";
import about from "../../assets/about.jpg";
import Link from "next/link";
import styles from "./About.module.css";
import About from "@/components/ui/About";

const AboutUsPage = () => {
  return (
    <div>
      <div className="h-[30rem] relative">
        <Image
          src={about}
          alt="about"
          className="w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute top-1/2 left-1/2 z-40 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-md breadcrumbs opacity-60">
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/about"}>About Us</Link>
              </li>
            </ul>
          </div>
          <h1
            className={` ${styles.text} text-[#FED18D] italic text-center font-bold text-5xl md:text-7xl mb-4 tracking-wider`}
            data-aos="fade-down"
            data-aos-delay="100"
          >
            About Us
          </h1>
        </div>
      </div>
      <div className="bg-[#040E10] py-10">
        <About></About>
      </div>
    </div>
  );
};

export default AboutUsPage;
