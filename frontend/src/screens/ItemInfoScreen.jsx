// ItemInfoScreen.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import ItemBox from "../components/ItemBox"; // Import the ItemBox component
import "../css/ItemInfoScreen.css"; // Include your CSS file

const ItemInfoScreen = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [similarItems, setSimilarItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`/api/items/${itemId}`);
        setItem(response.data);
      } catch (error) {
        setError("Error loading item details");
      }
    };

    fetchItem();
  }, [itemId]);

  useEffect(() => {
    const fetchSimilarItems = async () => {
      if (item) {
        try {
          // Fetch items with the same category (modify the API endpoint as needed)
          const response = await axios.get(
            `/api/items/category/${item.category}`
          );
          setSimilarItems(response.data);
        } catch (error) {
          console.error("Error loading similar items:", error);
        }
      }
    };

    fetchSimilarItems();
  }, [item]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!item) {
    return <p>Loading...</p>;
  }

  const { name, price, image, condition, description } = item;

  // Limit the number of similar items to a maximum of 3
  const limitedSimilarItems = similarItems.slice(0, 3);

  return (
    <div className="item-info-container">
      <Card className="item-card">
        <Row className="row">
          <Col md={7} className="item-image">
            <Card.Img src={`../uploads/${image}`} alt={name} />
          </Col>
          <Col md={5} className="info-section">
            <Card.Body>
              <Card.Title>
                <strong>{name}</strong>
              </Card.Title>
              <Card.Text>
                <strong>Price:</strong> ${price}
              </Card.Text>
              <Card.Text>
                <strong>Condition:</strong> {condition}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="description-section">
        <Card.Body>
          <Card.Title>Description</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
      <div className="similar-items-heading">Similar Items</div>
      <div className="item-search">
        <div className="similar-items">
          {limitedSimilarItems.map((similarItem) => (
            <ItemBox key={similarItem._id} item={similarItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemInfoScreen;
