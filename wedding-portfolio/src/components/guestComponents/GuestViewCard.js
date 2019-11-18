import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

function GuestViewCard(props) {
    return (
        <div className='guest-card' key={Math.random()}>
            <img src={props.item_photo} width='50%'/>
            <h2>{props.wedding_location}</h2>
            <p>{props.wedding_theme}</p>
            <Link to={`/testplannerportfolio/${props.user_id}`}>
                <Button> View Planner</Button>
            </Link>


        </div>
    )
}

export default GuestViewCard;
