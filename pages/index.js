import Error from "next/error";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Masthead from "../components/Masthead";
import News from "../components/page/news";
import Live from "../components/page/live";
import Blog from "../components/page/blog";
import About from "../components/page/about";
import Music from "../components/page/music";
import Movie from "../components/page/movie";
import { Divider } from "@mui/material";
import { Timeline, Follow } from "react-twitter-widgets";
import { Center } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useRouter } from "next/router";

export async function getStaticProps() {
  const user_name = "sawa_officialgram"; //ビジネスorクリエイターアカウントの必要あり
  const access_token = process.env.NEXT_PUBLIC_INSTAGRAMTOKEN;
  const user_id = process.env.NEXT_PUBLIC_INSTAGRAMID;
  const get_count = 9; //取得したい投稿数

  const res = await fetch(
    `https://graph.facebook.com/v14.0/${user_id}?fields=business_discovery.username(${user_name}){id,followers_count,media_count,ig_id,media.limit(${get_count}){caption,media_url,like_count}}&access_token=${access_token}`
  );
  const posts = await res.json();

  return {
    props: {
      images: posts.business_discovery.media.data,
    },
  };
}

export default function Home(images) {
  const { isFallback } = useRouter();
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (isFallback) {
    return <></>;
  }

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
        <Music />
        <Divider style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          MOVIE
        </Divider>
        <Movie />
        <Divider style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          SNS
        </Divider>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Center>
              <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
                <TabList onChange={handleChange} aria-label="SAWA SNS">
                  <Tab label="Instagram" value="1" />
                  <Tab label="Twitter" value="2" />
                </TabList>
              </Box>
            </Center>
            <TabPanel value="1">
              {/* instagram */}
              <SimpleGrid minChildWidth="360px" spacing="10px">
                {images.images.map((image) => (
                  <Image
                    src={image.media_url}
                    width={360}
                    height={360}
                    alt="image"
                    objectFit="cover"
                    key={image.id}
                  />
                ))}
              </SimpleGrid>
            </TabPanel>
            <TabPanel value="2">
              <Center>
                <Timeline
                  dataSource={{
                    sourceType: "profile",
                    screenName: "official_sawa",
                  }}
                  options={{ theme: "dark", width: "400", height: "800" }}
                />
              </Center>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </>
  );
}
