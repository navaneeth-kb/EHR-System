# 🏥 Electronic Health Record (EHR) System

A simplified Electronic Health Record (EHR) system built using the MERN stack.  
This application allows managing patient profiles and their medical visit records, including diagnosis details, prescribed medications, and visit history.

---

## 🚀 Live Deployment

Frontend (Vercel):  
https://ehr-system-theta.vercel.app/

Backend API (Render):  
https://ehr-system-3kgk.onrender.com/api

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Hooks (useState, useEffect)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### Database
- MongoDB Atlas (Cloud hosted)

### Deployment
- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

## 📌 Features

### 👤 Patient Management
- Add new patients
- View patient list
- Delete patients
- Store patient details:
  - First Name
  - Last Name
  - Date of Birth
  - Gender (Dropdown)
  - Email (Optional, unique if provided)

### 🏥 Visit Management
- Add medical visit records per patient
- Store:
  - Visit date
  - Diagnosis
  - Medications
  - Notes
- View visit history in chronological order
- Delete visit records

### 🔒 Validation & Error Handling
- Required field validation
- Unique email handling using sparse index
- Centralized error-handling middleware
- Proper HTTP status codes
- Backend validation with Mongoose

---

## ⚙️ Local Setup Instructions

### 1️⃣ Clone Repository

git clone https://github.com/navaneeth-kb/EHR-System.git
cd EHR-System

Backend Setup
cd backend
npm install

.env
MONGO_URI=your_mongodb_connection_string

Frontend Setup
cd frontend
npm install
npm run dev

API Endpoints -

Patients
GET /api/patients
POST /api/patients
DELETE /api/patients/:id

Visits
GET /api/visits/:patientId
POST /api/visits/:patientId
DELETE /api/visits/:id
