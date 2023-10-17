import styles from "./Starters.module.css";
import startersMain from "../../assets/startersHome.jpg";
import Image from "next/image";
import Link from "next/link";
import StartersWrapper from "@/components/ui/Food/StartersWrapper";

const StartersPage = () => {
  return (
    <div>
      <div className="h-[30rem] relative">
        <Image
          src={startersMain}
          alt="startersMain"
          className="w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute top-1/2 left-1/2 z-40 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-md breadcrumbs opacity-80">
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/mocktails"}>Starters</Link>
              </li>
            </ul>
          </div>
          <h1
            className={` ${styles.text} text-[#FED18D] italic text-center font-bold text-5xl md:text-7xl mb-4 tracking-wider`}
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Our Starters
          </h1>
        </div>
      </div>
      <div className="pb-10 md:pb-7 bg-[#0F1D22]">
        <StartersWrapper></StartersWrapper>
      </div>
    </div>
  );
};

export default StartersPage;
