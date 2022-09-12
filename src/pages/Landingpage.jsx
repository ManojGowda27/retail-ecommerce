import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Announcements from "../components/Announcement/Announcements";
import Slider from "../components/Slider/Slider";
import Categories from "../components/Categories/Categories";

const Landingpage = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories/>
    </div>
  );
};

export default Landingpage;
