import { ADD_USER, UPDATE_USER, LOAD_INITIAL } from "./actions";

const intialState = [];

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_USER:
      debugger;
      const nextId = state.length + 1;
      const last = state[state.length - 1];

      if (last.name === "" || last.email === "") {
        return state;
      }

      const newUser = {
        id: nextId,
        name: "",
        email: "",
      };
      return [...state, newUser];
    case UPDATE_USER:
      debugger;
      const index = state.findIndex((u) => u.id === action.payload.id);
      state[index] = action.payload;
      return [...state];
    case LOAD_INITIAL:
      debugger;
      return [...action.payload];
    default:
      return state;
  }
};
