import React from "react";
import "./InputRow.scss";

const InputRow = props => {
  return (
    <tr className="inputRow">
      <td className="inputRow-label">{props.label}</td>
      <td className="inputRow-input">
        <input
          onChange={e => props.onChange(e.target.value)}
          disabled={props.disabled}
          value={props.value}
          step={props.step}
          required
          type={props.type}
        />
      </td>
      <td className="inputRow-units">{props.units}</td>
    </tr>
  );
};

export default InputRow;
