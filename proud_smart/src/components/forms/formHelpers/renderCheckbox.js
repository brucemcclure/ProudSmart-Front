import React from "react";
import { Checkbox } from "antd";

const renderCheckbox = ({ input, label }) => (
  <container>
    <label>{label}</label>
    <Checkbox
      label={label}
      checked={input.value ? true : false}
      onChange={input.onChange}
    />
  </container>
);

export default renderCheckbox;
