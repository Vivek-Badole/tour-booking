import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/userImg1.jpg";
import ava02 from "../../assets/images/userImg2.jpg";
import ava03 from "../../assets/images/userImg3.jpg";
import ava04 from "../../assets/images/userImg4.jpg";
import ava05 from "../../assets/images/userImg5.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoints: 992,
        settings: {
          slideToShow: 2,
          slideToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoints: 576,
        settings: {
          slideToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          We were part of a group of eleven; we enjoyed the small group, and
          Yusuf was excellent. The pace of the tour was fast, but that worked
          for us, as we saw so much in just a few days. We'd recommend it to
          anyone wishing to visit India.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Suraj Deotale</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          I've just come back from the Taj Express tour in India. It was
          amazing! Our tour leader Yusuf was the best. So knowledgeable, kind
          and one of life's gentlemen. The tour was the right balance of
          sightseeing and time out. The hotels were a great blend of old and
          new. I highly recommend On The Go and will definitely be using your
          company again.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava04} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Sunny Sharma</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Fabulous Trip to India visiting top spots we'd always wanted to see.
          We have just returned from a fabulous trip to Amritsar and the Gold
          Triangle. Our guide, Satendra, was very well-informed, funny and made
          sure everything ran smoothly.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Tushar Matthe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Fabulous trip - Really professional tour guide, very well planned
          whose knowledge was shared in an interesting and thoughtful way. City
          hotels were fantastic,less so in rural areas but in context of price
          paid and Indian infrastructure was ok. Historic sights are incredible
          and to be able to see so many in 8 days makes the lengthy bus journeys
          worth while
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Shalini Mehra</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          I really enjoyed this tour and loved India. Our guide Sat was great -
          patient, informative, funny and helpful. We enjoyed all the sites we
          saw and the information we received.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava05} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Yogesh Kumar</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
