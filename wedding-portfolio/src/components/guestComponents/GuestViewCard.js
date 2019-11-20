import React from 'react';

import styled from 'styled-components'
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
const GuestCard = styled.div`
background: #f6f6f6;
color: #420700;
box-shadow: 10px 10px 8px white;
border-radius: 5%;
width: 20%;
margin: 1%;
padding: 1%;
`;

function GuestViewCard(props) {
    return (
        <GuestCard className='guest-card' key={Math.random()}>
            <img src={props.item_photo} width='100%'/>
            <h2>{props.wedding_location}</h2>
            <p>{props.wedding_date}</p>
            <p>Theme: {props.wedding_theme}</p>
            <h5>{props.couple_name}</h5>
            <p><small>Photographer: {props.wedding_photographer}</small></p>
            <Link to={`/testplannerportfolio/${props.user_id}`}>
                <Button> View Planner</Button>
            </Link>
        </GuestCard>

    )
}

export default GuestViewCard;

