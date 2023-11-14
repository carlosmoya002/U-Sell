import React from "react";
import Select from "react-select";
import ConditionOptions from "./ConditionOptions";

const ConditionSelectComponent = ({ onChange }) => (
  <Select
    isMulti
    name="condition-selection"
    options={ConditionOptions}
    className="basic-multi-select"
    classNamePrefix="select"
    onChange={onChange}
  />
);

export default ConditionSelectComponent;
