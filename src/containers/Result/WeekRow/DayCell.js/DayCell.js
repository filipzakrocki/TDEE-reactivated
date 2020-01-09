import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";
import "./DayCell.scss";

const DayCell = props => {
  const { kg, kcal, setKcalAndKg, week, day } = props;
  return (
    <div className="weekRow-entry">
      <input
        type="number"
        onChange={e => setKcalAndKg(kcal, e.target.value, week, day)}
        value={kg}
      ></input>
      <input
        type="number"
        onChange={e => setKcalAndKg(e.target.value, kg, week, day)}
        value={kcal}
      ></input>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {};
// };
const mapDispatchToProps = dispatch => {
  return {
    setKcalAndKg: (kal, kilo, weekIndex, dayIndex) =>
      dispatch(actions.setKcalAndKg(kal, kilo, weekIndex, dayIndex))
  };
};

export default connect(null, mapDispatchToProps)(DayCell);
