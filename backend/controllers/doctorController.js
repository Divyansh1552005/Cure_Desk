import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import doctorModel from "../models/doctorModel.js";
import appointmentModel from "../models/appointmentModel.js";

const changeAvailability = async(req,res) =>{
    try {
        const { docId } = req.body;
        
        if (!docId) {
            return res.status(400).json({ success: false, message: "Doctor ID is required" });
        }

        // Find the doctor and get their current availability status
        const doctor = await doctorModel.findById(docId);
        if (!doctor) {
            return res.status(404).json({ success: false, message: "Doctor not found" });
        }

        // Toggle the availability
        doctor.available = !doctor.available;
        await doctor.save();

        res.status(200).json({ 
            success: true, 
            message: `Doctor is now ${doctor.available ? 'available' : 'unavailable'}` 
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}


// API to get all doctors list for Frontend
const doctorList = async (req, res) => {
    try {

        const doctors = await doctorModel.find({}).select(['-password', '-email'])
        res.json({ success: true, doctors })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}


// api to login the doctor
const loginDoctor = async (req, res) => {

    try {

        const { email, password } = req.body
        const user = await doctorModel.findOne({ email })

        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid credentials" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            res.status(200).json({ success: true, token })
        } else {
            res.status(400).json({ success: false, message: "Invalid credentials" })
        }


    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message })
    }
}


// API to get doctor appointments for doctor panel
const appointmentsDoctor = async (req, res) => {
    try {

        const { docId } = req.body
        const appointments = await appointmentModel.find({ docId })

        res.json({ success: true, appointments })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to cancel appointment for doctor panel
const appointmentCancel = async (req, res) => {
    try {

        const { docId, appointmentId } = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)
        if (appointmentData && appointmentData.docId === docId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })
            return res.json({ success: true, message: 'Appointment Cancelled' })
        }

        res.json({ success: false, message: 'Appointment Cancelled' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// API to mark appointment completed for doctor panel
const appointmentComplete = async (req, res) => {
    try {

        const { docId, appointmentId } = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)
        if (appointmentData && appointmentData.docId === docId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, { isCompleted: true })
            return res.json({ success: true, message: 'Appointment Completed' })
        }

        res.json({ success: false, message: 'Appointment Cancelled' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}



// API to get doctor profile for  Doctor Panel
const doctorProfile = async (req, res) => {
    try {

        const { docId } = req.body
        const profileData = await doctorModel.findById(docId).select('-password')

        res.json({ success: true, profileData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to update doctor profile data from  Doctor Panel
const updateDoctorProfile = async (req, res) => {
    try {
        const { docId, fees, address, available, about } = req.body;

        if (!docId) {
            return res.status(400).json({ 
                success: false, 
                message: "Doctor ID not found" 
            });
        }

        const updateData = {};
        if (fees !== undefined) updateData.fees = fees;
        if (address !== undefined) updateData.address = address;
        if (available !== undefined) updateData.available = available;
        if (about !== undefined) updateData.about = about;

        await doctorModel.findByIdAndUpdate(docId, updateData);

        res.status(200).json({ 
            success: true, 
            message: 'Profile Updated Successfully' 
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
}

// API to get dashboard data for doctor panel
const doctorDashboard = async (req, res) => {
    try {

        const { docId } = req.body

        const appointments = await appointmentModel.find({ docId })

        let earnings = 0

        appointments.map((item) => {
            if (item.isCompleted || item.payment) {
                earnings += item.amount
            }
        })

        let patients = []

        appointments.map((item) => {
            if (!patients.includes(item.userId)) {
                patients.push(item.userId)
            }
        })



        const dashData = {
            earnings,
            appointments: appointments.length,
            patients: patients.length,
            latestAppointments: appointments.reverse()
        }

        res.json({ success: true, dashData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


export {
    loginDoctor,
    appointmentsDoctor,
    appointmentCancel,
    doctorList,
    changeAvailability, 
    appointmentComplete,
    doctorDashboard,
    doctorProfile,
    updateDoctorProfile
}


