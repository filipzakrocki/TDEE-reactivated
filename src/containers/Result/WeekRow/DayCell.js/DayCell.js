import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";
import "./DayCell.scss";

const DayCell = props => {
  const { week, day, setKcalAndKg, weekData } = props;
  const dayData = weekData[week].days[day];


  return (
    <div className="weekRow-entry">
      <input
        type="number"
        onChange={e => setKcalAndKg(dayData.kcal, e.target.value, week, day)}
        value={dayData.kg}
      ></input>
      <input
        type="number"
        onChange={e => setKcalAndKg(e.target.value, dayData.kg, week, day)}
        value={dayData.kcal}
      ></input>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    weekData: state.calculator.weekData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setKcalAndKg: (kal, kilo, weekIndex, dayIndex) =>
      dispatch(actions.setKcalAndKg(kal, kilo, weekIndex, dayIndex))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DayCell);
