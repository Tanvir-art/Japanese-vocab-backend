# 日本語 Learn - Backend

This is the backend API for the **日本語 Learn** application, providing RESTful endpoints for managing lessons, vocabularies, and user authentication. The backend is built using **Node.js**, **Express**, and **MongoDB**.

## Features

- **User Authentication**: JWT-based authentication for secure user login and registration.
- **Lesson Management**: Create, read, update, and delete lessons.
- **Vocabulary Management**: Create, read, update, and delete vocabulary associated with lessons.
- **Admin Panel**: Admin users can manage lessons and vocabularies.
- **CORS Enabled**: API allows cross-origin requests for frontend integration.

## Table of Contents

- [Installation](#installation)
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js**: Version 14 or higher
- **npm**: Version 6 or higher
- **MongoDB**: Database setup (or use a cloud database service like MongoDB Atlas)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/japanese-learn-backend.git
2. cd japanese-learn-backend
3. npm install
4.
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret 
5. npm run start


