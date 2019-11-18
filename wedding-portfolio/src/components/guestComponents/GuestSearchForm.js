import React, { useState, useEffect } from "react";
import GuestViewCard from "./GuestViewCard";
import axios from "axios";
import styled from 'styled-components'

const GuestPortfolio = styled.div`
    height: 100%;
`;

const InputSearch = styled.input`
    padding: 2px 20px;
    margin: 20px;
    font-size: 1rem;
    box-sizing: border-box;
    background-color: white;
    border-radius: 20px;
    outline: none
    // border: 1px solid grey;
`;

const CardBox = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

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
         <GuestPortfolio className='portfolio-search'>
             <form>
                 <InputSearch
                    type="text"
                    value={query}
                    name="search"
                    id="search"
                    placeholder="Search by Location"
                    onChange={handleChange}
                />
             </form>
             <CardBox className='card-container'>
                 {queryResults.map(e => (
                     <GuestViewCard {...e}/>
                 ))}
             </CardBox>
         </GuestPortfolio>
    )
}

export default GuestSearchForm;


