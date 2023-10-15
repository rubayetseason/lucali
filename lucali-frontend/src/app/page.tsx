import Discover from "@/components/ui/Hero/Discover";
import HeroMobile from "@/components/ui/Hero/HeroMobile";
import HeroPc from "@/components/ui/Hero/HeroPc";
import Opening from "@/components/ui/Hero/Opening";

export default function Home() {
  return (
    <div>
      <div className="hidden md:block">
        <HeroPc></HeroPc>
      </div>
      <div className="md:hidden">
        <HeroMobile></HeroMobile>
      </div>
      <div className="py-10 bg-[#040E10]">
        <Discover></Discover>
      </div>
      <div className="py-10 bg-[#061115]">
        <Opening></Opening>
      </div>
    </div>
  );
}
