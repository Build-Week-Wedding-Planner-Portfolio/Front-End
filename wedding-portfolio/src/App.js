import React from 'react';
import './App.css';
import './styles.css';
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PlannerCreatePost from "./components/plannerComponents/PlannerCreatePost";
import PlannerEditForm from "./components/plannerComponents/PlannerEditForm";
import PlannerPortfolio from "./components/plannerComponents/PlannerPortfolio";
import GuestSearchForm from "./components/guestComponents/GuestSearchForm";
import NavBar from "./components/NavBar";
import PrivateRoute from "./utils/PrivateRoute";
import {Route} from "react-router-dom"



function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/homepage" component={HomePage} />
      <Route path='/guest' component ={GuestSearchForm} />

     <PrivateRoute  path='/plannerportfolio' component={PlannerPortfolio}/>
     <Route path='/testplannerportfolio' component={PlannerPortfolio} />
     <Login path="/login" component={Login}/>
    </div>
  );
}

export default App;
