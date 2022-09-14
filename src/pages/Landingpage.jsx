import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Announcements from "../components/Announcement/Announcements";
import Slider from "../components/Slider/Slider";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";

const Landingpage = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Landingpage;
