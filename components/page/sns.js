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
import { Timeline, Follow } from "react-twitter-widgets";
import Insta from "./insta";

function Sns() {
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
              <TabList onChange={handleChange} aria-label="SAWA SNS">
                <Tab label="Instagram" value="1" />
                <Tab label="Twitter" value="2" />
              </TabList>
            </Box>
          </Center>
          <TabPanel value="1">
            <Insta />
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
  );
}

export default Sns;
