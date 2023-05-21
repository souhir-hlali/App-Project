import React from 'react';
import Navbar from './component/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import Profile from './component/Profile';
import LoginAdmin from './component/admin';
import './App.css';
import User from './component/User';

const App = () => {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path ="/" component={Home}/>
      <Route exact path ="/login" component={Login}/>
      <Route exact path ="/register" component={Register}/>
      <Route exact path ="/profile" component={Profile}/>
      <Route exact path ="/registerAdmin" />
      <Route exact path ="/User" component={User} />
      <Route exact path ="/admin" component={LoginAdmin}/>

     
    </Switch>
     

    </>
  )
}

export default App;



