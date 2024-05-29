import Popup from "reactjs-popup";
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Star from './Star'; // Import star component
import './GiveReviews.css';

function GiveReviews({serial, onSetReviews}) {
  const [showForm, setShowForm] = useState(false);                                // State to track if the form should be displayed
  const [submittedMessage, setSubmittedMessage] = useState('');                   // State to store the submitted message
  const [showWarning, setShowWarning] = useState(false);                          // State to show a warning message
  const [formData, setFormData] = useState({                                      // State to store form data
    serial: serial,
    name: '',     // Name input field
    review: '',   // Review input field
    rating: 0     // Rating input field
  });

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //console.log("Formdata: ", formData );

    setSubmittedMessage(formData);                          // Set submitted message to the form data
    onSetReviews(formData);
    
    // Check if all fields are filled before submitting
    if (formData.name && formData.review && formData.rating > 0) {
      setShowWarning(false);                                // Hide warning message if all fields are filled
      setFormData({ serial: 0, name: '', review: '', rating: 0 });     // Reset form data
      setShowForm(false);
    } else {
      setShowWarning(true);     // Show warning message if any field is empty
    }
  };

  const handleStarClick = (starIndex) => {
    setFormData({ ...formData, rating: starIndex + 1 });
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          selected={i < formData.rating}
          onClick={() => handleStarClick(i)}
        />
      );
    }
    return stars;
  };

  return (
    <div>
      <Button variant="primary" /*disabled*/ onClick={handleButtonClick}>Click Here</Button>

      <Popup
        style={{ backgroundColor: "#FFFFFF" }}
        modal
        open={showForm}
        onClose={() => setShowForm(false)}
      >
        <section className="review-form">
        <form onSubmit={handleSubmit}>
          <h2>Give Your Review</h2>
          {showWarning && <p className="warning">Please fill out all fields.</p>}
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="review">Review:</label>
            <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label>Rating:</label>
            <div className="rating">
              {renderStars()}
            </div>
          </div>         
          <Button variant="primary" type="submit">Submit</Button>
        </form>
        </section>
      </Popup>
    </div>
  );
}

export default GiveReviews;