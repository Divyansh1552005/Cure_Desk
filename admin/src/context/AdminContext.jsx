import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    // The ternary inside useState is for the fact if page is refreshed then it gets the token from localStorage rather than resetting it to empty string
    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '')

    const [appointments, setAppointments] = useState([])
    const [doctors, setDoctors] = useState([])
    const [dashData, setDashData] = useState(false)

    // Getting all Doctors data from Database using API
    const getAllDoctors = async () => {
        try {
            if (!aToken) {
                toast.error('Please login first');
                return;
            }

            const { data } = await axios.get(backendUrl + '/api/admin/all-doctors', {
                headers: { 
                    'Authorization': `Bearer ${aToken}`
                }
            });

            if (data.success) {
                setDoctors(data.doctors);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error('Error fetching doctors:', error);
            toast.error(error.response?.data?.message || error.message);
        }
    }

    // Function to change doctor availablity using API
    const changeAvailability = async (docId) => {
        try {
            if (!aToken) {
                toast.error('Please login first');
                return;
            }

            const { data } = await axios.post(
                backendUrl + '/api/admin/change-availability', 
                { docId }, 
                { 
                    headers: { 
                        'Authorization': `Bearer ${aToken}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (data.success) {
                toast.success(data.message);
                getAllDoctors(); // Refresh the doctors list
            } else {
                toast.error(data.message);
            }

        } catch (error) {
            console.error('Error changing availability:', error);
            toast.error(error.response?.data?.message || error.message);
        }
    }


    // Getting all appointment data from Database using API
    const getAllAppointments = async () => {

        try {

            const { data } = await axios.get(backendUrl + '/api/admin/all-appointments', { 
                headers: { 
                    'Authorization': `Bearer ${aToken}`,
                    'Content-Type': 'multipart/form-data'
                }
             })
            if (data.success) {
                setAppointments(data.appointments.reverse())
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }

    }

    // Function to cancel appointment using API
    const cancelAppointment = async (appointmentId) => {
        try {
            if (!aToken) {
                toast.error('Please login first');
                return;
            }

            const { data } = await axios.post(
                backendUrl + '/api/admin/cancel-appointment', 
                { appointmentId }, 
                { 
                    headers: { 
                        'Authorization': `Bearer ${aToken}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (data.success) {
                toast.success(data.message);
                await getAllAppointments(); // Refresh the appointments list
            } else {
                toast.error(data.message);
            }

        } catch (error) {
            console.error('Cancel appointment error:', error);
            toast.error(error.response?.data?.message || 'Failed to cancel appointment');
        }
    }

    // Getting Admin Dashboard data from Database using API
    const getDashData = async () => {
        try {

            const { data } = await axios.get(backendUrl + '/api/admin/dashboard', { 
                headers: { 
                    'Authorization': `Bearer ${aToken}`,
                    'Content-Type': 'multipart/form-data'
                }
             })

            if (data.success) {
                setDashData(data.dashData)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    const value = {
        aToken, setAToken,
        backendUrl,
        doctors,
        getAllDoctors,
        changeAvailability,
        appointments,
        getAllAppointments,
        getDashData,
        cancelAppointment,
        dashData
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )

}

export default AdminContextProvider