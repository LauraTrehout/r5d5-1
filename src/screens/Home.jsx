import React from "react";
import PickYourSide from "../components/PickYourSide";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Connexion from "../components/Connexion";

const Home = () => {
  return (
    <div class='max-h-full'>
      <Header />
      <NavBar />
      <PickYourSide />
      <Connexion />
    </div>
  );
};

export default Home;
