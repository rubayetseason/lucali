import HeroMobile from "@/components/ui/Hero/HeroMobile";
import HeroPc from "@/components/ui/Hero/HeroPc";

export default function Home() {
  return (
    <div>
      <div className="hidden md:block">
        <HeroPc></HeroPc>
      </div>
      <div className="md:hidden">
        <HeroMobile></HeroMobile>
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid
        non minus ex accusantium nesciunt ullam quibusdam ipsam ratione,
        asperiores maiores esse velit! Ipsam minus, laborum ipsa voluptas
        officia magni et optio vitae molestias ut, harum nemo ipsum omnis eius
        culpa tempore eum perspiciatis sint dicta minima quam corporis libero.
      </div>
    </div>
  );
}
