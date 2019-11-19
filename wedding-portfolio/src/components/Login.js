import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from "react-redux";
import { login } from "../actions";


function LoginForm (props) {
    
        const [userInfo, setUserInfo] = useState("");

        const handleChange = e => {
            setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
          };
       
          const handleSubmit = e => {
            console.log(":for class", props);
            e.preventDefault();
            props
              .logIn(userInfo)
        
              .then(res => {
                if (res) {
                  console.log(res);
                  props.history.push("/plannerportfolio");
                } else {
                  console.log("else fired");
                  alert("Log in failed: Please Check Usernname and Password");
                }
              });
          };

          return (
        <div className="body"> 
            <image src = "" />
            <Form onSubmit={handleSubmit} className="login">
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input 
                    type="email" 
                    name="email" 
                    id="exampleEmail" 
                    placeholder="Email" 
                    onChange={handleChange}
                    value={userInfo.username}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input 
                    type="password" 
                    name="password" 
                    id="examplePassword" 
                    placeholder="Password (6 or more characters" 
                    onChange={handleChange}
                    value={userInfo.password}
                    />
                </FormGroup>
            <Button type='submit' className="loginButton">Login</Button>
            </Form>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
      isLogging: state.loginReducer.isLogging,
      error: state.loginReducer.error,
      user: state.loginReducer.user
    };
  };
  export default connect(
    mapStateToProps,
    { login }
  )(LoginForm);
  







