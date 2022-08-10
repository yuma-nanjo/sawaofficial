import Head from "next/head";
import Image from "next/image";
import Masthead from "../components/Masthead";
import News from "../components/page/news";
import Live from "../components/page/live";
import Blog from "../components/page/blog"
import About from "../components/page/about"

export default function Home() {
  return (
    <>
      {/* header */}
      <Masthead />
      {/* header */}
      <div className="mb-10" id="top">
        <h1 className="text-center m-10 text-2xl">NEWS</h1>
        <News />
      </div>
      <div className="mb-10">
        <h1 className="text-center m-10 text-2xl">LIVE</h1>
        <Live />
      </div>
      <div className="mb-10">
        <h1 className="text-center m-10 text-2xl">BLOG</h1>
        <Blog />
      </div>
      <div className="mb-10">
        <h1 className="text-center m-10 text-2xl">ABOUT</h1>
        <About />
      </div>
      <div className="mb-10">
        <h1 className="text-center m-10 text-2xl">MUSIC</h1>
        {/* <Music /> */}
      </div>
      <div className="mb-10">
        <h1 className="text-center m-10 text-2xl">MOVIE</h1>
        {/* <Movie /> */}
      </div>
      <div className="mb-10">
        <h1 className="text-center m-10 text-2xl">SNS</h1>
        {/* <Instagram /> */}
        {/* <Twitter /> */}
      </div>
    </>
  );
}
