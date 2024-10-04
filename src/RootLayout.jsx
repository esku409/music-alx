import React from "react";
import Sidebar from "./components/navigation/Sidebar";
import Player from "./components/player/Player";
import SearchBar from "./components/searchbar/SearchBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="wrapper">
      <Sidebar />

      <div className="main-container">
        <SearchBar />

        <main><Outlet/></main>
      </div>

      <Player />
    </div>
  );
};

export default RootLayout;
