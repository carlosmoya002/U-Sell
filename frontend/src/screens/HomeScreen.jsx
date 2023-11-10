import React, { useEffect, useState } from "react";
import ItemBox from "../components/ItemBox";

const HomeScreen = () => {
  const [items, setItems] = useState(null);
  const [field, setField] = useState("");
  const [value, setValue] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [noResultsMessage, setNoResultsMessage] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("/api/items/");
      const json = await response.json();

      if (response.ok) {
        setItems(json);
      }
    };

    fetchItems();
  }, []);

  const handleSearch = async () => {
    if (!field && !value) {
      setValidationMessage("Please select a filter and enter a search value.");
    } else if (!field) {
      setValidationMessage("Please select a filter.");
    } else if (!value) {
      setValidationMessage("Please enter a search value.");
    } else {
      try {
        const endpoint = `/api/items/${field}/${value}`;
        const response = await fetch(endpoint);
        const json = await response.json();

        if (response.ok) {
          setItems(json);
          setValidationMessage("");
          setNoResultsMessage(json.length === 0 ? "No results found." : "");
        }
      } catch (error) {
        console.error("An error occurred while searching items:", error);
      }
    }
  };

  const handleResetSearch = async () => {
    setField("");
    setValue("");
    setValidationMessage("");
    setNoResultsMessage("");

    try {
      const response = await fetch("/api/items/");
      const json = await response.json();

      if (response.ok) {
        setItems(json);
      }
    } catch (error) {
      console.error("An error occurred while resetting search:", error);
    }
  };

  return (
    <div className="item-search">
      {" "}
      <div className="search-bar">
        <select
          value={field}
          onChange={(e) => setField(e.target.value)}
          className="search-dropdown"
        >
          <option value="">Search By</option>
          <option value="name">Name</option>
          <option value="price">Price</option>{" "}
          <option value="condition">Condition</option>
          <option value="category">Category</option>
        </select>
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
        <button className="reset-button" onClick={handleResetSearch}>
          Reset
        </button>
        {validationMessage && (
          <p className="validation-message">{validationMessage}</p>
        )}
        {noResultsMessage && (
          <p className="no-results-message">{noResultsMessage}</p>
        )}
      </div>
      <br />
      <div className="items">
        {items && items.map((item) => <ItemBox key={item._id} item={item} />)}
      </div>
    </div>
  );
};

export default HomeScreen;
