import Image from "next/image";
import img from "../assets/error.gif";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-[#061115]">
      <div className="">
        <Image src={img} alt="404-image" width={300} />
        <div className="text-center pt-3">
          <Link href={"/"}>
            <button className="border-t-2 border-b-2 border-[#FED18D] px-2 py-3">
              Back to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
