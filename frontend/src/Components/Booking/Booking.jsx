import React, { useState,useContext} from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import {AiTwotoneStar} from "react-icons/ai";
import {IoCloseOutline} from "react-icons/io5"
import { AuthContext } from "../../Context/AuthContext";
//import { BASE_URL } from "../../utils/config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = ({ tour, avgRating }) => {
  const { price, reviews,title } = tour;
  const navigate = useNavigate();

const {user} = useContext(AuthContext);
//console.log(user,"user");

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName:title,
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(booking.guestSize) + Number(serviceFee);

  //send data to server

  const handleClick = async (e) => {
    e.preventDefault();
    //console.log(booking,"booking")

try {

  if(user){

    const res = await fetch(`/api/booking`,{
      method:"post",
      headers:{
        "content-type" : "application/json"
      },
      credentials:'include',
      body:JSON.stringify(booking)
    });
    
    let result =  await res.json();
    
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
        setTimeout(()=>{navigate('/thank-you');},1000)
    
  }else {
    return toast.warn('Please Sign In', {
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

    

  };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
        ₹{price} <span>/per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center">
        <AiTwotoneStar style={{ color: "#FF9529" }} /> {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>
      {/* Booking Form */}

      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder="Date"
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="People"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
       
      {/* Booking Bottom */}

      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ₹{price}  <IoCloseOutline/> 1 person
            </h5>
            <span>₹{price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service Charge</h5>
            <span>₹{serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>₹{totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4" >
          Book Now
        </Button>
      </div>
      </Form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Booking;
