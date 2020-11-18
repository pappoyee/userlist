export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";
export const LOAD_INITIAL = "LOAD_INITIAL";

export const addUser = () => {
  return {
    type: ADD_USER,
  };
};

export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};

export const loadInitial = (users) => {
  return {
    type: LOAD_INITIAL,
    payload: users,
  };
};
