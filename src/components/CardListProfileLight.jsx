import CardProfile from './CardProfile';
import FavouriteButton from './FavouriteButton';

import '../screens/LightSide.css';

const CardListProfileLight = ({ users, handleFavouriteClick, favouriteUsers }) => {

    return (
        <div className='light-cards'>
            {console.log('poulet', users)};
            {users
            .filter(user => user.affiliations.includes('New Republic') && user.name != 'Mon Mothma' || user.affiliations.includes('Galactic Republic') && user.name != 'Mon Mothma')
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

export default CardListProfileLight;