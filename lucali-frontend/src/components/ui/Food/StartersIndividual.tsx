import { useStartersQuery } from "@/redux/api/foodApi";
import styles from "./Food.module.css";
import LoadingFood from "./LoadingFood";
import Link from "next/link";
import Image from "next/image";

const StartersIndividual = () => {
  const query: Record<string, any> = {};

  query["limit"] = 10;
  query["page"] = 1;

  const { data, isLoading } = useStartersQuery({ ...query });
  const starters = data?.food?.data;

  if (isLoading) {
    return <LoadingFood></LoadingFood>;
  }

  return (
    <div>
      <div>
        <h1
          className={`text-center text-4xl md:text-5xl ${styles.text} text-[#FED18D] font-bold tracking-widest`}
        >
          Our Starters
        </h1>
      </div>
      <div className="w-full md:w-2/3 mx-auto py-10 flex flex-col gap-8 px-5">
        {starters &&
          starters.map((starter: any, i: number) => {
            return (
              <div className="" key={starter?.id}>
                {i % 2 ? (
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <div>
                      <Image
                        src={starter?.img}
                        alt="starter"
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
                            {starter?.name} &nbsp;&nbsp;{" "}
                            <span
                              className={`font-semibold text-2xl ${styles.paragraph}`}
                            >
                              ${starter?.price}
                            </span>
                          </h1>
                        </div>
                      </div>
                      <div>
                        <h1
                          className={`pt-2 md:pt-1 text-xs md:text-base ${styles.paragraph} text-slate-200 font-normal`}
                        >
                          {starter?.detail}
                        </h1>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row-reverse justify-between items-center">
                    <div>
                      <Image
                        src={starter?.img}
                        alt="starter"
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
                            {starter?.name} &nbsp;&nbsp;{" "}
                            <span
                              className={`font-semibold text-2xl ${styles.paragraph}`}
                            >
                              ${starter?.price}
                            </span>
                          </h1>
                        </div>
                      </div>
                      <div>
                        <h1
                          className={`pt-2 md:pt-1 text-xs md:text-base ${styles.paragraph} text-slate-200 font-normal`}
                        >
                          {starter?.detail}
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

export default StartersIndividual;

{
  /* <div className="flex justify-between">
                  <Link href={`/menu/food/${starter?.id}`}>
                    <div>
                      <h1
                        className={`text-xl md:text-2xl ${styles.text} text-[#FED18D] border-b-[1px] border-[#FED18D] font-medium`}
                      >
                        {starter?.name}
                      </h1>
                    </div>
                  </Link>
                  <div>
                    <h1
                      className={`pl-2 md:pl-1 text-lg md:text-xl ${styles.text} text-[#FED18D] font-bold`}
                    >
                      ${starter?.price}
                    </h1>
                  </div>
                </div>
                <div>
                  <h1
                    className={`pt-2 md:pt-1 text-xs md:text-base ${styles.paragraph} text-slate-200 font-normal`}
                  >
                    {starter?.detail}
                  </h1>
                </div> */
}
