
import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

const PlannerCard = (props) => {
  return (
      <Card>
        <CardImg top width="100%" src={props.wedding.item_photo} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.wedding.couple_name}</CardTitle>
          <CardSubtitle><b>Date</b>: {props.wedding.wedding_date}</CardSubtitle>
          <CardText><b>Wedding Theme</b>: {props.wedding.wedding_theme}</CardText>
          <Button>View</Button>
        </CardBody>
      </Card>
  );
};

export default PlannerCard;
