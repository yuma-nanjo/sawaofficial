import Image from "next/image";
import Link from "next/link";
import BottomNav from "./BottomNav";
import Navbar from "./Navbar";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Link as Scroll } from "react-scroll";

export default function Masthead() {
  return (
    <>
      <div className="relative min-h-screen masthead flex flex-col bg-black">
        <div className="absolute w-full z-20 text-center">
          <Link href="/">
            <a>
              <Image
                src="/mark_white.png"
                width={150}
                height={150}
                quality={100}
                alt="SAWA logo"
                objectFit="responsive"
              ></Image>
            </a>
          </Link>
        </div>
        <div className="absolute h-1/3 w-full inset-0 m-auto opacity-50 z-10 pointer-events-none">
          <Image
            src="/text_header_white.png"
            layout="fill"
            objectFit="contain"
            quality={100}
            alt="Text header"
          ></Image>
        </div>
        <div className="absolute inset-0  pointer-events-none bg-black">
          <Image
            src="/SAWA_header.png"
            quality={100}
            layout="fill"
            objectFit="contain"
            priority="false"
            alt="SAWA header"
          ></Image>
        </div>
        <div className="left-[50%] translate-x-[-50%] m-auto absolute bottom-20 text-center justify-center items-center z-30 cursor-pointer">
          <div className="animate-bounce">
            <Scroll to="top" smooth={true} offset={-50}>
              <KeyboardDoubleArrowDownIcon />
            </Scroll>
          </div>
        </div>
        {/* navbar */}
        <Navbar />
        {/* navbar */}
        <BottomNav />
      </div>
    </>
  );
}
