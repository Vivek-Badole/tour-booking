import React from 'react';
import TourCard from '../../Shared/TourCard';
import {Col} from "reactstrap";
import useFetch from "../../hooks/useFetch.js";
//import { BASE_URL } from '../../utils/config';
import loading1 from "../../assets/images/loading-fast.gif";

const FeaturedTourList = () => {

  const {data:featuredTours,loading,error}=useFetch(`/api/tours/search/getFeaturedTours`);
 
  return <>
  {
    loading && <h4 className="d-flex justify-content-center pt-5"><img src={loading1} alt="Loading" /></h4>
  }
  {
    error && <h4>{error}</h4>
  }
  {
   !loading && !error && featuredTours?.map(tour=>(
        <Col lg='3' md='6' sm='6' className='mb-4' key={tour._id}>
            <TourCard tour={tour} />
        </Col>
    ))
  }
  </>
}

export default FeaturedTourList