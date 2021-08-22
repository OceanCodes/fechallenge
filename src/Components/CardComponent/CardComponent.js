import React from "react";
import Card from "react-bootstrap/Card";
import userPic from "../../Assets/userPic.png";
import "./CardComponent.css";

function CardComponent(props) {
  const { element } = props;

  return (
    <>
      <Card className="a-card-container">
        <Card.Img variant="top" className="card-pic" src={userPic} style={{width: "50%"}} />
        <Card.Body>
          <Card.Title className="card-title">
            {element.firstName} {element.lastName}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted" className="card-sub">
            "{element.catchPhrase}"
          </Card.Subtitle>
          <Card.Text>{element.comments}</Card.Text>
          <Card.Link href={"mailto:" + element.email} className="card-link">
            {element.email}
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardComponent;
