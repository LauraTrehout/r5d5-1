import { useState, useEffect } from 'react';

import Header from './Header';
import NavBar from './NavBar';
import CardListFavourite from './CardListFavourite';

const Favourites = () => {
const [favouriteUsers, setFavouriteUsers] = useState([]);


useEffect(() => {
    const getFavourite = () => {
    const storeFavourite = JSON.parse(localStorage.getItem('favourite'))
    setFavouriteUsers(storeFavourite);
    }
    getFavourite()
}, [])
console.log('poulet', favouriteUsers);
    return (
        <>
            <Header />
            <NavBar />
                <CardListFavourite favouriteUsers={favouriteUsers} />}

        </>
    );
}

export default Favourites;