import React from "react";
import "./App.css";
// import NavBar from "./Components/NavBar/NavBar";
// import Banner from "./Components/Banner/Banner";
// import RowPost from "./Components/RowPost/RowPost";
import YouTubeScreen from "./Components/youTubeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Screen from "./YoutubeContexs";

function App() {
  return (
    <Screen>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Screen" element={<YouTubeScreen />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Screen>
  );
}

export default App;
