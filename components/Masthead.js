import Image from "next/image";
import Link from "next/link";
import BottomNav from "./BottomNav";
import Navbar from "./Navbar";

export default function Masthead() {
  return (
    <>
      <div className="relative h-screen masthead">
        <div className="absolute w-full z-20 text-center">
          <Link href="/">
            <a>
              <Image
                src="/mark_white.png"
                width={150}
                height={150}
                quality={100}
                alt="SAWA logo"
              ></Image>
            </a>
          </Link>
        </div>
        <div className="absolute z-20 inset-0 mx-auto w-10/12 opacity-50">
          <Image
            src="/text_header_white.png"
            layout="fill"
            objectFit="scale-down"
            quality={100}
            alt="Text header"
          ></Image>
        </div>
        <div className="absolute z-10 inset-0">
          <Image
            src="/SAWA_header.png"
            quality={100}
            layout="fill"
            objectFit="scale-down"
            priority="false"
            alt="SAWA header"
          ></Image>
        </div>
        {/* navbar */}
        <Navbar />
        {/* navbar */}
        <div className="sm:hidden">
          <BottomNav />
        </div>
      </div>
    </>
  );
}
