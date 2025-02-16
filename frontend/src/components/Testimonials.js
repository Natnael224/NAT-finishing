import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Testimonials.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/testimonials`)
      .then(response => {
        setTestimonials(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the testimonials!', error);
      });
  }, []);

  return (
    <div className="testimonials">
      <h2>Customer Testimonials</h2>
      <div className="testimonial-grid">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <h3>{testimonial.customer_name}</h3>
            <p className="feedback">{testimonial.feedback}</p>
            <p className="rating">Rating: {testimonial.rating} / 5</p>
            <p className="date">{new Date(testimonial.created_at).toLocaleDateString()}</p>
            <p className="message">{testimonial.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
