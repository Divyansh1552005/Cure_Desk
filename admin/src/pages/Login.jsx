import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { toast } from 'react-toastify'

const Login = () => {

    const [state, setState] = useState('Admin')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();
     

      const { setDToken } = useContext(DoctorContext)
    const { setAToken, backendUrl } = useContext(AdminContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        if (state === 'Admin') {

            try {
                const { data } = await axios.post(`${backendUrl}/api/admin/login`, { email, password });

                if (data.success) {
                    setAToken(data.token);
                    localStorage.setItem('aToken', data.token);
                    toast.success('Login successful!');
                    navigate('/admin-dashboard');
                } else {
                    toast.error(data.message || 'Invalid credentials, please try again.');
                }

            } catch (error) {
                // Backend se response aaya ho tab
                if (error.response) {
                    const msg = error.response.data?.message || 'Invalid credentials, please try again.';
                    toast.error(msg);
                }
                // Agar network ya server down ho
                else if (error.request) {
                    toast.error('No response from server. Please check your internet or backend connection.');
                }
                // Other unexpected errors
                else {
                    toast.error(`Login failed: ${error.message}`);
                }
            }


        }
        else {
            // Doctor Login Logic
            try {
                const { data } = await axios.post(`${backendUrl}/api/doctor/login`, {
                    email,
                    password
                });

                if (data.success) {
                    setDToken(data.token);
                    localStorage.setItem('dToken', data.token);
                    toast.success('Doctor login successful!');
                    navigate('/doctor-dashboard');
                } else {
                    toast.error(data.message || 'Login failed');
                }
            } catch (error) {
                if (error.response) {
                    // The server responded with an error
                    const msg = error.response.data?.message || 'Invalid credentials, please try again.';
                    toast.error(msg);
                } else if (error.request) {
                    // No response received from server
                    toast.error('No response from server. Please check your internet or backend connection.');
                } else {
                    // Something else went wrong
                    toast.error(`Login failed: ${error.message}`);
                }
                console.error('Doctor login error:', error);
            }
        }

    }



    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
                <p className='text-2xl font-semibold m-auto'><span className='text-primary'>{state}</span> Login</p>
                <div className='w-full '>
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
                </div>
                <div className='w-full '>
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
                </div>
                <button className='bg-primary text-white w-full py-2 rounded-md text-base'>Login</button>
                {
                    state === 'Admin'
                        ? <p>Doctor Login? <span onClick={() => setState('Doctor')} className='text-primary underline cursor-pointer'>Click here</span></p>
                        : <p>Admin Login? <span onClick={() => setState('Admin')} className='text-primary underline cursor-pointer'>Click here</span></p>
                }
            </div>
        </form>
    )
}

export default Login