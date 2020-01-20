import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";
import produce from "immer";

const initialState = {
  startDate: "",
  startWeight: 0,
  goalWeight: 0,
  dailyKcalChange: 0,
  weeklyChange: 0,
  weeksForAvg: 2,
  avgTdeeOverTime: [],
  avgWeightOverTime: [],
  weeksToGoal: 0,
  avgWeight: 0,
  weekNo: 1,
  kg: true,
  initialInputsLocked: false,
  tdee: 0,
  weekData: []
};

const setStartWeight = (state, action) => {
  return updateObject(state, {
    startWeight: action.enteredWeight,
    avgWeightOverTime: [action.enteredWeight],
    avgTdeeOverTime: [action.startingTdee]
  });
};
const setGoalWeight = (state, action) => {
  return updateObject(state, { goalWeight: action.enteredGoal });
};
const setDailyKcalChange = (state, action) => {
  return updateObject(state, { dailyKcalChange: action.dailyKcalChange });
};
const setWeeklyChange = (state, action) => {
  return updateObject(state, { weeklyChange: action.weeklyChange });
};
const setStartDate = (state, action) => {
  return updateObject(state, { startDate: action.startDate });
};

const setKcalAndKg = (state, action) => {
  return produce(state, draft => {
    draft.weekData[action.week].days[action.day] = {
      kg: Number(action.kg),
      kcal: Number(action.kcal)
    };
  });
};

const setWeeklyKcalAndKg = (state, action) => {
  return produce(state, draft => {
    draft.avgWeightOverTime[action.weekIndex + 1] = action.weeklyWeight;
    draft.weekData[action.weekIndex].avgWeight = action.weeklyWeight;
    draft.weekData[action.weekIndex].avgKcal = action.weeklyKcal;
    if (action.weeklyWeight) {
      draft.avgWeight = action.weeklyWeight;
    }
  });
};

const setWeeklyTdee = (state, action) => {
  return produce(state, draft => {
    draft.avgTdeeOverTime[action.weekIndex + 1] = action.tdee;
  });
};

const addAnotherWeek = (state, action) => {
  return updateObject(state, {
    weekData: [...state.weekData, action.weekEntry],
    weekNo: action.updatedWeekNo,
    initialInputsLocked: true
  });
};

let localStorageState = null;
localStorageState = JSON.parse(window.localStorage.getItem("state"));

const reducer = (state = localStorageState || initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_START_WEIGHT:
      return setStartWeight(state, action);
    case actionTypes.SET_GOAL_WEIGHT:
      return setGoalWeight(state, action);
    case actionTypes.SET_DAILY_KCAL_CHANGE:
      return setDailyKcalChange(state, action);
    case actionTypes.SET_WEEKLY_CHANGE:
      return setWeeklyChange(state, action);
    case actionTypes.SET_START_DATE:
      return setStartDate(state, action);
    case actionTypes.ADD_ANOTHER_WEEK:
      return addAnotherWeek(state, action);
    case actionTypes.SET_KCAL_AND_KG:
      return setKcalAndKg(state, action);
    case actionTypes.SET_WEEKLY_KCAL_AND_KG:
      return setWeeklyKcalAndKg(state, action);
    case actionTypes.SET_WEEKLY_TDEE:
      return setWeeklyTdee(state, action);
    default:
      return state;
  }
};

export default reducer;
