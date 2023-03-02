import React from "react";
import "./footer.css";
import {HiOutlineLocationMarker,HiOutlineMail} from "react-icons/hi";
import {MdPhone} from "react-icons/md";
import {AiOutlineYoutube,AiFillGithub,AiOutlineInstagram} from "react-icons/ai";
import {FaFacebook} from "react-icons/fa"
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_travel.png";

const quicklinks = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/tours", display: "Tours" },
];

const quicklinks2 = [
  { path: "/gallery", display: "Gallery" },
  { path: "/login", display: "Login" },
  { path: "/register", display: "Register" },
];
const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                A beautiful way to look at the world's most beautiful places by-Exploring it.
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                   <AiOutlineYoutube />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <AiFillGithub />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                   <FaFacebook />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                  <AiOutlineInstagram />
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {
                quicklinks.map((item,index)=>(
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {
                quicklinks2.map((item,index)=>(
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          
          <Col lg='3'>
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links">
              
                  <ListGroupItem  className="ps-0 border-0 d-flex align-items-start gap-3">
                    <h6>
                      <span>
                      <HiOutlineLocationMarker />
                      </span>
                      Address:
                    </h6>
                    <p className="mb-0">Maharashtra,India</p>
                  </ListGroupItem>
                  <ListGroupItem  className="ps-0 border-0 d-flex align-items-start gap-3">
                    <h6>
                      <span>
                       <HiOutlineMail />
                      </span>
                      Email:
                    </h6>
                    <p className="mb-0">narutoluffy001@gmail.com</p>
                  </ListGroupItem>
                  <ListGroupItem  className="ps-0 border-0 d-flex align-items-start gap-3">
                    <h6>
                      <span>
                        <MdPhone/>
                      </span>
                      Phone:
                    </h6>
                    <p className="mb-0">+911234567890</p>
                  </ListGroupItem>
               
            </ListGroup>
          </Col>
          <Col lg="12" className="text-center pt-5">
            <p className="copyright">Copyright {year},design and develop by Naruto Luffy. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
