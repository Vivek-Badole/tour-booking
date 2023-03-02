import React from "react";
import "../styles/homepage.css";
import Slider from "react-slick";

import { Container, Row, Col } from "reactstrap";
import sliderImg1 from "../assets/images/sliderImg1.webp";
import sliderImg2 from "../assets/images/sliderImg2.webp";
import sliderImg3 from "../assets/images/sliderImg3.webp";
import sliderImg4 from "../assets/images/sliderImg4.jpg";
import sliderImg5 from "../assets/images/sliderImg5.jpg";
import sliderImg6 from "../assets/images/sliderImg6.jpg";

import namaste_logo from "../assets/images/namaste_logo.png";
import travel_satisfy from "../assets/images/travel_satisfy.jpg";




import Subtitle from "../Shared/Subtitle";
import SearchBar from "../Shared/SearchBar";
import ServiceList from "../Services/ServiceList";
import FeaturedTourList from "../Components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../Components/ImagesGallery/MasonryImagesGallery";
import Testimonials from "../Components/Testimonial/Testimonials";
import NewsLetter from "../Shared/NewsLetter";

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 5000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,

    responsive: [
      {
        breakpoints: 992,
        settings: {
          slideToShow: 1,
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
    <>
      {/* Slider */}

      <Container className="mt-3">
        <Slider {...settings}>
          <div>
            <div className="sliderImg">
            <img src={sliderImg4} alt="" />
            </div>
          </div>
          <div>
            <div className="sliderImg">
            <img src={sliderImg2} alt="" />
            </div>
          </div>
          <div>
            <div className="sliderImg">
              <img src={sliderImg3} alt="" />
            </div>
          </div>
          <div>
            <div className="sliderImg">
              <img src={sliderImg5} alt="" />
            </div>
          </div>
          <div>
            <div className="sliderImg">
              <img src={sliderImg6} alt="" />
            </div>
          </div>
          <div>
            <div className="sliderImg">
              <img src={sliderImg1} alt="" />
            </div>
          </div>
        </Slider>
      </Container>

      {/* hero section start */}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Welcome to our tours and travels"} />
                  <img src={namaste_logo} alt="" />
                </div>
                <h1>
                Travel is the only thing you buy that makes you richer
                  
                </h1>
                <p>
                  Let us help you by showing you most beautiful places on earth.Travelling is the best way to explore everything around us.
                </p>
              </div>
            </Col>
            <Col lg='6'>
            <Slider {...settings} >
          <div>
            <div  className="miniSlider">
            {/* <video src={nigeria_falls} alt="" controls/> */}
            <video src="
https://user-images.githubusercontent.com/97503546/222445046-ecf8057e-871d-4e42-8071-bb0ca3ecbbe6.mp4" alt="" controls autoPlay muted  />
            </div>
          </div>
        </Slider>
            </Col>
            {/* <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col> */}
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* featured Tour */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* Experience Section */}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all experiences <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  <br /> Quaerat atque animi provident repudiandae illsis.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={travel_satisfy} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery Section */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonal section */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Reviews"} />
              <h2 className="testimonal__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      <NewsLetter />
    </>
  );
};

export default HomePage;
