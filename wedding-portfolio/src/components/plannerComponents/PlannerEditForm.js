import React, { useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";

function PlannerEditForm(props) {
    console.log(props)
    const [input, setInput] = useState({
        
        couple_name: props.history.location.state.couple_name,
        item_photo: props.history.location.state.item_photo,
        wedding_location: props.history.location.state.wedding_location,
        wedding_theme: props.history.location.state.wedding_theme,
        wedding_date: props.history.location.state.wedding_date,
        wedding_photographer: props.history.location.state.wedding_photographer
        
    });

    const handleChanges2 = e => {
        console.log("I am handleChanges2 in PlannerEditForm.js");
        setInput({ ...input, [e.target.name]: e.target.value });
        // console.log({input}, "This is the results of notes after handleChanges setInput")
        console.log("handleChanges2 Input: ", input);
      };

      const submitForm = e => {
        e.preventDefault();
        console.log("input for submitForm in PlannerEditForm.js", input);

        const id = localStorage.getItem('id');
        axiosWithAuth()
            .put(`/posts/${props.history.location.state.event_id}`, input)

            .then(res => {
                console.log("Post Event in plannerEditForm.js: ", res);
                props.history.push("/plannerportfolio");
              })
              .catch(err => {
                console.log("Post Event Error: ", err.res);
                alert("failed to update event");
              });

        setInput({
            couple_name: "",
            item_photo: "",
            wedding_location: "",
            wedding_photographer: "",
            wedding_theme: "",
            wedding_date: ""
        })
};
    return (
        <form onSubmit={submitForm}>
            <input
                type="text"
                name="couple_name"
                onChange={handleChanges2}
                placeholder="Enter Couples Name"
                value={input.couple_name}
            />
            <input
                type="text"
                name="item_photo"
                onChange={handleChanges2}
                placeholder="Enter Photo URL"
                value={input.item_photo}
            />
            <input
                type="text"
                name="wedding_location"
                onChange={handleChanges2}
                placeholder="Location"
                value={input.wedding_location}
            />
            <input
                type="text"
                name="wedding_theme"
                onChange={handleChanges2}
                placeholder="Wedding Theme"
                value={input.wedding_theme}
            />
    
            <input
                type="text"
                name="wedding_date"
                onChange={handleChanges2}
                placeholder="Wedding Date"
                value={input.wedding_date}
            />

            <input
                type="text"
                name="wedding_photographer"
                onChange={handleChanges2}
                placeholder="Wedding Photographer"
                value={input.wedding_photographer}
            />
      <button>Submit</button>
    </form>
    );
};

export default PlannerEditForm;


