import React from 'react';
import './App.css';
import './styles.css';
import HomePage from "./components/HomePage";
import LoginForm from "./components/Login";
import PlannerCreatePost from "./components/plannerComponents/PlannerCreatePost";
import PlannerEditForm from "./components/plannerComponents/PlannerEditForm";
import PlannerPortfolio from "./components/plannerComponents/PlannerPortfolio";
import GuestSearchForm from "./components/guestComponents/GuestSearchForm";
import NavBar from "./components/NavBar";
import PrivateRoute from "./utils/PrivateRoute";
import {Route} from "react-router-dom";
import SignUp from "./components/SignUp";




function App() {
  return (
    <div className="App">
      <NavBar />

      <Route exact path="/homepage" component={HomePage} />
      <Route path='/guest' component ={GuestSearchForm} />
      <Route path='/signup' component={SignUp} />
      <Route exact path="/login" component={LoginForm}/>
      {/* <Route path='/testplannerportfolio/:id' component={PlannerPortfolio} /> */}
     
     <PrivateRoute  path='/plannerportfolio' component={PlannerPortfolio}/>
     <PrivateRoute path='/plannercreatepost' component={PlannerCreatePost}/>
     <PrivateRoute  path='/plannereditform' component={PlannerEditForm}/>
     
     
    </div>
  );
}

export default App;
