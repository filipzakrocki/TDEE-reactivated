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
        <input
          onChange={handleChange}
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
