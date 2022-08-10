import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MenuIcon from '@mui/icons-material/Menu';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="z-50 sm:hidden">
      <BottomNavigation
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Live"
          value="live"
          icon={<CalendarMonthIcon />}
        />
        <BottomNavigationAction
          label="Blog"
          value="blog"
          icon={<ArticleIcon />}
        />
        <BottomNavigationAction
          label="Contact"
          value="contact"
          icon={<EmailIcon />}
        />
        <BottomNavigationAction
          label="Menu"
          value="menu"
          icon={<MenuIcon />}
          onClick={()=>{
            console.log("Menuがクリックされました。")
          }}
        />
      </BottomNavigation>
    </div>
  );
}
