import React from "react";
import "./App.css";
import Main from "../src/components/Main"
import LeftMenu from "../src/components/LeftMenu"
import Nav from "../src/components/Nav"
import RightMenu from "../src/components/RightMenu"
import SideBar from "../src/components/sidebar/SideBar"

function App() {
  return (
    <div className="App">
      <Nav />
      <LeftMenu />
      <Main />
      <RightMenu />
      <SideBar />
    </div>
  );
}
export default App;
