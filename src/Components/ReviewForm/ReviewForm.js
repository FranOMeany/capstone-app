import {Table, Button} from 'react-bootstrap';
import "reactjs-popup/dist/index.css";
import GiveReviews from './GiveReviews';
import React, { useState } from 'react';
import "./ReviewForm.css";

export default function ReviewForm() {
  const [reviews, setReviews] = useState("")

  const handleReview = function (review) {
    setReviews(review);
    //console.log("Reviews:", review);
  };

  //console.log("Initial Reviews:",  ( reviews == "" ? "undefined" : reviews ) );

  return (
    <div style={{margin: "auto", maxWidth: "800px", marginTop: "10%"}}>
      <h2 style={{marginBottom: "10px"}}>Reviews</h2>
      <Table responsive>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>Provide Feedback</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dr. Joseph Smith</td>
            <td>Cardiology</td>
            <td>
              { 
                reviews === '' || ( reviews !== '' && reviews.serial !== 1 ) ? (<GiveReviews serial={1} onSetReviews={handleReview} />) : 
                ( <Button className='btn-disabled' variant="primary" disabled size ='sm'>Submitted</Button> )
              }
            </td>
            <td>
              {
                reviews && reviews.serial === 1 ? ( reviews.review ) : ( '' )
              }
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Dr. Kathy Mayers</td>
            <td>Dentist</td>
            <td>
              { 
                reviews === '' || ( reviews !== '' && reviews.serial !== 2 ) ? (<GiveReviews serial={2} onSetReviews={handleReview} />) : 
                ( <Button className='btn-disabled' variant="primary" disabled size ='sm'>Submitted</Button> )
              }
            </td>
            <td>
              {
                reviews && reviews.serial === 2 ? ( reviews.review ) : ( '' )
              }
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Dr. Roger Moore</td>
            <td>Dermatology</td>
            <td>
              { 
                reviews === '' || ( reviews !== '' && reviews.serial !== 3 ) ? (<GiveReviews serial={3} onSetReviews={handleReview} />) : 
                ( <Button className='btn-disabled' variant="primary" disabled size ='sm'>Submitted</Button> )
              }
            </td>
            <td>
              {
                reviews && reviews.serial === 3 ? ( reviews.review ) : ( '' )
              }
            </td>
          </tr>
          <tr style={{height: '25px'}}><td></td></tr>
        </tbody>
      </Table>
    </div>
  )
}