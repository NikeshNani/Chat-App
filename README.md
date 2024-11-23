# Chat Application

Chat Application
A simple real-time chat application built using **React.js** for the frontend, **Node.js**, **Express.js**, and **Socket.IO** for the backend, with **MongoDB** for database storage. The app allows multiple users to join a single chat group and exchange messages in real time.
---

## Features

- Real-time messaging using Socket.IO.
- Persistent message storage in MongoDB.
- Mock WhatsApp group-like functionality (only messaging).
- Responsive UI built with React.js.

---

## Installation and Setup

### Prerequisites

Make sure you have the following installed on your system:
- **Node.js** (v14 or above)
- **npm** (v6 or above)
- **MongoDB** (local or cloud)

### Backend Setup

1. Navigate to the `backend` folder:
   ```bash
   cd chatapp/backend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
    ```bash
   node index.js
   ```

### Frontend Setup

1. Navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```
   The frontend will be available at http://localhost:3000.

### Usage
Open multiple tabs in your browser and navigate to http://localhost:3000.
Type messages in the input box and press send.
All connected users will instantly see the messages in real time.

### Tech Stack
Frontend: React.js, Socket.IO Client
Backend: Node.js, Express.js, Socket.IO
Database: MongoDB

### Known Issues
No user authentication or authorization is implemented.
Designed for local testing; deployment scripts are not included.
