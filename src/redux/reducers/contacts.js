// import { createReducer } from "@reduxjs/toolkit";
// import { removeContact, setFilter, addContact } from "../actions";

// const intialState = {
//   items: [],
//   filter: "",
// };

// const contacts = createReducer(intialState, {
//   [addContact]: (state, { payload }) => {
//     if (state.items.some((item) => item.name === payload.name)) {
//       alert(`${payload.name} is already in contacts`);
//       return state;
//     }
//     if (state.items.some((item) => item.number === payload.number)) {
//       alert(`${payload.number} is already in contacts`);
//       return state;
//     }

//     const items = [...state.items, payload];

//     return {
//       ...state,
//       items,
//     };
//   },

//   [removeContact]: (state, { payload }) => {
//     const items = state.items.filter(({ id }) => id !== payload.id);

//     return {
//       ...state,
//       items,
//     };
//   },

//   [setFilter]: (state, { payload }) => ({ ...state, filter: payload }),
// });

// export default contacts;
