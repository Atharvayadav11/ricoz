# Node Assignment

## Overview
This repository contains a Node.js application developed as part of the assignment for Ricoz. The application provides a RESTful API to manage user data, utilizing the MVC (Model-View-Controller) architecture, and connects to a MongoDB database using Mongoose.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)


## Features
- Create, Read, and Update user data via a RESTful API.
- Uses Mongoose for MongoDB object modeling.
- Organized using the MVC architecture.
- Includes error handling and validation.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Postman (for testing the API)

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/Atharvayadav11/ricoz.git
Navigate into the project directory

Install the required dependencies:
npm install

Create a .env file in the root directory and add your MongoDB connection string:
MONGO_URI=<your_mongodb_connection_string>


##Usage
1.Start the server:
node index.js
The server will run on http://localhost:3000.

##API Endpoints
The following API endpoints are available:

Users
1.GET /api/users
Retrieve all users.

2.POST /api/users
Create a new user.
Request Body:
json
{
    "name":"atharva",
    "email":"atharva@gmail.com",
    "age":"20"
}

3.PUT /api/users/:id
Update a user by ID.
Request Body:
json
{
    "name":"atharvayadav",
    "email":"atharvayadav@gmail.com",
    "age":"18"
}

