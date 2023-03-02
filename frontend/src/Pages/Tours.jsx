import React, { useState, useEffect } from "react";
import CommonSection from "../Shared/CommonSection";
import "../styles/tour.css";
import SearchBar from "../Shared/SearchBar";
import TourCard from "../Shared/TourCard";
import NewsLetter from "../Shared/NewsLetter";

import { Container, Row, Col } from "reactstrap";
import useFetch from "../hooks/useFetch";
//import { BASE_URL } from "../utils/config";
import loading1 from "../assets/images/loading-fast.gif";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: tours,
    loading,
    error,
  } = useFetch(`/api/tours?page=${page}`);
  const { data: tourCount } = useFetch(
    `/api/tours/search/getTourCount`
  );
  //console.log(tours,"tours");
  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 0)
  }, [page, tourCount,tours]);

  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          {loading && <p className="text-center"><img src={loading1} alt="Loading" /></p>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              {tours?.map((tour) => (
                <Col lg="3" md='6' sm='6' className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))}
              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? "active__page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <NewsLetter />
    </>
  );
};

export default Tours;
