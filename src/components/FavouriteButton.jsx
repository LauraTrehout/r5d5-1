import { useState } from "react";

const FavouriteButton = () => {
    const [isFavourite, setIsFavourite] = useState(false);

    return (
        <div>
            <button className='favourite-btn'
                onClick={() => setIsFavourite(!isFavourite)}>{isFavourite ? "Added to favourite" : 'Like'}</button>
        </div>
    );
}

export default FavouriteButton;