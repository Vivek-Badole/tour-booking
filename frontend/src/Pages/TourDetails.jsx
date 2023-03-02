import React, { useContext, useEffect, useRef, useState } from "react";
import "../styles/tour_details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../Components/Booking/Booking";
import NewsLetter from "../Shared/NewsLetter";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import { FaAddressCard } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BiRupee } from "react-icons/bi";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import useFetch from "../hooks/useFetch";
//import { BASE_URL } from "../utils/config";
import { AuthContext } from "../Context/AuthContext";
import loading1 from "../assets/images/loading-fast.gif";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [hover, setHover] = useState(0);
  const [tourRating, setTourRating] = useState(0);

  const { user } = useContext(AuthContext);
  // console.log(user,"user");

  //Fetching data form database

  const { data: tour, loading, error } = useFetch(`/api/tours/${id}`);

  const {
    photo,
    title,
    desc,
    price,
    address,
    reviews,
    city,
    distance,
    maxGroupSize,
    location,
  } = tour;
  const { avgRating, totalRating } = calculateAvgRating(reviews);
  // Format date
  const options = { day: "numeric", month: "long", year: "numeric" };
  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (user) {
        const reviewObj = {
          userName: user?.userName,
          reviewText,
          rating: tourRating,
        };

        const res = await fetch(`/api/review/${id}`, {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(reviewObj),
        });

        let result = await res.json();

        if (!res.ok) return toast.error(result.message, {
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
          window.location.reload();

      } else {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  function Star({ yellow }) {
    return <AiOutlineStar className={yellow ? "yellowStar" : ""} />;
  }

  function shouldBeRated(index) {
    return index <= hover || index <= tourRating;
  }

  const clearRating = ()=>{
    setTourRating(0);
    setHover(0);
  }

  return (
    <>
      <section>
        <Container>
          {loading && (
            <h4 className="text-center pt-5">
              <img src={loading1} alt="Loading" />
            </h4>
          )}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="tour__content">
                  <img src={photo} alt="" />
                  <div className="tour__info">
                    <h2>{title}</h2>
                    <div className="d-flex align-items-center gap-5">
                      <span className="tour__rating d-flex align-items-center gap-1">
                        <AiTwotoneStar style={{ color: "#FF9529" }} />{" "}
                        {avgRating === 0 ? null : avgRating}{" "}
                        {totalRating === 0 ? (
                          "Not rated"
                        ) : (
                          <span>({reviews?.length})</span>
                        )}
                      </span>

                      <span>
                        <FaAddressCard /> <a href={location}>{address}</a>
                      </span>
                    </div>
                    <div className="tour__extra_details">
                      <span>
                        <IoLocationOutline />
                        {city}
                      </span>
                      <span>
                        <BiRupee />
                        {price}/per person
                      </span>
                      <span>
                        <MdOutlineAddLocationAlt /> {distance} K/m
                      </span>
                      <span>
                        <IoIosPeople style={{ fontSize: "25px" }} />
                        {maxGroupSize} people
                      </span>
                    </div>
                    <h5>Description</h5>
                    <p>{desc}</p>
                  </div>

                  {/* Tour review section */}
                  <div className="tour__reviews mt-4">
                    <div className="tour__reviews__clear">
                    <h4>Reviews ({reviews?.length} reviews)</h4>
                    <button onClick={clearRating}>
                          Clear Rating
                        </button>
                    </div>
                    
                    <Form onSubmit={submitHandler}>
                      {/* <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                        <span onClick={() => setTourRating(1)}>
                          1 <AiTwotoneStar />
                        </span>
                        <span onClick={() => setTourRating(2)}>
                          2 <AiTwotoneStar />
                        </span>
                        <span onClick={() => setTourRating(3)}>
                          3 <AiTwotoneStar />
                        </span>
                        <span onClick={() => setTourRating(4)}>
                          4 <AiTwotoneStar />
                        </span>
                        <span onClick={() => setTourRating(5)}>
                          5 <AiTwotoneStar />
                        </span>
                      </div> */}
                      <div>
                        <ul className="starList">
                          {[1, 2, 3, 4, 5].map((index) => {
                            return (
                              <li
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(0)}
                                onClick={() => setTourRating(index)}
                                className="starListItem"
                                key={index}
                              >
                                <Star yellow={shouldBeRated(index)} />
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div className="review__input">
                        <input
                          type="text"
                          ref={reviewMsgRef}
                          placeholder="share your thoughts"
                          required
                        />
                        <button
                          className="btn primary__btn text-white"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </Form>
                    <ListGroup className="user__reviews">
                      {reviews?.map((review, index) => (
                        <div className="review__item" key={index}>
                          <img src={avatar} alt="" />
                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>{review.userName}</h5>
                                <p>
                                  {new Date(
                                    review.createdAt
                                  ).toLocaleDateString("en-US", options)}
                                </p>
                              </div>
                              <span className="d-flex align-items-center">
                                {review.rating}{" "}
                                <AiTwotoneStar style={{ color: "#FF9529" }} />
                              </span>
                            </div>
                            <h6>{review.reviewText}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                </div>
              </Col>
              <Col lg="4">
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <NewsLetter />
      <ToastContainer />
    </>
  );
};

export default TourDetails;
