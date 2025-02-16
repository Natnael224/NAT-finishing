import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/services`)
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the services!', error);
      });
  }, []);

  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="service-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <img src={service.image_url} alt={service.service_name} />
            <h3>{service.service_name}</h3>
            <p>{service.description}</p>
            <p><strong>Price:</strong> ${service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
