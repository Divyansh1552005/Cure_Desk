import React from 'react'
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>
                        Cure Desk is dedicated to simplifying hospital management with cutting-edge technology and seamless patient care solutions. Trusted by healthcare professionals, we ensure that managing appointments, records, and operations is easier, faster, and more secure than ever before.
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        {/* Adding links to Home and About */}
                        <li>
                            <Link to="/" className="hover:underline">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:underline">About us</Link>
                        </li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+918168001391</li>
                        <li>officialdslc1552005@gmail.com</li>
                    </ul>
                    <br />
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Ghanta Ghar Chowk, Near Railway Station, Bhiwani-127021, Haryana</li>
                    </ul>
                </div>

            </div>

            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025 @ Curedesk.com - All Rights Reserved.</p>
            </div>

        </div>
    )
}

export default Footer;