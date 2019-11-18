import React from 'react';

function GuestViewCard(props) {
    return (
        <div className='guest-card' key={Math.random()}>
            <img src={props.item_photo} width='100%'/>
            <h2>{props.wedding_location}</h2>
            <p>{props.wedding_theme}</p>
            
        </div>
    )
}

export default GuestViewCard;