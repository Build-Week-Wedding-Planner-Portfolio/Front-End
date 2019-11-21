import React, {useState, useEffect} from "react";
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
// import useForm from "react-hook-form";



const LoginForm = ({ values, errors, touched, status }) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      status && setUsers(users => [...users, status]);
    }, [status]);

    return (
        <div>
          <Form>
            <Field type="email" name="email" placeholder="Email" />
            {touched.email && errors.email && (
              <p className="errors">{errors.email}</p>
            )}
    
            <Field type="password" name="password" placeholder="Password" />
            {touched.password && errors.password && <p className="errors">{errors.password}</p>}
    
            <button className="loginButton" type="submit">Submit</button>
          </Form>
          {users.map(user => (
            <ul key={user.id}>
              <li> email: {user.email}</li>
              <li>password: {user.password}</li>
            </ul>
          ))}
        </div>
      );
    };
    const FormikLoginForm = withFormik({
        mapPropsToValues({ email, password }) {
          return {
            email: email || "",
            password: password || "",
          };
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().required(),
            password: Yup.string().required()
          }),
          handleSubmit(values, { setStatus }) {

            axios
            .post("https://weddingplannerlambda.herokuapp.com/api/auth/login")
            .then(res => {
              setStatus(res.data);
              console.log(res);
            })
            .catch(err => console.log(err.response));
        }
      })(LoginForm);



export default FormikLoginForm;




