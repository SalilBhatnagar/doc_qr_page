import React from "react";
import Banner from "../Component/Banner";
import LowerContent from "../Component/LowerContent";
import TopBanner from "../Component/TopBanner";
//import BlankPage from "../Component/BlankPage";

export default function Home() {
  return (
    <div className="main">
      <TopBanner />
      <Banner />
      <LowerContent />

    </div>
  );
}
