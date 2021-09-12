import { useState, useEffect } from 'react';

import Header from './Header';
import NavBar from './NavBar';
import CardListFavourite from './CardListFavourite';

const Favourites = () => {
    const [favouriteUsers, setFavouriteUsers] = useState([]);

const removeFavourite = (user) => {
    const newFavouriteList = favouriteUsers.filter(favourite => favourite.id !== user.id);
    setFavouriteUsers(newFavouriteList);
    localStorage.setItem('favourite', JSON.stringify(newFavouriteList));
}

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
            <CardListFavourite handleFavouriteClick={removeFavourite} favouriteUsers={favouriteUsers} />
        </>
    );
}

export default Favourites;