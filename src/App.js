import React from "react";
import { Switch, Route } from "react-router-dom";
import DarkSide from "./screens/DarkSide";
import LightSide from "./screens/LightSide";
import Home from "./screens/Home";
import WelcomePage from "./screens/WelcomePage";
import CardProfileDetails from "./screens/CardProfileDetails";
import MyProfile from "./screens/MyProfile";
import WallOfShame from "./screens/WallOfShame";
import Search from "./screens/Search";

import "./App.css";
import "tailwindcss/tailwind.css";
import Connexion from "./components/Connexion";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <WelcomePage />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/darkside'>
          <DarkSide />
        </Route>
        <Route path='/lightside'>
          <LightSide />
        </Route>
        <Route path='/profile/:id'>
          <CardProfileDetails />
        </Route>
        <Route path='/myprofile'>
          <MyProfile />
        </Route>
        <Route path='/WallOfShame'>
          <WallOfShame />
        </Route>
        <Route path='/Search'>
          <Search />
        </Route>
        <Route path='/Connexion'>
          <Connexion />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
