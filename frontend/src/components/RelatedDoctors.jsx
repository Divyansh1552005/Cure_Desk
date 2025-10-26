import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
const RelatedDoctors = ({ speciality, docId }) => {

  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  const [relDoc, setRelDoc] = useState([])

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
      setRelDoc(doctorsData)
    }
  }, [doctors, speciality, docId])

  return (
    <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pt-5 px-3 sm:px-0'>
      {relDoc.map((item, index) => (
        <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}
          className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500'
          key={index}>
          <img className='bg-[#EAEFFF] w-full' src={item.image} alt={item.name} />
          <div className='p-4'>
            <div className={`flex items-center gap-2 text-sm ${item.available ? 'text-green-500' : "text-gray-500"}`}>
              <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p>
              <p>{item.available ? 'Available' : "Not Available"}</p>
            </div>
            <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
            <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RelatedDoctors