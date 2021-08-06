import { useState } from "react";

const HeartButton = () => {
  const [like, setLike] = useState({
    open: false,
    fav: false,
    Transition: Slide,
  });

  const handleClick = (Transition) => () => {
    setLike({
      open: true,
      fav: !like.fav,
      Transition,
    });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setLike({
      ...like,
      open: false,
    });
  };

  return <div className='heart-icon'></div>;
};

export default HeartButton;
