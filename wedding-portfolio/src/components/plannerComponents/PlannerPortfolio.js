import React, {useEffect, useState} from 'react';
import PlannerCard from './PlannerCard';
import axios from 'axios';
import {CardDeck} from 'reactstrap';

const mapStateToProps = state => {
    console.log(state);
}

const PlannerPortfolio = (props) => {
    const [plannerWeddings, setPlannerWeddings] = useState([]);
    let id = 1;
    useEffect(() => {
        axios.get("https://weddingplannerlambda.herokuapp.com/api/posts/all")
        .then(response => {
            console.log(response.data)
            response.data.filter(element => element.user_id === id).forEach(wedding => {
                setPlannerWeddings(plannerWeddings => [...plannerWeddings, wedding])
            })
                    }).catch(err => {
        console.log(err);
    })
    }, [])



    return (
        <div className="container">
            <div className="container profileContainer">
                <div className="avatar-container">
                {console.log(plannerWeddings)}
                    <img className="avatar" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="placeholder" />
                    <span> Name </span>
                    <span> Location </span>
                    <span> Contact Info </span>
                </div>
                <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="container">
            <CardDeck>
            {plannerWeddings.map(wedding => (
                <PlannerCard wedding={wedding}/>
            ))}
            </CardDeck>
            </div>
        </div>
    )
}

export default PlannerPortfolio;
