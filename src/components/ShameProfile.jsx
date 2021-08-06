import './ShameProfile.css';
import Wanted from '../assets/wanted-yellow.jpg';

const ShameProfile = ({ id, name, image }) => {
    return (
        <div className="shame-profile">
            <img src={Wanted} className='wanted' />
            <img src={image} className='shame-profile-img' />
        </div>

    );
}

export default ShameProfile;