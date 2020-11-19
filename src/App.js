import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { AddButton, UserList } from "./components";
import { fetchUsers } from "./api";

function App() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div
      className="App container"
      style={{
        marginTop: "10px",
      }}
    >
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <AddButton />
          <UserList />
        </div>
      )}
    </div>
  );
}

export default App;
