// import { useState } from "react";

const HeartButton = () => {
  //   const [like, setLike] = useState({
  //     open: false,
  //     fav: false,
  //     Transition: Slide,
  //   });

  //   const handleClick = (Transition) => () => {
  //     setLike({
  //       open: true,
  //       fav: !like.fav,
  //       Transition,
  //     });
  //   };

  //   const handleClose = (event, reason) => {
  //     if (reason === "clickaway") {
  //       return;
  //     }
  //     setLike({
  //       ...like,
  //       open: false,
  //     });
  //   };

  return (
    <div className='heart-icon'>
      <button class='absolute top-0 '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          class='h-6 w-6'
          fill='false'
          hover='true'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
          />
        </svg>
      </button>
    </div>
  );
};

export default HeartButton;
