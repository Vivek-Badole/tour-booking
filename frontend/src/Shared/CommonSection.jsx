
import React from 'react';
import "./common_section.css";
import {Container,Row,Col} from "reactstrap";

const commonSection = ({title}) => {
  return (
    <section className="common__section">
        <Container>
            <Row>
                <Col lg='12'>
                    <h1>{title}</h1>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default commonSection