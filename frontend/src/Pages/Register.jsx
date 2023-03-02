import React, { useState,useContext } from "react";
import "../styles/register.css";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link ,useNavigate} from "react-router-dom";

import registerImg from "../assets/images/register.jpg";
import userIcon from "../assets/images/user.png";
import { AuthContext } from "../Context/AuthContext";
//import { BASE_URL } from "../utils/config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

  const [credentials, setCredentials] = useState({
    userName:undefined,
    email:undefined,
    password:undefined,
  });


const {dispatch} = useContext(AuthContext);
const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

const handleClick = async e => {
  e.preventDefault();
  
  try {
    const res = await fetch(`/api/auth/register`,{method:"post",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(credentials)
    });

    const result = await res.json();

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

    dispatch({type:"REGISTER_SUCCESS"});
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
      navigate('/login')
    },1500)

  } catch (error) {
   return toast.error(error.message, {
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
            <div className="register__container d-flex justify-content-between">
              <div className="register__img">
                <img src={registerImg} alt="" />
              </div>

              <div className="register__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Username"
                      id="userName"
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
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
                    Create Account
                  </Button>
                </Form>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </section>
  );
};

export default Register;
