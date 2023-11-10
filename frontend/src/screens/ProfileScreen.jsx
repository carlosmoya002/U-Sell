import { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import ItemBox from "../components/ItemBox"; // Import the ItemBox component

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [userItems, setUserItems] = useState([]); // State to hold user items

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    setName(userInfo.name);
    getUserItems(); // Fetch user items when the component mounts
  }, [userInfo.name]);

  const getUserItems = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      // Make an API request to get user items
      const { data } = await axios.get("/api/items/user", config);

      setUserItems(data); // Update the user items state with the response data
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.log("Error fetching user items:", error);
    }
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <div className="d-flex align-items-center">
            <div className="mr-3">
              <img
                src={"../logo/logo.png"} // Replace with the profile picture URL from user data
                alt="Profile"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
            </div>
            <div>
              <Card.Text>{name}</Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>

      <div>
        <br />
        <h2>Your Listings</h2>
        {userItems.length === 0 ? (
          <p>No items found.</p>
        ) : (
          userItems.map((item) => <ItemBox key={item._id} item={item} />)
        )}
      </div>
    </div>
  );
};

export default ProfileScreen;
