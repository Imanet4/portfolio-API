const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // <--- Import CORS

const userRoutes = require('./controllers/userController');
const projectRoutes = require('./controllers/projectController');
const skillRoutes = require('./controllers/skillsController');
const contactRoutes = require('./controllers/contactController');
const aboutRoutes = require('./controllers/aboutController'); // <--- Import aboutRoutes if needed

const app = express();
const PORT = 4000;

// Middleware
app.use(cors()); // <--- Enable CORS for all routes
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Portfolio-API')
  .then(() => console.log('✅ Connected To MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Route middlewares
app.use('/User', userRoutes);
app.use('/Project', projectRoutes);
app.use('/Skill', skillRoutes);
app.use('/Contact', contactRoutes);
app.use('/About', aboutRoutes); 

// Test route
app.get('/', (req, res) => {
  res.send('API IS RUNNING SUCCESSFULLY !');
});

// This one starts the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on: http://localhost:${PORT}`);
});
