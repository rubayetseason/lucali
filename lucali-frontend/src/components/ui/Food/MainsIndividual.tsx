import { useMainsQuery } from "@/redux/api/foodApi";
import styles from "./Food.module.css";
import LoadingFood from "./LoadingFood";
import Image from "next/image";

const MainsIndividual = () => {
  const query: Record<string, any> = {};

  query["limit"] = 10;
  query["page"] = 1;

  const { data, isLoading } = useMainsQuery({ ...query });
  const mains = data?.food?.data;

  if (isLoading) {
    return <LoadingFood></LoadingFood>;
  }

  return (
    <div>
      <div>
        <h1
          className={`text-center  text-4xl md:text-5xl ${styles.text} text-[#FED18D] font-bold tracking-widest`}
        >
          Our Mains
        </h1>
      </div>
      <div className="w-full md:w-2/3 mx-auto py-10 flex flex-col gap-8 px-5">
        {mains &&
          mains.map((main: any, i: number) => {
            return (
              <div className="" key={main?.id}>
                {i % 2 ? (
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <div>
                      <Image
                        src={main?.img}
                        alt="main"
                        width={450}
                        height={450}
                      />
                    </div>
                    <div className="flex flex-col md:pl-10 mt-2 mb-3 md:my-0">
                      <div className="flex">
                        <div>
                          <h1
                            className={`text-xl md:text-2xl ${styles.text} text-[#FED18D] border-b-[1px] border-[#FED18D] font-medium`}
                          >
                            {main?.name} &nbsp;&nbsp;{" "}
                            <span
                              className={`font-semibold text-2xl ${styles.paragraph}`}
                            >
                              ${main?.price}
                            </span>
                          </h1>
                        </div>
                      </div>
                      <div>
                        <h1
                          className={`pt-2 md:pt-1 text-xs md:text-base ${styles.paragraph} text-slate-200 font-normal`}
                        >
                          {main?.detail}
                        </h1>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row-reverse justify-between items-center">
                    <div>
                      <Image
                        src={main?.img}
                        alt="main"
                        width={450}
                        height={450}
                      />
                    </div>
                    <div className="flex flex-col md:pr-10 mt-2 mb-3 md:my-0">
                      <div className="flex">
                        <div>
                          <h1
                            className={`text-xl md:text-2xl ${styles.text} text-[#FED18D] border-b-[1px] border-[#FED18D] font-medium`}
                          >
                            {main?.name} &nbsp;&nbsp;{" "}
                            <span
                              className={`font-semibold text-2xl ${styles.paragraph}`}
                            >
                              ${main?.price}
                            </span>
                          </h1>
                        </div>
                      </div>
                      <div>
                        <h1
                          className={`pt-2 md:pt-1 text-xs md:text-base ${styles.paragraph} text-slate-200 font-normal`}
                        >
                          {main?.detail}
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

export default MainsIndividual;
