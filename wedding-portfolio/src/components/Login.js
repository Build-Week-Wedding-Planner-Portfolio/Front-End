import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default function LoginForm () {
    return (
        <Form>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input 
                type="email" 
                name="email" 
                id="exampleEmail" 
                placeholder="Email" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input 
                type="password" 
                name="password" 
                id="examplePassword" 
                placeholder="Password (6 or more characters" />
            </FormGroup>
            <Button>Login</Button>
        </Form>



    )

}






