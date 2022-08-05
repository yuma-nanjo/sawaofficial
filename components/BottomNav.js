import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ArticleIcon from "@mui/icons-material/Article";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import MenuIcon from '@mui/icons-material/Menu';
import Paper from "@mui/material/Paper";

export default function BottomNav() {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="BLOG" icon={<ArticleIcon />} />
          <BottomNavigationAction label="LIVE" icon={<CalendarMonthIcon />} />
          <BottomNavigationAction label="CONTACT" icon={<ContactMailIcon />} />
          {/* clickするとメニューが出てくる */}
          <BottomNavigationAction label="MENU" icon={<MenuIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
