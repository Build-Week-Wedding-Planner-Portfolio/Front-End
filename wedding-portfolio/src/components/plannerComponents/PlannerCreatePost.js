import React, { useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";

function PlannerCreatePost(props) {
    const [input, setInput] = useState({
        couple_name: "",
        wedding_theme: "",
        wedding_date: "",
        item_photo: "",
        wedding_location: "",
        wedding_photographer: ""
    });

    const handleChanges2 = e => {
        console.log("I am in handleChanges2 on PlannerCreatPost.js");
        setInput({ ...input, [e.target.name]: e.target.value });

        console.log("handleChanges2 input from PlannerCreatePost.js: ", input);
      };

      const submitForm = e => {
        e.preventDefault();
       
        axiosWithAuth()
          .get(`/posts`)
          .then(res => {
            console.log(res.data);
            const id = [res.data.id];
            
            axiosWithAuth()
              .post(`/posts/${id}`, input)
              .then(res => {
                console.log("This is Post Event: ", res);
                props.history.push("/plannerportfolio");
              })
              .catch(err => console.log("Post Event Error: ", err.res));
          });
          
          setInput({
            couple_name: "",
            wedding_theme: "",
            wedding_date: "",
            item_photo: "",
            wedding_location: "",
            wedding_photographer: ""
          });
        }
        return (
            <div>
                <form onSubmit={submitForm}>
        {console.log("Test: ", input.couple_name)}
        <input
            type="text"
            name="couple_name"
            onChange={handleChanges2}
            placeholder="Enter Couples Name"
            value={input.couple_name}
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
            placeholder="Enter Wedding Date"
            value={input.wedding_date}
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
            placeholder="City"
            value={input.wedding_location}
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
            </div>
        )
}

export default PlannerCreatePost;