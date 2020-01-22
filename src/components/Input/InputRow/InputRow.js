import React from "react";
import "./InputRow.scss";

const InputRow = props => {
  const {
    disabled,
    value,
    step,
    readOnly,
    changeHandler,
    type,
    label,
    units,
    isWeightLoss
  } = props;

  return (
    <tr className="inputRow">
      <td className="inputRow-label">{label}</td>
      <td className="inputRow-input">
        <input
          onChange={changeHandler}
          disabled={disabled}
          value={value}
          min={isWeightLoss ? null : 0}
          max={isWeightLoss ? 0 : null}
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
