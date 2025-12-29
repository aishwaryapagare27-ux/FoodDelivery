
// import { configureStore } from "@reduxjs/toolkit";
// import cardSlice from "./cardSlice"

// export const store =configureStore({
//     reducer:{
//         card:cardSlice
//     },
// })

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardSlice";

export const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});

export default store;
