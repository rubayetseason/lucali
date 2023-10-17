"use client";

import Starters from "./Food/Starters";
import Mains from "./Food/Mains";
import Desserts from "./Food/Desserts";
import Mocktails from "./Food/Mocktails";

const Menu = () => {
  return (
    <div>
      <div className="pt-16 pb-10 md:pb-7 bg-[#0F1D22]">
        <Starters></Starters>
      </div>
      <div className="pb-10 md:pb-7 bg-[#0F1D22]">
        <Mains></Mains>
      </div>
      <div className="pb-10 md:pb-7 bg-[#0F1D22]">
        <Desserts></Desserts>
      </div>
      <div className="pb-16 bg-[#0F1D22]">
        <Mocktails></Mocktails>
      </div>
    </div>
  );
};

export default Menu;
