import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx'


const Navbar = () => {

    const navigate = useNavigate()

    const [showMenu, setShowMenu] = useState(false)
    const [showMobileDropdown, setShowMobileDropdown] = useState(false)
    const { token, setToken } = useContext(AppContext)
    // const [ token, setToken ] = useState(true) // Set to false to show Create account button

    // Handle clicks outside of dropdown to close it
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            const dropdownButton = document.getElementById('profile-dropdown-button');
            const dropdownContent = document.getElementById('profile-dropdown-content');
            
            if (dropdownButton && dropdownContent &&
                !dropdownButton.contains(event.target) && 
                !dropdownContent.contains(event.target)) {
                setShowMobileDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);



    const logout = () => {
        localStorage.removeItem('token')
        setToken(false)
        navigate('/login')
    }

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]'>
            <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
            <ul className='md:flex items-start gap-5 font-medium hidden'>
                <NavLink to='/' >
                    <li className='py-1'>HOME</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/doctors' >
                    <li className='py-1'>ALL DOCTORS</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/about' >
                    <li className='py-1'>ABOUT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/contact' >
                    <li className='py-1'>CONTACT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-4 '>

                {
                    token
                        ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                            <div id="profile-dropdown-button" onClick={() => setShowMobileDropdown(!showMobileDropdown)} className='flex items-center gap-2'>
                                <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                                <img className={`w-2.5 transition-transform duration-200 ${showMobileDropdown ? 'rotate-180' : ''}`} src={assets.dropdown_icon} alt="" />
                            </div>
                            {/* Desktop Dropdown (Hover) */}
                            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden md:group-hover:block'>
                                <div className='min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4 shadow-lg'>
                                    <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                    <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                                    <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                            </div>
                            {/* Mobile Dropdown (Click) */}
                            <div id="profile-dropdown-content" 
                                className={`absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 md:hidden ${showMobileDropdown ? 'block' : 'hidden'}`}>
                                <div className='min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4 shadow-lg'>
                                    <p onClick={() => {
                                        navigate('/my-profile');
                                        setShowMobileDropdown(false);
                                    }} className='hover:text-black cursor-pointer'>My Profile</p>
                                    <p onClick={() => {
                                        navigate('/my-appointments');
                                        setShowMobileDropdown(false);
                                    }} className='hover:text-black cursor-pointer'>My Appointments</p>
                                    <p onClick={() => {
                                        logout();
                                        setShowMobileDropdown(false);
                                    }} className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                            </div>
                        </div>
                        : <button onClick={() => navigate('/login')} className='bg-[#5f6FFF] text-white px-8 py-3 rounded-full font-light md:block'>Create account</button>
                }
                <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

                {/* ---- Mobile Menu ---- */}
                <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                    <div className='flex items-center justify-between px-5 py-6'>
                        <img src={assets.logo} className='w-36' alt="" />
                        <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-7' alt="" />
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                        <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded full inline-block'>HOME</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/doctors' ><p className='px-4 py-2 rounded full inline-block'>ALL DOCTORS</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/about' ><p className='px-4 py-2 rounded full inline-block'>ABOUT</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/contact' ><p className='px-4 py-2 rounded full inline-block'>CONTACT</p></NavLink>
                        {token && (
                            <>
                                <div className='w-full h-[1px] bg-gray-200 my-2'></div>
                                <NavLink onClick={() => setShowMenu(false)} to='/my-profile'><p className='px-4 py-2 rounded full inline-block'>MY PROFILE</p></NavLink>
                                <NavLink onClick={() => setShowMenu(false)} to='/my-appointments'><p className='px-4 py-2 rounded full inline-block'>MY APPOINTMENTS</p></NavLink>
                                <button onClick={() => { setShowMenu(false); logout(); }} className='px-4 py-2 rounded full inline-block text-red-600'>LOGOUT</button>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar