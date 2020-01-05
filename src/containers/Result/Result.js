import React from "react";
import "./Result.scss";
import {connect} from 'react-redux'


import WeekRow from "./WeekRow/WeekRow";

import AddWeekBtn from "../../components/AddWeekBtn/AddWeekBtn";

const Result = (props) => {

  const {weekData} = props;


  return (
    <section className="result">
      {weekData.map(weekEntry => 
        <WeekRow
        weekNo={weekEntry.week}
        />
      )}
      <AddWeekBtn />
    </section>
  );
};

const mapStateToProps = state => {
  return {
    weekData: state.calculator.weekData
  }
}



export default connect(mapStateToProps)(Result);
