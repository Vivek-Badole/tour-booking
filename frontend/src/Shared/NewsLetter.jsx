import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import subscribe from "../assets/images/subscribe.jpg";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get useful traveling information</h2>
              <div className="newsletter__input">
                <input type="text" placeholder="Enter your email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
                Connect with us to know our best offers and deals available at cheap prices.
                Enjoy your journey with us.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
                <img src={subscribe} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
