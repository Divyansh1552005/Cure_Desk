import {createContext} from 'react';
import axios from 'axios'; 
import {toast} from 'react-toastify';
import {useEffect, useState} from 'react';


export const AppContext = createContext();

const AppContextProvider = (props) =>{

  const currencySymbol = '₹';
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token') || null); // check localStorage for token first 
  const [userData, setUserData] = useState(false);




  

  

  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/doctor/list');
      if (data.success) {
          setDoctors(data.doctors);
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/user/get-profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (data.success) {
        setUserData(data.user);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  
  }


  const value = {
    doctors: doctors,
    getDoctorsData,
    currencySymbol,
    token,
    setToken,
    backendUrl,
    userData,
    setUserData,
    loadUserProfileData
  }

  // page load hote hi doctors data leke aao
  useEffect(()=>{
    getDoctorsData();
  }, [])

  // page load hote hi user profile data leke aao agar token available hai
  useEffect(() => {
    if (token) {
      loadUserProfileData();
    }
    else{
      // LOGOUT case
      setUserData(false);
    }
  }, [token]);



  return(
    <AppContext.Provider value={value}>
      {props.children}

    </AppContext.Provider>
  )
}


export default AppContextProvider;
