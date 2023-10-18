import { useMocktailsQuery } from "@/redux/api/foodApi";
import styles from "./Food.module.css";
import LoadingFood from "./LoadingFood";
import Image from "next/image";
import { FaStarOfLife } from "react-icons/fa6";
import Link from "next/link";

const MocktailsIndividual = () => {
  const query: Record<string, any> = {};

  query["limit"] = 10;
  query["page"] = 1;

  const { data, isLoading } = useMocktailsQuery({ ...query });
  const mocktails = data?.food?.data;

  if (isLoading) {
    return <LoadingFood></LoadingFood>;
  }

  return (
    <div>
      <div>
        <h1
          className={`text-center  text-4xl md:text-5xl ${styles.text} text-[#FED18D] font-bold tracking-widest`}
        >
          Our Mocktails
        </h1>
      </div>
      <div className="w-full md:w-2/3 mx-auto py-10 flex flex-col gap-8 px-5">
        {mocktails &&
          mocktails.map((mocktail: any, i: number) => {
            return (
              <div className="" key={mocktail?.id}>
                {i % 2 ? (
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <Link href={`/menu/food/${mocktail?.id}`}>
                      <div>
                        <Image
                          src={mocktail?.img}
                          alt="mocktail"
                          width={450}
                          height={450}
                        />
                      </div>
                    </Link>
                    <div className="flex flex-col md:pl-10 mt-2 mb-3 md:my-0">
                      <div className="flex">
                        <Link href={`/menu/food/${mocktail?.id}`}>
                          <div>
                            <h1
                              className={`text-xl md:text-2xl ${styles.text} text-[#FED18D] border-b-[1px] border-[#FED18D] font-medium`}
                            >
                              {mocktail?.isPopular ? (
                                <FaStarOfLife className="text-xs" />
                              ) : (
                                ""
                              )}{" "}
                              {mocktail?.name} &nbsp;&nbsp;{" "}
                              <span
                                className={`font-semibold text-2xl ${styles.paragraph}`}
                              >
                                ${mocktail?.price}
                              </span>
                            </h1>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <h1
                          className={`pt-2 md:pt-1 text-xs md:text-base ${styles.paragraph} text-slate-200 font-normal`}
                        >
                          {mocktail?.detail}
                        </h1>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row-reverse justify-between items-center">
                    <Link href={`/menu/food/${mocktail?.id}`}>
                      <div>
                        <Image
                          src={mocktail?.img}
                          alt="mocktail"
                          width={450}
                          height={450}
                        />
                      </div>
                    </Link>
                    <div className="flex flex-col md:pr-10 mt-2 mb-3 md:my-0">
                      <div className="flex">
                        <Link href={`/menu/food/${mocktail?.id}`}>
                          <div>
                            <h1
                              className={`text-xl md:text-2xl ${styles.text} text-[#FED18D] border-b-[1px] border-[#FED18D] font-medium`}
                            >
                              {mocktail?.isPopular ? (
                                <FaStarOfLife className="text-xs" />
                              ) : (
                                ""
                              )}{" "}
                              {mocktail?.name} &nbsp;&nbsp;{" "}
                              <span
                                className={`font-semibold text-2xl ${styles.paragraph}`}
                              >
                                ${mocktail?.price}
                              </span>
                            </h1>
                          </div>
                        </Link>
                      </div>
                      <div>
                        <h1
                          className={`pt-2 md:pt-1 text-xs md:text-base ${styles.paragraph} text-slate-200 font-normal`}
                        >
                          {mocktail?.detail}
                        </h1>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MocktailsIndividual;
