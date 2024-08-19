import React from 'react';
import './poojaCard.css';

const PoojaCard = ({ title, imgSrc, description, occassion,location, transport }) => {
    return (
        <div className="pooja-card w-fit">
            <img src={imgSrc} alt={title} height="300px" width="400px" className="pooja-image" />
            <div>
            <h3>{title}</h3>
            {/* <p>{description}</p> */}
            <p>Occassion: {occassion}</p>
            <p><strong>Location:</strong> {location}</p>
            {/* <p><strong>Transport:</strong> {transport}</p> */}
            
            <button>Book Now</button>
            </div>
            {/* Add more details as needed */}
        </div>
    );
};

export default PoojaCard;