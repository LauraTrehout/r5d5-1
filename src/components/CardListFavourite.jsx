import CardProfile from './CardProfile';
import RemoveFavourite from './RemoveButton';

import '../screens/DarkSide.css';


const CardListFavourite = ({ user, favouriteUsers, handleFavouriteClick }) => {

    return (
        <div className='dark-cards'>
            {favouriteUsers.map(user => (
                <div>
                    <CardProfile {...user} />
                    <div onClick={() => { handleFavouriteClick(user) }}>
                        <RemoveFavourite />
                    </div>
                </div>
            ))}
        </div>
    )
            }

    export default CardListFavourite;