# Chat Application Backend

This is the backend for a chat application built using Node.js, Express, and MongoDB.

## Prerequisites

- Node.js
- npm
- MongoDB

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Rishabh-Pandey007/chat-application-backend
    ```
2. Navigate to the backend directory:
    ```bash
    cd chat-application/backend
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Configuration

1. Create a `.env` file in the root of the backend directory.
2. Add the following environment variables:
    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/chatapp
    JWT_SECRET=your_jwt_secret
    ```

## Running the Application

Start the server:
```bash
npm start
```

The server will be running on `http://localhost:3000`.

## API Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `GET /api/users` - Get all users
- `POST /api/messages` - Send a message
- `GET /api/messages` - Get all messages

## License

This project is licensed under the TIMSCDR COLLEGE