import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';

import Nav from "./Nav";

import {
  login
} from './reducers/userSlice';

import axios from 'axios';

function App() {

  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({ username: '', password: '' });


  useEffect(()=>{
    const localStoragUser = JSON.parse(localStorage.getItem('user'));

    if(localStoragUser) {
      dispatch(login(localStoragUser))
    }
  }, [dispatch]);

  const dataChangeHandler = e => {
    const elem = e.target;

    setLoginData(data => {
      return { ...data, [elem.name]: elem.value }
    })
  }

  const submitHeandler = (e) => {
    e.preventDefault();
    axios.post('https://akademia108.pl/api/social-app/user/login',
      JSON.stringify(loginData),
      {
        headers:
        {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(req=>{
        console.log(req.data);
        localStorage.setItem('user', JSON.stringify(req.data))
        dispatch(login(req.data))
      });
  }

  

  return (
    <div className="App">
      <Nav />
      <form onSubmit={submitHeandler}>
        <input type="text" placeholder="username" name="username" onChange={dataChangeHandler} value={loginData.username} />
        <input type="password" placeholder="password" name="password" onChange={dataChangeHandler} value={loginData.password} />
        <button>Submit</button>
      </form>

    </div>
  );
}

export default App;
