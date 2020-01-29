import React from "react";
import "./ButtonRow.scss";

const ButtonRow = props => {
  const {
    disabled,
    changeHandler,
    label,
    value,
    units,
  } = props;

  const handleChange = e => {
    changeHandler(e.target.value);
  };

  return (
    <tr className="toggleRow">
      <td className="toggleRow-label">{label}</td>
      <td className="toggleRow-input">
        <button className={'toggleRow-button'} disabled={disabled} onClick={handleChange} >{value ? 'Metric - kg' : 'Imperial - lbs' }</button>
      </td>
      <td className="toggleRow-units">{units}</td>
    </tr>
  );
};

export default ButtonRow;
