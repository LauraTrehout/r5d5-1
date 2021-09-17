import React from "react";
import missa from "../assets/jarjar.png";
import hansolo from "../assets/han-solo.png";
import { Link, useHistory } from "react-router-dom";
import "./PickYourSide.css";

const Side = () => {
  const history = useHistory();

  // const handleClick = (event, side) => {
  //   event.target.style.animation = "rotation 3s infinite ease-in";
  //   event.target.style.width = "2000px"
  //   event.target.style.height = "2000px"
  //   event.target.style.transition = "height 5s, width 5s";
  //   event.preventDefault();
  //   if (side === 'light') {
  //     setTimeout(() => history.push('/lightSide'), 1500);
  //   } else if (side === 'dark')
  //     {
  //       setTimeout(() => history.push('/darkSide'), 1500);
  //     }
  // }

  return (
    <div className="grand-side">
      <div className="parent-side light">
        <div className="child-side light">
          <h2 className="pick-yo">PICK YO</h2>
          <Link to="/lightside">
            {/* <button onClick={(e) => handleClick(e, 'light')}> */}
            <img className="missa" src={missa} alt="the light side" />
            {/* </button> */}
          </Link>
          <p className="relationship">Relationship</p>
        </div>
      </div>
      <div className="parent-side dark">
        <div className="child-side dark">
          <h2 className="ur-side">UR SIDE</h2>
          <Link to="/darkside">
            {/* <button onClick={(e) => handleClick(e, 'dark')}> */}
            <img className="hansolo" src={hansolo} alt="the dark side" />
            {/* </button> */}
          </Link>
          <p className="stand">One night stand</p>
        </div>
      </div>
    </div>
  );
};

export default Side;
