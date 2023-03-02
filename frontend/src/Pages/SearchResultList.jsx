import React, { useEffect, useState } from "react";
import CommonSection from "../Shared/CommonSection.jsx";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom";
import TourCard from "../Shared/TourCard";
import NewsLetter from "../Shared/NewsLetter";

const SearchResultList = () => {
  const location = useLocation();

  const [data] = useState(location.state);
  console.log(data);
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <>
      <CommonSection title={"Tour Search Result"} />

      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="d-flex  justify-content-center">No tour found</h4>
            ) : (
              data?.map((tour) => (
                <Col lg="3" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </>
  );
};

export default SearchResultList;
