import React from 'react'
import PickYourSide from '../components/PickYourSide'
import NavBar from '../components/NavBar'
import Header from '../components/Header'

const Home = () => {
  return (
    <div class='h-max-screen'>
      <Header />
      <NavBar />
      <PickYourSide />
    </div>
  );
}

export default Home;