import axios from 'axios';
// import {combineReducers} from "redux";
const GET_CANDIES = 'GET_CANDIES';

const gotCandies = (candyTypes) => {
  return {
    type: GET_CANDIES,
    candyTypes
  }
}

export const getCandiesThunk = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/candies');
      console.log('is this running');
      dispatch(gotCandies(data));
    } catch(err) {
      console.log('An error occurred: ', err);
    }
  }
}

const initialState = {
  candies: [],
  currentCandy: {}
}

// function candiesReducer(candies = [], action) {
//   switch (action.type) {
//     case GET_CANDIES:
//       return candies;
//     default:
//       return candies;
//   }
// }

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIES:
      return {
        ...state, candies: action.candyTypes
      }
    default:
      return state
  }
}

export default rootReducer
