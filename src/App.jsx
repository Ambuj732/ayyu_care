import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
function App() {
  return (
    <div>
      <div>
        <Carousel />
      </div>
    </div>
  );
}

export default App;
