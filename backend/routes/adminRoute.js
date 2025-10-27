import express from "express";
import { addDoctor, loginAdmin, allDoctors } from "../controllers/adminController.js";
import { changeAvailability } from "../controllers/doctorController.js";
import upload from "../middleware/multer.js";
import { authAdmin } from "../middleware/authAdmin.js";

const adminRouter = express.Router();


adminRouter.post("/add-doctor", upload.single('image'), authAdmin, addDoctor);
adminRouter.post("/login", loginAdmin);
adminRouter.get("/all-doctors", authAdmin, allDoctors);
adminRouter.post("/change-availability", authAdmin, changeAvailability);

export default adminRouter;

