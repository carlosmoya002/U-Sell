// ItemBox.jsx
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/ItemBox.css";

const ItemBox = ({ item, onItemClick }) => {
  const { _id, name, price, image } = item;

  const handleItemClick = () => {
    // Call the provided onItemClick function with the item data
    onItemClick(item);
  };

  return (
    <div className="item-box">
      <Link
        to={`/itemInfo/${_id}`}
        className="item-link"
        style={{ textDecoration: "none" }}
        onClick={handleItemClick}
      >
        <Card className="item-card">
          <div className="item-image">
            <Card.Img className="item-img" src={`../uploads/${image}`} />
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
