CURE DESK - MEDICAL APPOINTMENT BOOKING SYSTEM

A comprehensive medical appointment booking system built with MERN stack that allows patients to book appointments with doctors, manage their profiles, and interact with healthcare providers efficiently.

FEATURES

Patient Features
- User registration and authentication
- Browse and search for doctors by speciality
- Book appointments with available time slots
- View and manage upcoming appointments
- Update personal profile information
- Secure payment integration
- Mobile responsive design

Doctor Features
- Doctor authentication and profile management
- View and manage appointment schedules
- Mark appointments as completed or cancelled
- Update availability status
- Dashboard with earnings and patient statistics
- Profile customization with fees and availability

Admin Features
- Admin dashboard with comprehensive analytics
- Manage all doctors and their availability
- View and manage all appointments
- Add new doctors to the system
- Cancel appointments when necessary
- Monitor system statistics and earnings

TECHNOLOGY STACK

Frontend
- React.js for user interface
- React Router for navigation
- Axios for API calls
- React Toastify for notifications
- Tailwind CSS for styling
- Vite as build tool

Backend
- Node.js runtime environment
- Express.js web framework
- MongoDB database with Mongoose ODM
- JWT for authentication
- Bcrypt for password hashing
- Cloudinary for image storage
- Multer for file uploads
- CORS for cross-origin requests

INSTALLATION AND SETUP

Prerequisites
- Node.js version 14 or higher
- MongoDB database
- Cloudinary account for image storage

Backend Setup
1. Navigate to backend directory
   cd backend

2. Install dependencies
   npm install

3. Create environment file
   Create .env file in backend directory with following variables:
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
   ADMIN_EMAIL=your_admin_email
   ADMIN_PASSWORD=your_admin_password

4. Start backend server
   npm start

Frontend Setup
1. Navigate to frontend directory
   cd frontend

2. Install dependencies
   npm install

3. Create environment file
   Create .env file in frontend directory:
   VITE_BACKEND_URL=http://localhost:3000

4. Start frontend development server
   npm run dev

Admin Panel Setup
1. Navigate to admin directory
   cd admin

2. Install dependencies
   npm install

3. Create environment file
   Create .env file in admin directory:
   VITE_BACKEND_URL=http://localhost:3000

4. Start admin panel development server
   npm run dev

PROJECT STRUCTURE

Cure_Desk/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── assets/
│   └── public/
├── admin/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── assets/
│   └── public/
└── readme.md

API ENDPOINTS

User Authentication
- POST /api/user/register - Register new user
- POST /api/user/login - User login
- GET /api/user/get-profile - Get user profile
- POST /api/user/update-profile - Update user profile

Appointments
- POST /api/user/book-appointment - Book new appointment
- GET /api/user/appointments - Get user appointments
- POST /api/user/cancel-appointment - Cancel appointment

Doctor Management
- POST /api/doctor/login - Doctor login
- GET /api/doctor/appointments - Get doctor appointments
- POST /api/doctor/cancel-appointment - Cancel appointment
- POST /api/doctor/complete-appointment - Mark appointment complete
- GET /api/doctor/profile - Get doctor profile
- POST /api/doctor/update-profile - Update doctor profile
- GET /api/doctor/dashboard - Get doctor dashboard data

Admin Operations
- POST /api/admin/login - Admin login
- POST /api/admin/add-doctor - Add new doctor
- GET /api/admin/all-doctors - Get all doctors
- POST /api/admin/change-availability - Change doctor availability
- GET /api/admin/all-appointments - Get all appointments
- POST /api/admin/cancel-appointment - Cancel appointment
- GET /api/admin/dashboard - Get admin dashboard data

USAGE

For Patients
1. Register for a new account or login with existing credentials
2. Browse available doctors by speciality
3. Select a doctor and choose available appointment slot
4. Fill in appointment details and confirm booking
5. Manage appointments from the My Appointments section
6. Update profile information as needed

For Doctors
1. Login with doctor credentials through admin panel
2. View scheduled appointments in doctor dashboard
3. Mark appointments as completed or cancel if necessary
4. Update profile information including fees and availability
5. Monitor earnings and patient statistics

For Administrators
1. Login with admin credentials
2. Add new doctors to the system
3. Manage doctor availability and profiles
4. Monitor all appointments and system activity
5. View comprehensive dashboard analytics

AUTHENTICATION AND SECURITY

- JWT tokens for secure authentication
- Bearer token format for API requests
- Password hashing using bcrypt
- Protected routes requiring authentication
- Token expiration handling
- CORS configuration for secure cross-origin requests

DATABASE MODELS

User Model
- name, email, password
- phone, address, gender, date of birth
- profile image
- timestamps

Doctor Model
- name, email, password
- speciality, degree, experience
- about, fees, address
- availability status
- profile image
- slots booked information

Appointment Model
- user ID and doctor ID references
- appointment date and time
- user data and doctor data
- appointment amount
- payment status
- completion status
- cancellation status

CONTRIBUTING

1. Fork the repository
2. Create a new branch for your feature
3. Make your changes and test thoroughly
4. Submit a pull request with detailed description

LICENSE

This project is licensed under the MIT License

CONTACT

For any questions or support, please contact the development team through the repository issues section.