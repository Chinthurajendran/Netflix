import React from "react";
import Banner from "../Components/Banner/Banner";
import NavBars from "../Components/NavBar/NavBars";
import RowPost from "../Components/RowPost/RowPost";
import {
  originals,
  ActionMovies,
  ComedyMovies,
  HorrorMovies,
  RomanceMovies,
} from "../Components/urls";

function Home() {
  return (
    <div>
        <Banner />
        <NavBars />
        <RowPost url={originals} title="Netflix Originals" />
        <RowPost url={ActionMovies} title="Action" isSmall />
        <RowPost url={ComedyMovies} title="Comedy" isSmall />
        <RowPost url={HorrorMovies} title="Horror" isSmall />
        <RowPost url={RomanceMovies} title="Romance" isSmall />
    </div>
  );
}

export default Home;
