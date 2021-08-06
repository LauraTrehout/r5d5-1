

import CardProfile from './CardProfile';
import FavouriteButton from './FavouriteButton';

import '../screens/DarkSide.css';
import CardListProfile from './CardListProfile';

const CardListFavourite = ({ users, handleFavouriteClick, favouriteUsers }) => {

    return (
        <div className='dark-cards'>
        {favouriteUsers.map(user => <CardProfile {...user} />)}
        </div>
    )
}

export default CardListFavourite;