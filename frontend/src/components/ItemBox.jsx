import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/EventBox.css";

const ItemBox = ({ item }) => {
  const { _id, name, price, image } = item;

  return (
    <div className="event-box">
      <Link
        to={`/itemInfo/${_id}`}
        className="item-link"
        style={{ textDecoration: "none" }}
      >
        <Card className="item-card">
          <div className="event-image">
            <Card.Img src={`../uploads/${image}`} />
          </div>
          <Card.Body className="info-section">
            <Card.Text>
              <strong>{name}</strong>
              <br />
              <strong>${price}</strong>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default ItemBox;
