import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import axios from "axios";

const ItemInfoScreen = () => {
  const { itemId } = useParams();
  const [error, setError] = useState(null);

  // Assume the item ID is already provided as a string
  const item = { id: itemId };

  useEffect(() => {
    const fetchItem = async () => {
      try {
        // You can make an API request to fetch additional details based on the item ID
        // For simplicity, we are just displaying the ID here
        // const response = await axios.get(`/api/items/${itemId}`);
        // setItem(response.data);
      } catch (error) {
        setError("Error loading item details");
      }
    };

    fetchItem();
  }, [itemId]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="item-info-container">
      <Card>
        <Card.Body>
          <Card.Title>Item Details</Card.Title>
          <Card.Text>
            <strong>Item ID:</strong> {item.id}
          </Card.Text>
          {/* You can add more details as needed */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemInfoScreen;
