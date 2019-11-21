import React from 'react';
import { Link } from "react-router-dom";

export default function PlannerCard (props) {
  console.log("PlannerCard.js", props);
  return(
    <div>
      <div>
      <img src={props.item_photo} />
      </div>
      <div>
      <p>{props.couple_name}</p>
      <p>{props.wedding_location}</p>
      <p>{props.wedding_photographer}</p>
      <p>{props.wedding_theme}</p>
      <p>{props.wedding_date}</p>
    </div>

    <Link
      to={{
        pathname: '/plannereditform',
        state: {
          event_id: props.event_id,
          couple_name: props.couple_name,
          item_photo: props.item_photo,
          wedding_location: props.wedding_location,
          wedding_photographer: props.wedding_photographer,
          wedding_theme: props.wedding_theme,
          wedding_date: props.wedding_date
        }
      }}
      >
        <button>Edit</button>
      </Link>

      <button onClick={() => props.Delete(props.event_id)}>Delete</button>
  </div>
  )
}


// import React from 'react';
// import {
//   Card, Button, CardImg, CardTitle, CardText, CardDeck,
//   CardSubtitle, CardBody
// } from 'reactstrap';

// const PlannerCard = (props) => {
//   return (
//       <Card>
//         <CardImg top width="100%" src={props.wedding.item_photo} alt="Card image cap" />
//         <CardBody>
//           <CardTitle>{props.wedding.couple_name}</CardTitle>
//           <CardSubtitle><b>Date</b>: {props.wedding.wedding_date}</CardSubtitle>
//           <CardText><b>Wedding Theme</b>: {props.wedding.wedding_theme}</CardText>
//           <Button>View</Button>
//         </CardBody>
//       </Card>
//   );
// };

// export default PlannerCard;
