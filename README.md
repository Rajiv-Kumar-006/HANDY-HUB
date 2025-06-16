# 🧰 Handy Hub — Household Services On Demand

A full-stack MERN application where users can hire workers for household services like cleaning, cooking, laundry, and more. Handy Hub supports registered users and guest bookings, offering real-time location, email notifications, and admin control for smooth service management.

---

## 🌐 Live Demo

> 🚧 Coming Soon...

---

## 📘 Project Summary

**Handy Hub** allows:
- Users to book services with verified workers.
- Workers to register, manage bookings, and track locations.
- Admins to manage the platform, users, and bookings.

---

## 👥 User Roles & Features

### 🧑‍💼 Admin
- Manage all users, workers, and guest bookings
- Approve/reject worker registrations
- Add/edit/delete service categories
- View and manage feedback & ratings
- Block/unblock any user or worker

### 🧑‍🔧 Worker
- Register and verify email (OTP)
- Setup service types, availability, pricing
- Accept/reject bookings
- View map location of customers
- See upcoming & completed jobs

### 🧑‍💻 Registered User
- Register/login with email verification
- Browse services & workers
- Book services with time & date
- Track booking history and status
- Cancel/reschedule bookings
- Rate & review workers

### 🚪 Guest User
- Book service without signing up
- Provide name, email, address & location
- Receive email confirmation
- Temporary booking data (no dashboard)

---

## 🧠 Core Features

### 🛒 Booking System
- Browse service listings with filters
- Book one or multiple services
- Choose date and available time slot
- Track booking status in real-time

### 📍 Location Services
- Auto-fetch current location using Geolocation API
- Map preview (Google Maps / Leaflet.js)
- Save lat/lng coordinates with booking

### 📩 Email Functionality
- Email verification for registration (OTP based)
- Email confirmation after successful booking
- Workers receive booking alerts via email

---

## 💻 Tech Stack

### Frontend
- `React.js` / `Vue.js`
- `Tailwind CSS` / `Bootstrap`
- `Axios`, `React Router` / `Vue Router`
- Google Maps API / Leaflet.js

### Backend
- `Node.js`, `Express.js`
- `MongoDB`, `Mongoose`
- `JWT` for secure auth
- `Nodemailer` for emails

---

## 🗂️ Folder Structure

