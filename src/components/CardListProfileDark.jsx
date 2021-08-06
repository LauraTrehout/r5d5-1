import CardProfile from './CardProfile';
import FavouriteButton from './FavouriteButton';

import '../screens/DarkSide.css';

const CardListProfileDark = ({ users, handleFavouriteClick, favouriteUsers }) => {

    return (
        <div className='dark-cards'>
            {users
                .filter(user => user.affiliations.includes('Sith') && user.name != 'Mon Mothma' || user.affiliations.includes('Galactic Empire') && user.name != 'Mon Mothma')
                .map(user => (
                    <div>
                        <CardProfile
                            key={user.id} {...user} />
                            <div onClick={() => handleFavouriteClick(user)}>
                                <FavouriteButton />
                            </div>
                    </div>
                ))}
        </div>
    )
}

export default CardListProfileDark;