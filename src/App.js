import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import AddButton from './components/AddButton';
import UserList from './components/UserList';
import { loadInitial } from './redux/actions';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    const intialData = [
      {id: 1, name: 'name1', email:'name1@gmail.com'},
      {id: 2, name: 'name2', email:'name2@gmail.com'},
    ]
    dispatch(loadInitial(intialData))
  },[])

  return (
    <div className="App container m4 l3">
      <AddButton/>
      <UserList/>
    </div>
  );
}

export default App;

