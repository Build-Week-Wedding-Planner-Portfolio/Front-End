import React, { useState, useEffect } from "react";
import GuestViewCard from "./GuestViewCard";
import axios from "axios";

function GuestSearchForm () {
    const [query, setQuery] = useState("");
    const [queryResults, setQueryResults] = useState([]);
    
    useEffect(() => {

        axios
            .get('https://weddingplannerlambda.herokuapp.com/api/posts/all')
            .then(res => {
                console.log(res);
                const data = res.data;
                const transform = data.filter(e =>
                    e.wedding_location.toLowerCase().includes(query)
                    );
                setQueryResults(transform);
            })
            .catch(error => {
                console.log("No API data Fetched - see GuestSearchForm.js", error)
            })
            
    }, [query]); 

    const handleChange = e => {
        setQuery(e.target.value);
        if (e.target.value===""){
            setQuery("")
        }
    }

    return(
         <div className='portfolio-search'>
             <form>
                 <input
                    type="text"
                    value={query}
                    name="search"
                    id="search"
                    placeholder="Search Location"
                    onChange={handleChange}
                />
             </form>
             <div className='card-container'>
                 {queryResults.map(e => (
                     <GuestViewCard {...e}/>
                 ))}
             </div>
         </div>
    )
}

export default GuestSearchForm;