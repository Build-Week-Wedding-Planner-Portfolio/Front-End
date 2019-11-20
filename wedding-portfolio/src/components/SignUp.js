import React, { useState } from "react";
import { connect } from "react-redux";
import { register } from "../actions";
import { Link } from "react-router-dom";


function SignUp(props) {
  const [input, setInput] = useState("");
  const handleChanges = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(
      { input },
      
    );
  };
  const submitForm = e => {
    e.preventDefault();
    props
      .register(input)

      .then(res => {
        if (res) {
          props.history.push("/");
        } else {
          window.alert("Registration Failed all fields must be entered");
        }
      });

    setInput({
      username: "",
      password: "",
      email: "",
      location: "",
    });
  };

  return (
    <div>
      {props.isLogging && <div>Loading</div>}

      <form onSubmit={submitForm}>
        <input
          type="text"
          name="username"
          onChange={handleChanges}
          placeholder="Enter Username"
          value={input.username}
        />
        <input
          type="password"
          name="password"
          onChange={handleChanges}
          placeholder="Enter Password"
          value={input.password}
        />
        
        <input
            type="email"
            name="email"
            onChange={handleChanges}
            placeholder="email"
            value={input.email}
          />
          <input
            type="text"
            name="location"
            onChange={handleChanges}
            placeholder="Location"
            value={input.location}
          />

        <button>Submit</button>
      </form>
      <Link to="/">
        <button>Back</button>
      </Link>

      {props.error && <div>{props.error.message}</div>}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.signUpReducer.user,
    isRegistering: state.signUpReducer.isRegistering,
    error: state.signUpReducer.error
  };
};
export default connect(
  mapStateToProps,
  { register }
)(SignUp);



// import React, { useEffect, useState } from "react";
// // import axios from "axios";
// import { withFormik, Form, Field } from "formik";
// import * as Yup from "yup";
// import styled from 'styled-components';
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { register } from "../actions";
// //Styles begin here

// const FormCard = styled(Form)`
//   background-color: white;
//   width: 380px;
//   height: auto;
//   border-radius: 15px;
//   padding: 10px;
//   box-shadow: 0px 1px 4px black;
//   text-align: center;
//   margin: 15px auto;
//   margin-top: 15%;
//   display: flex;
//   flex-direction:column;
// `;
// const FormContent = styled(Field)`
//   background-color: white;
//   display:flex;
//   flex-direction:column;
//   margin:5%;
//   margin-top: 5%;
//   padding:1% 0;
// `;
// const StyledButton = styled.button`
// //   background-color: blue;
//   display: flex;
//   flex-direction: column;
//   margin-left:27%;
//   width:50%;
//   align-items:center;
//   margin-top:3%;
// `;
// const StyledH2 = styled.h2`
//   display: flex;
//   flex-direction: column;
//   margin-left:27%;
//   width:50%;
//   align-items:center;
//   margin-top:2%;
// `;
// //Stlyes end here

// const SignUp = ({ errors, touched, status, register, values }) => {
//     const [newUsers, setNewUsers] = useState([]);
//     useEffect(() => {
//         status && setNewUsers(newUsers => [...newUsers, status]);
//     }, [status]);
// return (
//     <div>
//     <FormCard>
//          <StyledH2>
//         Join Us
//          </StyledH2>
//         <FormContent type="text" name="username" placeholder="Username" />
//         <FormContent type="password" name="password" placeholder="Password" />
//         {touched.password && errors.password && (
//             <p className="errors">{errors.password}</p>
//         )}
//         <FormContent type="email" name="email" placeholder="Email" />
//         {touched.email && errors.email && (
//             <p className="errors">{errors.email}</p>
//         )}
//         <FormContent type="text" name="location" placeholder="Location" />
//         <Link to="/login">
//         <StyledButton type='submit'>
//             Sign Up
//         </StyledButton>
//         </Link>
//         </FormCard>
//         {newUsers.map(user => (
//             <ul key="{user.id}">
//                 <li>username: {user.username}</li>
//                 <li>password: {user.password}</li>
//                 <li>email: {user.email}</li>
//                 <li>location:{user.location}</li>
//             </ul>
//         ))}
//     </div>
// )
// }
// const FormikSignUp = withFormik({
//     mapPropsToValues({ username, password, email, location, register }) {
//         return {
//             username: username || "",
//             password: password || "",
//             email: email || "",
//             location: location || "",
//             register: register
//         };
//     },
//     validationSchema: Yup.object().shape({
//         email: Yup.string().required(),
//         password: Yup.string().required()
//     }),

//     handleSubmit(values, { setStatus, props }) {
//         console.log('values', values)
//         console.log('props', props)
//         values.register({username:values.username, password:values.password, email:values.email, location:values.location})
//         setStatus();
//     }
// })(SignUp);

// const mapStateToProps = state => {
//     return {
//       user: state.signUpReducer.user,
//       isRegistering: state.signUpReducer.isRegistering,
//       error: state.signUpReducer.error
//     };
//   };
  
//   export default connect(
//     mapStateToProps,
//     { register }
//   )(FormikSignUp);


