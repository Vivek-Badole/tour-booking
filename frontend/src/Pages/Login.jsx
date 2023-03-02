import React, { useContext, useState } from "react";
import "../styles/login.css";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

import loginImg from "../assets/images/login.jpg";
import userIcon from "../assets/images/user.png";
//import { BASE_URL } from "../utils/config";
import { AuthContext } from "../Context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const [credentials, setCredentials] = useState({
    email:undefined,
    password:undefined,
  });

const {dispatch} =useContext(AuthContext);
const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };


const handleClick = async e => {
  e.preventDefault();

  dispatch({type:"LOGIN_START"});

try {
    const res  = await fetch(`/api/auth/login`,{
      method:"post",
      headers : {
        "content-type":"application/json"
      },
      credentials:'include',
      body:JSON.stringify(credentials)
    });
    let result = await res.json();
  
  if(!res.ok) return toast.error(result.message, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
//console.log(result.data,"data");

  dispatch({type:"LOGIN_SUCCESS",payload:result.data})
  toast.success(result.message, {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
    setTimeout(()=>{
      navigate('/')
    },1500)
} catch (error) {
  dispatch({type:"LOGIN_FAILURE",payload:error.message});
  toast.error(error.message, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
}


}
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    Login
                  </Button>
                </Form>
                <p>Don't have an account? <Link to='/register'>Register!</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </section>
    
  );
};

export default Login;
