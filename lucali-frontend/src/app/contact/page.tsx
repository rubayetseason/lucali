import Image from "next/image";
import contactHero from "../../assets/contactHero.jpg";
import styles from "./Contact.module.css";
import Link from "next/link";
import Contact from "@/components/ui/Contact";

const ContactUsPage = () => {
  return (
    <div>
      <div className="h-[30rem] relative">
        <Image
          src={contactHero}
          alt="hero-1"
          className="w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute top-1/2 left-1/2 z-40 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-md breadcrumbs opacity-60">
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <h1
            className={` ${styles.text} text-[#FED18D] italic text-center font-bold text-5xl md:text-7xl mb-4 tracking-wider`}
            data-aos="fade-down"
            data-aos-delay="100"
          >
            CONTACT US
          </h1>
        </div>
      </div>
      <div className="bg-[#040E10] py-10">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default ContactUsPage;
