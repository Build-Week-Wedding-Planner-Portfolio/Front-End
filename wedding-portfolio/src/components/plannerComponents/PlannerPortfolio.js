import React, {useEffect, useState} from 'react';
import PlannerCard from './PlannerCard';
import axios from 'axios';
// import {CardDeck} from 'reactstrap';
import PlannerCreatePost from './PlannerCreatePost'

import { Link } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { connect } from "react-redux";


function PlannerPortfolio(props) {
    const Delete = (event_id) => {
      // const id = localStorage.getItem("id");
      const id = props.match.params.id
      console.log()
      axios
        .delete(`https://weddingplannerlambda.herokuapp.com/api/posts/${id}/${event_id}`)
        .then(res => {
          console.log(id);
          getAllEventsByCurrentPlanner();
          console.log("delete response: ", res);
        })
  
        .catch(err => console.log(err));
    };

    const [info, setInfo] = useState("");

    useEffect(() => {
        axiosWithAuth()
          .get(`/posts`)
          .then(res => {
            console.log("hello from PlannerPortfolio.js axiosWithAuth ", res);
            setInfo(res.data);
            const id = [res.data.id];
            localStorage.setItem("id", id);
            getAllEventsByCurrentPlanner();
          })
          .catch(err => console.log(err.res));
      }, []);
    
      const [user, setUser] = useState([]);

      const getAllEventsByCurrentPlanner = () => {
        console.log("is it working getAllEventsByCurrentPlanner() ");
        const id = localStorage.getItem("id");
        axiosWithAuth()
          .get(`/posts/${id}`)
          .then(res => {
            console.log("get all", res);
            setUser(res.data);
          })
          .catch(err => console.log("events by id: ", err.response));
      };

      return (
        <div>
          <div><h2>{info.username}'s Portfolio</h2>
          </div>
          <form>
            <button onClick={() => localStorage.clear()}>Log Out</button>
            <div>
              <div>
                <h2>{info.email}</h2>
                <h2>{info.location}</h2>
                <h2>{info.password}</h2>
              </div>
            </div> 
    
    
            <Link to="/plannercreatepost">
              <button>Create Wedding Event</button>
            </Link>
          </form>
          <div>
    
            {user.map(e => (
              <PlannerCard
                Delete={Delete}
                event_id={e.event_id}
                couple_name={e.couple_name}
                item_photo={e.item_photo}
                wedding_location={e.wedding_location}
                wedding_photographer={e.wedding_photographer}
                wedding_theme={e.wedding_theme}
                wedding_date={e.wedding_date}
              />
            ))}
          </div>
        </div>
      );
    }
    
    export default connect(
      null,
      {}
    )(PlannerPortfolio);






//     const [plannerWeddings, setPlannerWeddings] = useState([]);

//     let id = 1;

//     useEffect(() => {
//         let url = window.location.pathname;
//         let myId = parseInt(url.substring(url.lastIndexOf('/') + 1));
//         axios.get("https://weddingplannerlambda.herokuapp.com/api/posts/all")
//         .then(response => {
//             console.log(response.data)
//             response.data.filter(element => element.user_id === myId).forEach(wedding => {
//                 setPlannerWeddings(plannerWeddings => [...plannerWeddings, wedding])
//                 console.log(plannerWeddings)
//             })
//                     }).catch(err => {
//         console.log(err);
//     })
//     }, [])



//     return (
//         <div className="container">
//             <div className="container profileContainer">
//                 <div className="avatar-container">
//                 {console.log(plannerWeddings)}
//                     <img className="avatar" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="placeholder" />
//                     <span> Name </span>
//                     <span> Location </span>
//                     <span> Contact Info </span>
//                 </div>
//                 <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//             </div>
//             <div className="container">
//             <CardDeck>
//             {plannerWeddings.map(wedding => (
//                 <PlannerCard wedding={wedding}/>
//             ))}
//             </CardDeck>
//             </div>
//         </div>
//     )
// }

// export default PlannerPortfolio;
