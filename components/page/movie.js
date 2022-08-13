import style from "../../styles/Youtube.module.css";
import YouTube from "react-youtube";
import { SimpleGrid } from "@chakra-ui/react";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Center } from "@chakra-ui/react";

function Movie() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Center>

          <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="SAWA MOVIES">
              <Tab label="MV" value="1" />
              <Tab label="LIVE" value="2" />
            </TabList>
          </Box>
          </Center>
          <TabPanel value="1">
            <div className="MV">
              <SimpleGrid minChildWidth="300px" spacing="10px">
                <YouTube
                  videoId="BuobgfXvbnY"
                  iframeClassName={style.iframe}
                  className={style.youtube}
                />
                <YouTube
                  videoId="iYjEO0PqkHI"
                  iframeClassName={style.iframe}
                  className={style.youtube}
                />
                <YouTube
                  videoId="Qzz5PBsrtvc"
                  iframeClassName={style.iframe}
                  className={style.youtube}
                />
              </SimpleGrid>
            </div>
          </TabPanel>
          <TabPanel value="2">
          <div className="LIVE">
              <SimpleGrid minChildWidth="400px" spacing="10px">
                <YouTube
                  videoId="Upl3GzsuuBI"
                  iframeClassName={style.iframe}
                  className={style.youtube}
                />
                <YouTube
                  videoId="HRi4QxaVxUg"
                  iframeClassName={style.iframe}
                  className={style.youtube}
                />
              </SimpleGrid>
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default Movie;
