import React from "react";
import { Checkbox } from "antd";

const renderCheckbox = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onChange={input.onChange}
  />
);

export default renderCheckbox;
