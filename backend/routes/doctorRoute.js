import express from 'express';
import authDoctor from '../middleware/authDoctor.js';
import { loginDoctor, appointmentsDoctor, appointmentCancel, doctorList, changeAvailability, appointmentComplete, doctorDashboard, doctorProfile, updateDoctorProfile } from '../controllers/doctorController.js';


const doctorRouter = express.Router();


doctorRouter.post("/login", loginDoctor)
doctorRouter.post("/cancel-appointment", authDoctor, appointmentCancel)
doctorRouter.get("/appointments", authDoctor, appointmentsDoctor)
doctorRouter.get("/list", doctorList)
doctorRouter.post("/change-availability", authDoctor, changeAvailability)
doctorRouter.post("/complete-appointment", authDoctor, appointmentComplete)
doctorRouter.get("/dashboard", authDoctor, doctorDashboard)
doctorRouter.get("/profile", authDoctor, doctorProfile)
doctorRouter.post("/update-profile", authDoctor, updateDoctorProfile)



export default doctorRouter;


