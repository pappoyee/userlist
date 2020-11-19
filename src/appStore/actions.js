export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

export const addUser = () => {
  return {
    type: ADD_USER,
  };
};

export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  };
};

export const fetchUsersFailed = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error
  };
};
