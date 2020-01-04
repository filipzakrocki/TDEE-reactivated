import * as actionTypes from "./actionTypes";
// import axios from "axios";

export const setStartWeight = enteredWeight => {
  return {
    type: actionTypes.SET_START_WEIGHT,
    enteredWeight: Number(enteredWeight)
  };
};
export const setGoalWeight = enteredGoal => {
  return {
    type: actionTypes.SET_GOAL_WEIGHT,
    enteredGoal: Number(enteredGoal)
  };
};
export const setWeeklyChange = weeklyChange => {
  return {
    type: actionTypes.SET_WEEKLY_CHANGE,
    weeklyChange: Number(weeklyChange)
  };
};

export const setDailyKcalChange = dailyChange => {
  return {
    type: actionTypes.SET_DAILY_KCAL_CHANGE,
    dailyKcalChange: parseInt(dailyChange)
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

export const setGaining = gainingBool => {
  let operator = gainingBool ? "+" : "-";
  return {
    type: actionTypes.SET_GAINING,
    gaining: operator
  };
};

// export const setResults = data => {
//   console.log(data);
//   return {
//     type: actionTypes.SET_RESULTS,
//     results: data
//   };
// };

// export const fetchStarted = data => {
//   return {
//     type: actionTypes.FETCH_STARTED
//   };
// };

// export const fetchFinished = data => {
//   return {
//     type: actionTypes.FETCH_FINISHED
//   };
// };

// export const setError = error => {
//   console.log(error);
//   return {
//     type: actionTypes.SET_ERROR,
//     error: error
//   };
// };

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
