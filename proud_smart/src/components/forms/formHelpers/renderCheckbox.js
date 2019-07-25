import React from "react";
import { Checkbox } from "antd";

const renderCheckbox = ({ input, label }) => (
  <span>
    <label>{label}</label>
    <Checkbox
      label={label}
      checked={input.value ? true : false}
      onChange={input.onChange}
    />
  </span>
);

export default renderCheckbox;
