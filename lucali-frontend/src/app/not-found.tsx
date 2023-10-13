import Image from "next/image";
import img from "../assets/404Error.gif";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-[#0F0D0D]">
      <div className="">
        <Image src={img} alt="404-image" width={300} />
        <div className="text-center pt-3">
          <Link href={"/"}>
            <button className="btn">Back to home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
