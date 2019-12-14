// import * as actionTypes from "../actions/actionTypes";
// import { updateObject } from "../../shared/utility";

const initialState = {
    startDate: null,
    startWeight: null,
    weightChange: null,
    weeksToGoal: 0,
    Kg: true,
    weekData: [
        {week: 0,
        weeksKcal: [0,0,0,0,0,0,0],
        avgKcal: 0,
        weeksWeight: [0,0,0,0,0,0,0],
        avgWeight: 0
    }
    ],
    alternativeWeekData: {
        0: {
            weeksKcal: [0,0,0,0,0,0,0],
            avgKcal: 0,
            weeksWeight: [0,0,0,0,0,0,0],
            avgWeight: 0
        }
    }

};

// const setSearchQuery = (state, action) => {
//   return updateObject(state, { query: action.query });
// };
// const setResults = (state, action) => {
//   return updateObject(state, { results: action.results });
// };
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

const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.SET_SEARCH_QUERY:
//       return setSearchQuery(state, action);
//     case actionTypes.SET_RESULTS:
//       return setResults(state, action);
//     case actionTypes.SET_ERROR:
//       return setError(state, action);
//     case actionTypes.SET_LOADED_IMAGES:
//       return setLoadedImages(state, action);
//     case actionTypes.CLEAR_LOADED_IMAGES:
//       return clearLoadedImages(state, action);
//     case actionTypes.FETCH_STARTED:
//       return fetchStarted(state, action);
//     case actionTypes.FETCH_FINISHED:
//       return fetchFinished(state, action);
//     case actionTypes.CLOSE_MODAL:
//       return closeModal(state, action);
//     case actionTypes.OPEN_MODAL:
//       return openModal(state, action);

//     default:
      return state;
  }
// };

export default reducer;
