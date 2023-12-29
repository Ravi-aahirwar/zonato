import React from "react";
import css from "./HomePageBanner.module.css";
import bannerOne from "/banners/banner1.jpg";
import MobileNavbar from "../navbar/MobileNavbar/MobileNavbar";
import { useState } from "react";
import NavigationBar from "../navbar/NavigationBar/NavigationBar";
export default function HomePageBanner() {
  let [toggleMenu, setToggleMenu] = useState(true);
  let toggleBanner = toggleMenu ? (
    <div className={css.bannerOnediv}>
      <NavigationBar setToggleMenu={setToggleMenu} toogleMenu={toggleMenu} />
      <img className={css.bannerOne} src={bannerOne} alt="Banner 1" />
      <div className={css.bannerTxt}>
        <div className={css.bannerTitle}> Zonato </div>
        <div className={css.bannerTag}></div>
        <div className={css.bannerSearchBar}>
          <div className={css.outerDiv}>
            <div>Find the best restaurants, cafés and bars in India</div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <MobileNavbar />
  );
  return toggleBanner;
}
