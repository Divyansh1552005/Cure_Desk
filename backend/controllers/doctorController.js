import doctorModel from "../models/doctorModel.js";


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




export {changeAvailability, doctorList};

