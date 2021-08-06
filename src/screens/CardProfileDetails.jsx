import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import axios from "axios";

import Header from "../components/Header";
import NavBar from "../components/NavBar";

import "./CardProfileDetails.css";
import HeartButton from "../components/HeartButton";

const CardProfileDetails = () => {
  const [details, setdetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const LoveDetail = () => {
      axios
        .get(`https://miadil.github.io/starwars-api/api/id/${id}.json`)
        .then((result) => setdetails(result.data));
    };

    LoveDetail();
  }, []);
  return (
    <>
      <Header />
      <NavBar />
      <Link to='/WallOfShame'>
        <button className='wookie-btn'>#BalanceTonWookie</button>
      </Link>
      <div className='details-profile'>
        <div className='details-image'>
          <img className='d-image' src={details.image} alt={details.name} />
        </div>
        <div className='details-character'>
          <div className='semple'>
            <div className='details-character-1'>
              <p>eye color : {details.eyeColor}</p>
              <p>age : {details.born}</p>
              <p>height : {details.height}</p>
            </div>
            <div className='details-character-1'>
              <p>homeworld : {details.homeworld}</p>
              <p>gender : {details.gender}</p>
              <p>species : {details.species}</p>
            </div>
          </div>
          <div className='details-yellowbox'>
            <div className='details-yellowbox-inside'>
              <HeartButton />
              <h4>{details.name}</h4>
              <br />
              <p>Masters : {details.masters}</p>
              <br />
              <p>Apprentices : {details.apprentices}</p>
              <br />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti autem, alias quo possimus numquam quis, aspernatur
                quia, unde reprehenderit dignissimos quisquam. At molestias
                voluptatum accusamus voluptates aliquid consequuntur expedita
                eligendi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProfileDetails;
