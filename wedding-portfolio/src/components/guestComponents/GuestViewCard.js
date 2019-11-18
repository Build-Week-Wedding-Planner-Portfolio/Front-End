import React from 'react';
import styled from 'styled-components'

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
            <p>{props.wedding_theme}</p>
            
        </GuestCard>
    )
}

export default GuestViewCard;