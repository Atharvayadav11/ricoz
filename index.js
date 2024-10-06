const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// environment variables
dotenv.config();

// express app
const app = express();

//Middleware
app.use(express.json());

// DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('DB connection error:', err));

// user routes
const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);

// server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
