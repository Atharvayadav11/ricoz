

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
   ```

2. Navigate into the project directory:
   ```bash
   cd ricoz
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```plaintext
   MONGO_URI=<your_mongodb_connection_string>
   ```

## Usage
- Start the server:
   ```bash
   node index.js
   ```

- The server will run on `http://localhost:3000`.

## API Endpoints
The following API endpoints are available:

- **GET** `/api/users`  
  Retrieve all users.

- **POST** `/api/users`  
  Create a new user.  
  **Request Body**:
  ```json
  {
      "name": "atharva",
      "email": "atharva@gmail.com",
      "age": "20"
  }
  ```

- **PUT** `/api/users/:id`  
  Update a user by ID.  
  **Request Body**:
  ```json
  {
      "name": "atharvayadav",
      "email": "atharvayadav@gmail.com",
      "age": "18"
  }
  ```
