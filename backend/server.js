import express from "express";
import "dotenv/config";
import cors from "cors";
import adminRouter from "./routes/adminRoute.js";
import { connectMongoDB } from "./config/mongodb.js";
import {connectCloudinary} from "./config/cloudinary.js";


const app = express();
const PORT = process.env.PORT || 3000;

// json middleware
app.use(express.json());
app.use(cors());

connectMongoDB(process.env.MONGODB_URI).then(()=> console.log("Mongo DB Connected!!"));
connectCloudinary().then(()=> console.log("Cloudinary Connected!!"));


// api endpoints
app.use("/api/admin", adminRouter)


app.get("/", (req, res) => {
  res.json({ status: "Server is running" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

