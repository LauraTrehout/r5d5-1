import './ShameProfile.css';

const ShameProfile = ({ id, name, image }) => {
    return (
        <div className="shame-profile">
            <h3>{name}</h3>
            <img src={image} className='shame-profile-img' />
        </div>

    );
}

export default ShameProfile;