import React from 'react';
import './App.css';
import HomePage from "./components/HomePage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import PlannerCreatePost from "./components/plannerComponents/PlannerCreatePost";
import PlannerEditForm from "./components/plannerComponents/PlannerEditForm";
import PlannerPortfolio from "./components/plannerComponents/PlannerPortfolio";
import GuestSearchForm from "./components/guestComponents/GuestSearchForm";
import NavBar from "./components/NavBar";
import PrivateRoute from "./utils/PrivateRoute"



function App() {
  return (
    <div className="App">
      <NavBar />
     <Route exact path="/homepage" component={HomePage} />

     <PrivateRoute  path='/plannerportfolio' component={PlannerPortfolio}/>
    </div>
  );
}

export default App;
