import Image from "next/image";
import Link from "next/link";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function About() {
  return (
    <div className="relative w-full" id="top">
      <Image
        src="/main.jpg"
        alt="Top"
        quality={100}
        width={360}
        height={240}
        layout="responsive"
        objectFit="cover"
      ></Image>
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full">
        <p className="z-10 text-center">
          From 大塚Deepa
          <br />
          相当理解の早い
          <br />
          3ピースガールズバンドSAWA
        </p>
      </div>
      <div className="absolute w-full h-1/2 bottom-0 translate-y-1/4">
        <div className="z-10 absolute text-center w-1/3 text-[.5rem]">
          <p>
            ジュラ・ト・ドス<br></br>[Vo,Gu]
          </p>
          <Link href="https://mobile.twitter.com/_abcdc27_sw/">
            <div className="cursor-pointer">
              <TwitterIcon fontSize="inherit" />
              _abcdc27_sw
            </div>
          </Link>
          <Link href="https://www.instagram.com/____0c0___/">
            <div className="cursor-pointer">
              <InstagramIcon fontSize="inherit" />
              ____0c0___
            </div>
          </Link>
        </div>
        <div className="z-10 absolute text-center w-1/3 left-1/2 -translate-x-1/2 text-[.5rem]">
          <p>
            なおみのむし<br></br>[Dr,Cho]
          </p>
          <Link href="https://mobile.twitter.com/naomi0703mrm_sw/">
            <div className="cursor-pointer">
              <TwitterIcon fontSize="inherit" />
              naomi0703mrm_sw
            </div>
          </Link>
          <Link href="https://www.instagram.com/am1200_shiranai_sw/">
            <div className="cursor-pointer">
              <InstagramIcon fontSize="inherit" />
              am1200_shiranai_sw
            </div>
          </Link>
        </div>
        <div className="z-10 absolute text-center w-1/3 right-0 text-[.5rem]">
          <p>
            ｵｵﾔﾏ・ﾁｯﾎ<br></br>[Ba,Cho]
          </p>
          <Link href="https://mobile.twitter.com/ch_hh_sw/">
            <div className="cursor-pointer">
              <TwitterIcon fontSize="inherit" />
              ch_hh_sw
            </div>
          </Link>
          <Link href="https://www.instagram.com/ch_hh_sw/">
            <div className="cursor-pointer">
              <InstagramIcon fontSize="inherit" />
              ch_hh_sw
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
