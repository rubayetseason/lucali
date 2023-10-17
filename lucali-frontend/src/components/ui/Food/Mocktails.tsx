import { useMocktailsQuery } from "@/redux/api/foodApi";
import styles from "./Food.module.css";
import LoadingFood from "./LoadingFood";

const Mocktails = () => {
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
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-8 px-5">
        {mocktails &&
          mocktails.map((mocktail: any) => {
            return (
              <div className="" key={mocktail?.id}>
                <div className="flex justify-between">
                  <div>
                    <h1
                      className={`text-xl md:text-2xl ${styles.text} text-[#FED18D] border-b-[1px] border-[#FED18D] font-medium`}
                    >
                      {mocktail?.name}
                    </h1>
                  </div>
                  <div>
                    <h1
                      className={`pl-2 md:pl-1 text-lg md:text-xl ${styles.text} text-[#FED18D] font-bold`}
                    >
                      ${mocktail?.price}
                    </h1>
                  </div>
                </div>
                <div>
                  <h1
                    className={`pt-2 md:pt-1 text-xs md:text-base ${styles.paragraph} text-slate-200 font-normal`}
                  >
                    {mocktail?.detail}
                  </h1>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Mocktails;
