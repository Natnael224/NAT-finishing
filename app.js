const express = require('express');
const cors = require('cors');
const projectRoutes = require('./routes/projectRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const inquiryRoutes = require('./routes/inquiryRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/inquiries', inquiryRoutes);

module.exports = app;
