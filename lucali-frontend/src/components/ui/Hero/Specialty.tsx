import Image from "next/image";
import specialty1 from "../../../assets/hero/specialty1.jpg";
import specialty2 from "../../../assets/hero/specialty2.jpg";
import specialty3 from "../../../assets/hero/specialty3.jpg";
import specialty4 from "../../../assets/hero/specialty4.jpg";
import styles from "./Hero.module.css";
import Link from "next/link";

interface ISpecialty {
  id: number;
  image: any;
  name: string;
  link: string;
}

const Specialty = () => {
  const specialties: ISpecialty[] = [
    {
      id: 1,
      image: specialty1,
      name: "Starters",
      link: "/starters",
    },
    {
      id: 2,
      image: specialty2,
      name: "Mains",
      link: "/mains",
    },
    {
      id: 3,
      image: specialty3,
      name: "Desserts",
      link: "/desserts",
    },
    {
      id: 4,
      image: specialty4,
      name: "Mocktails",
      link: "/mocktails",
    },
  ];

  return (
    <div>
      <div
        className={`${styles.text} text-center text-3xl text-[#e0ad61] font-semibold sm:text-5xl pb-2 md:pb-10`}
      >
        Our Specialty
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 px-14 gap-5 md:gap-3">
        {specialties.map((specialty) => {
          return (
            <div
              key={specialty.id}
              className="relative pt-5 md:pt-0"
              data-aos="fade-up"
            >
              <Link href={`${specialty?.link}`}>
                <Image
                  className="brightness-50 w-full h-72 md:h-full md:w-80 object-cover mx-auto hover:brightness-75 transition-brightness duration-200 ease-in-out"
                  src={specialty?.image}
                  alt="item"
                />
                <h1
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl ${styles.paragraph}`}
                >
                  {specialty.name}
                </h1>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-10">
        <Link href={"/menu"}>
          <button
            className={`border-t-[1px] border-b-[1px] border-[#FED18D] px-2 py-3  ${styles.paragraph}`}
          >
            Check Entire Menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Specialty;
