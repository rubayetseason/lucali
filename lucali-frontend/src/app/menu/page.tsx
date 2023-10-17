import Image from "next/image";
import menu from "../../assets/menu.jpg";
import styles from "./Menu.module.css";
import Link from "next/link";
import Menu from "@/components/ui/Menu";

const MenuPage = () => {
  return (
    <div>
      <div className="h-[30rem] relative">
        <Image
          src={menu}
          alt="menu"
          className="w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute top-1/2 left-1/2 z-40 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-md breadcrumbs opacity-80">
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/menu"}>Menu</Link>
              </li>
            </ul>
          </div>
          <h1
            className={` ${styles.text} text-[#FED18D] italic text-center font-bold text-5xl md:text-7xl mb-4 tracking-wider`}
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Food Menu
          </h1>
        </div>
      </div>
      <Menu></Menu>
    </div>
  );
};

export default MenuPage;
