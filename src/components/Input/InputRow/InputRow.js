import React from "react";
import "./InputRow.scss";

const InputRow = props => {
  const {
    disabled,
    value,
    step,
    readOnly,
    onChange,
    type,
    label,
    units
  } = props;

  return (
    <tr className="inputRow">
      <td className="inputRow-label">{label}</td>
      <td className="inputRow-input">
        <input
          onChange={e => onChange(e.target.value)}
          disabled={disabled}
          value={value}
          step={step}
          readOnly={readOnly}
          required
          type={type}
        />
      </td>
      <td className="inputRow-units">{units}</td>
    </tr>
  );
};

export default InputRow;
