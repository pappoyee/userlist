import axios from "axios";
import {
  fetchUsersFailed,
  fetchUsersSuccess,
  fetchUsersRequest,
} from "../appStore";
import User from "../models/user";

const API_URL = "https://jsonplaceholder.typicode.com/users";
const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get(API_URL)
      .then((response) => {
        const users = response.data.map((user) => new User(user));
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailed(error.message));
      });
  };
};

export default fetchUsers;
