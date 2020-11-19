import {
  ADD_USER,
  UPDATE_USER,
  FETCH_USERS_FAILED,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_REQUEST,
} from "./actions";

import User from "../models/user";

const intialState = {
  loading: false,
  error: "",
  users: [],
};

export const reducer = (state = intialState, action) => {
  const { users } = state;

  switch (action.type) {
    case ADD_USER:

      const last = users[users.length - 1];
      if (last.name === "" || last.email === "") {
        return state;
      }

      const nextId = users.length + 1;
      const newUser = new User({});
      newUser.id = nextId;

      return { ...state, users: [...users, newUser] };

    case UPDATE_USER:
      const index = users.findIndex((u) => u.id === action.payload.id);
      users[index] = action.payload;
      return { ...state, users: [...users] };

    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };

    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload, loading: false };

    case FETCH_USERS_FAILED:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
