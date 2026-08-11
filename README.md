#  UniMarketplace

A full-stack online marketplace platform developed for university students to buy and sell products within their campus community.

##  Overview

UniMarketplace is a web application that allows students to create accounts, list products, browse available items, communicate with other users, and complete purchases through an integrated payment system.

##  Features

### User Management
- User registration and login
- JWT authentication
- Email account activation
- User profile management

### Product Management
- Create and manage product listings
- Product search and browsing
- Product image upload
- Seller product management

### Payment & Communication
- Stripe payment integration
- Real-time messaging using Socket.io
- Cloud image storage using Cloudinary

---

#  Technologies Used

## Frontend
- React.js
- Redux Toolkit
- Material UI
- Axios

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Nodemailer

## Other Services
- MongoDB Atlas
- Cloudinary
- Stripe API
- Socket.io

---

#  Project Structure

```
UniMarketplace
│
├── frontend      # React application
├── backend       # Node.js API server
├── socket        # Real-time communication server
│
├── README.md
└── .gitignore
```

---

#  Installation

## 1. Clone Repository

```bash
git clone https://github.com/nandanjunior/Unimarketplace.git
```

```bash
cd Unimarketplace
```

---

## 2. Backend Setup

```bash
cd backend
npm install --legacy-peer-deps
```

Create:

```
backend/config/.env
```

Add your own:

- MongoDB connection
- JWT secret
- Email credentials
- Stripe keys
- Cloudinary credentials


Run:

```bash
npm start
```

Backend:

```
http://localhost:8000
```

---

## 3. Frontend Setup

```bash
cd frontend
npm install --legacy-peer-deps
```

Run:

```bash
npm start
```

Frontend:

```
http://localhost:3000
```

---

##  Environment Variables

Sensitive information is not included in this repository.

Create your own `.env` file using `.env.example` as reference.

Never upload:

- Database passwords
- API keys
- Secret keys

---

#  Future Improvements

- Mobile application version
- Product recommendation system
- Advanced search filters
- Rating and review system

---

#  Developer

Nandan

CAT304 Group Project
