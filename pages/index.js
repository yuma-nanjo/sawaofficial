import Head from "next/head";
import Image from "next/image";
import Masthead from "../components/Masthead";
import News from "../components/page/news";
import Live from "../components/page/live";
import Blog from "../components/page/blog";
import About from "../components/page/about";
import { Divider } from "@mui/material";

export default function Home() {
  return (
    <>
      {/* header */}
      <Masthead />
      {/* header */}
      <div className="sm:mx-10 md:mx-20 lg:mx-36">
      <About />
      <Divider style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        NEWS
      </Divider>
      <News />
      <Divider style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        LIVE
      </Divider>
      <Live />
      <Divider style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        BLOG
      </Divider>
      <Blog />
      <Divider style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        MUSIC
      </Divider>
      <Divider style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        MOVIE
      </Divider>
      <Divider style={{ marginTop: "1rem", marginBottom: "1rem" }}>SNS</Divider>
      </div>
    </>
  );
}
