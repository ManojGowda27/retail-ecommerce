import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Announcements from "../components/Announcement/Announcements";
import Slider from "../components/Slider/Slider";

const Landingpage = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Landingpage;
