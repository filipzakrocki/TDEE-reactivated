import * as actionTypes from "./actionTypes";
// import axios from "axios";

export const setStartWeight = (enteredWeight, isMetricSystem) => {
  let modifier = isMetricSystem ? 33 : 15;
  const weightToTdee = modifier * enteredWeight;
  return {
    type: actionTypes.SET_START_WEIGHT,
    enteredWeight: Number(enteredWeight),
    startingTdee: Math.ceil(weightToTdee)
  };
};

export const setGoalWeight = enteredGoal => {
  return {
    type: actionTypes.SET_GOAL_WEIGHT,
    enteredGoal: Number(enteredGoal)
  };
};

export const setWeeksForAverage = numberOfWeeks => {
  if (numberOfWeeks > 4) {
    numberOfWeeks = 4;
  } else if (numberOfWeeks < 1) {
    numberOfWeeks = 1;
  }

  return {
    type: actionTypes.SET_WEEKS_FOR_AVG,
    numberOfWeeks: Math.floor(numberOfWeeks)
  };
};

export const setWeeklyChange = (weeklyChange, isMetricSystem) => {

  let modifier = isMetricSystem ? 1100 : 500;
  const kcalChange = weeklyChange * modifier;

  return {
    type: actionTypes.SET_WEEKLY_CHANGE,
    weeklyChange: Number(weeklyChange),
    dailyKcalChange: Math.ceil(kcalChange)
  };
};

export const setDailyKcalChange = (dailyChange, isMetricSystem) => {
  let modifier = isMetricSystem ? 1100 : 500;
  const weeklyWeightChange = dailyChange / modifier;

  return {
    type: actionTypes.SET_DAILY_KCAL_CHANGE,
    dailyKcalChange: parseInt(dailyChange),
    weeklyChange: weeklyWeightChange.toFixed(2)
  };
};

export const toggleMeasurementSystem = () => {
  return {
    type: actionTypes.TOGGLE_MEASUREMENT_SYSTEM,
  }
}

export const setKcalAndKg = (kcal, kg, week, day) => {
  return {
    type: actionTypes.SET_KCAL_AND_KG,
    kcal: kcal,
    kg: kg,
    week: week,
    day: day
  };
};

export const setWeeklyKcalAndKg = (week, weekIndex) => {
  let weeklyKcal, weeklyWeight;

  const getAverage = (array, unit) => {
    let filteredArray = array.filter(el => el[unit]);
    if (filteredArray.length === 0) {
      return 0;
    }
    return (
      filteredArray.reduce((prev, day) => prev + day[unit], 0) /
      filteredArray.length
    );
  };

  weeklyWeight = getAverage(week, "kg").toFixed(2);
  weeklyKcal = Math.ceil(getAverage(week, "kcal"));

  return {
    type: actionTypes.SET_WEEKLY_KCAL_AND_KG,
    weekIndex: weekIndex,
    weeklyKcal: weeklyKcal,
    weeklyWeight: Number(weeklyWeight)
  };
};

export const setWeeklyTdee = (weeklyTdee, weekIndex) => {
  return {
    type: actionTypes.SET_WEEKLY_TDEE,
    weekIndex: weekIndex,
    tdee: Math.ceil(weeklyTdee)
  };
};

export const addAnotherWeek = weekNo => {
  let weekEntry = {
    week: weekNo,
    days: [
      { kg: "", kcal: "" },
      { kg: "", kcal: "" },
      { kg: "", kcal: "" },
      { kg: "", kcal: "" },
      { kg: "", kcal: "" },
      { kg: "", kcal: "" },
      { kg: "", kcal: "" }
    ],
    avgKcal: 0,
    avgWeight: 0,
    locked: false
  };

  return {
    type: actionTypes.ADD_ANOTHER_WEEK,
    weekEntry: weekEntry,
    updatedWeekNo: weekNo + 1
  };
};

export const lockWeek = weekIndex => {
  return {
    type: actionTypes.LOCK_WEEK,
    weekIndex: weekIndex
  };
};

export const setStartDate = startDate => {
  let date = startDate;
  if (!startDate) {
    const now = new Date();
    const dd = now.getDate();
    const mm = now.getMonth() + 1;
    const yyyy = now.getFullYear();
    const today = `${yyyy}-${mm < 10 ? "0" + mm : mm}-${
      dd < 10 ? "0" + dd : dd
    }`;
    date = today;
  }
  return {
    type: actionTypes.SET_START_DATE,
    startDate: date
  };
};

// export const setLoadedImages = () => {
//   return {
//     type: actionTypes.SET_LOADED_IMAGES
//   };
// };
// export const clearLoadedImages = () => {
//   return {
//     type: actionTypes.CLEAR_LOADED_IMAGES
//   };
// };

// export const fetchPokemon = pokemonQuery => {
//   return async dispatch => {
//     let params;
//     //default path
//     let query = "https://api.pokemontcg.io/v1/cards";
//     document.title = `Pokedex${": " + pokemonQuery}`;

//     dispatch(fetchStarted());
//     dispatch(clearLoadedImages());

//     //query builder if input is present
//     if (pokemonQuery) {
//       let array = pokemonQuery.split(" ").map((string, index) => {
//         let modStr = string.replace(">", "=gt").replace("<", "=lt");
//         if (index > 0) {
//           return `&${modStr}`;
//         }
//         if (!modStr.includes("=")) {
//           return `name=${string}`;
//         }
//         return modStr;
//       });
//       params = `?${array.join("")}`;
//       query = `https://api.pokemontcg.io/v1/cards` + params;
//     }

//     try {
//       const results = await axios.get(query);
//       const cardsArray = await results.data.cards;
//       dispatch(setResults(cardsArray));
//       dispatch(fetchFinished());
//     } catch (error) {
//       dispatch(setError(error));
//       dispatch(fetchFinished());
//     }
//   };
// };

// export const closeModal = () => {
//   return {
//     type: actionTypes.CLOSE_MODAL
//   };
// };

// export const openModal = clickedCardIndex => {
//   return {
//     type: actionTypes.OPEN_MODAL,
//     selectedCard: clickedCardIndex
//   };
// };
