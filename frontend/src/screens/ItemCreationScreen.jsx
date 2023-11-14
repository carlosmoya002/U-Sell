import React, { useState } from "react";
import ErrorMsg from "../components/ErrorMsg";
import { useCreateItemMutation } from "../slices/itemApiSlice";
import { useSelector } from "react-redux";
import "../css/ItemCreationScreen.css";
import ConditionSelectComponent from "../components/item-creation/conditions/ConditionSelectComponent"; // Import the ConditionSelectComponent
import CategorySelectComponent from "../components/item-creation/categories/CategorySelectComponent"; // Import the CategorySelectComponent

const ItemCreationScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [condition, setCondition] = useState([]);
  const [category, setCategory] = useState([]);
  const [error, setError] = useState("");

  const { userInfo } = useSelector((state) => state.auth);

  // State to store the selected image file
  const [imageFile, setImageFile] = useState(null);

  // Handler to handle the image file selection
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const [createItem, { isLoading }] = useCreateItemMutation(); // Use the createItem mutation

  const handleSubmit = async (e) => {
    e.preventDefault();

    // FormData to store the item data, including the image file
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);

    // Extract the values from condition objects and append to formData
    const conditionValues = condition.map(
      (conditionType) => conditionType.value
    );
    formData.append("condition", conditionValues.join(","));

    // Extract the values from category objects and append to formData
    const categoryValues = category.map((categoryType) => categoryType.value);
    formData.append("category", categoryValues.join(","));

    if (!name || !price || !description || condition.length === 0) {
      setError("ERROR: Please fill all the fields");
      return;
    }

    try {
      await createItem(formData); // Use the formData in the API call
      setName("");
      setPrice("");
      setDescription("");
      setCondition([]);
      setCategory([]);
      setImageFile(null);
      setError(null);
      console.log("New item created!");
    } catch (error) {
      setError("An error occurred while creating the item.");
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="item-creation-form">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className="logo"
            src={"../logo/logo.png"}
            alt="Logo"
            style={{ width: "150px", height: "150px" }}
          />
        </div>
        <label>
          Name of Item:
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            name="price"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Item Condition:
          <ConditionSelectComponent
            value={condition}
            onChange={(selectedOptions) => setCondition(selectedOptions)}
          />
        </label>
        <br />
        <label>
          Item Category:
          <CategorySelectComponent
            value={category}
            onChange={(selectedOptions) => setCategory(selectedOptions)}
          />
        </label>
        <br />
        <label>
          Item Image:
          <input type="file" accept="image/*" onChange={handleImageSelect} />
        </label>
        <br />
        <button
          type="submit"
          disabled={isLoading}
          style={{ backgroundColor: "#36213e" }}
        >
          {isLoading ? "Creating Item..." : "Create Item"}
        </button>
      </form>

      <ErrorMsg error={error} />
    </div>
  );
};

export default ItemCreationScreen;
