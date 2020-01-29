import React from "react";
import "./SelectRow.scss";

const SelectRow = props => {
  const {
    disabled,
    value,
    step,
    readOnly,
    changeHandler,
    type,
    label,
    isMetricSystem,
    units,
    isWeightLoss
  } = props;

  const handleChange = e => {
    if (
      (isWeightLoss && e.target.value > 0) ||
      (!isWeightLoss && e.target.value < 0)
    ) {
      e.target.value = 0;
    }
    changeHandler(e.target.value, isMetricSystem);
  };

  return (
    <tr className="inputRow">
      <td className="inputRow-label">{label}</td>
      <td className="inputRow-input">
        <select onChange={changeHandler}>
          <option value={true}>Metric - Kg</option>
          <option value={false}>Imperial - Lbs</option>
        </select>
      </td>
      <td className="inputRow-units">{units}</td>
    </tr>
  );
};

export default SelectRow;
