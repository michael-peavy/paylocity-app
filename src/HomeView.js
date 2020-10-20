import React from "react";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widget from "./Widget";

function HomeView() {
  return (
    <>
        <Sidebar />
        <Feed />
        <Widget />
    </>
  );
}

export default HomeView;
