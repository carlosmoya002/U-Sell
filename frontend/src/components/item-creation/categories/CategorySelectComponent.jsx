import React from "react";
import Select from "react-select";
import CategoryOptions from "./CategoryOptions";

const CategorySelectComponent = ({ onChange }) => (
  <Select
    isMulti
    name="category-selection"
    options={CategoryOptions}
    className="basic-multi-select"
    classNamePrefix="select"
    onChange={onChange}
  />
);

export default CategorySelectComponent;
