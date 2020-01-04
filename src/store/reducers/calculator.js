import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  startDate: "",
  startWeight: 0,
  goalWeight: 0,
  dailyKcalChange: 0,
  weeklyChange: 0,
  weeksForAvg: 2,
  avgTdeeArray: [],
  weeksToGoal: 0,
  avgWeight: 0,
  kg: true,
  tdee: 0,
  // week no is index
  weekData: [
    {
      week: 0,
      weeksKcal: [0, 0, 0, 0, 0, 0, 0],
      avgKcal: 0,
      weeksWeight: [0, 0, 0, 0, 0, 0, 0],
      avgWeight: 0
    }
  ],
  // objects property is week no
  alternativeWeekData: [
    (0: {
      weeksKcal: [0, 0, 0, 0, 0, 0, 0],
      avgKcal: 0,
      weeksWeight: [0, 0, 0, 0, 0, 0, 0],
      avgWeight: 0
    })
  ]
};

const setStartWeight = (state, action) => {
  return updateObject(state, { startWeight: action.enteredWeight, avgWeight: action.enteredWeight, avgTdeeArray: [33 * action.enteredWeight] });
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
const setGaining = (state, action) => {
  return updateObject(state, { gaining: action.gaining });
};
// const setError = (state, action) => {
//   return updateObject(state, { error: action.error });
// };
// const setLoadedImages = (state, action) => {
//   return updateObject(state, { loadedImages: state.loadedImages + 1 });
// };
// const clearLoadedImages = (state, action) => {
//   return updateObject(state, { loadedImages: 0 });
// };
// const fetchStarted = (state, action) => {
//   return updateObject(state, { loading: true });
// };
// const fetchFinished = (state, action) => {
//   return updateObject(state, { loading: false });
// };
// const closeModal = (state, action) => {
//   return updateObject(state, { modalOpen: false, zoomedCardIndex: null });
// };
// const openModal = (state, action) => {
//   return updateObject(state, {
//     modalOpen: true,
//     zoomedCardIndex: action.selectedCard
//   });
// };

let localStorageState = null;
// let localStorageState = JSON.parse(window.localStorage.getItem("state"));

const reducer = (
  state = localStorageState || initialState,
  action
) => {
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
    case actionTypes.SET_GAINING:
      return setGaining(state, action);
    default:
      return state;
  }
};

export default reducer;
