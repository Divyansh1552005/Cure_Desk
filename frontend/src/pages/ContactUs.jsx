import React, { useState } from 'react'
import { toast } from 'react-toastify'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    toast.success('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold text-center mb-8 text-gray-800'>Contact Us</h1>
      
      <div className='grid md:grid-cols-2 gap-8'>
        {/* Contact Information */}
        <div className='space-y-6'>
          <section>
            <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Get in Touch</h2>
            <p className='text-gray-700 mb-4'>
              We are here to help you with any questions or concerns about our medical appointment booking platform. 
              Reach out to us through any of the following methods:
            </p>
          </section>

          <section>
            <h3 className='text-lg font-semibold mb-3 text-gray-800'>Contact Information</h3>
            <div className='space-y-3'>
              <div className='flex items-center space-x-3'>
                <span className='font-semibold text-gray-700'>Email:</span>
                <span className='text-gray-600'>support@curedesk.com</span>
              </div>
              <div className='flex items-center space-x-3'>
                <span className='font-semibold text-gray-700'>Phone:</span>
                <span className='text-gray-600'>+1 (555) 123-4567</span>
              </div>
              <div className='flex items-center space-x-3'>
                <span className='font-semibold text-gray-700'>Address:</span>
                <span className='text-gray-600'>123 Healthcare Avenue, Medical District, City 12345</span>
              </div>
            </div>
          </section>

          <section>
            <h3 className='text-lg font-semibold mb-3 text-gray-800'>Business Hours</h3>
            <div className='space-y-2'>
              <div className='flex justify-between'>
                <span className='text-gray-700'>Monday - Friday:</span>
                <span className='text-gray-600'>8:00 AM - 8:00 PM</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-gray-700'>Saturday:</span>
                <span className='text-gray-600'>9:00 AM - 6:00 PM</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-gray-700'>Sunday:</span>
                <span className='text-gray-600'>10:00 AM - 4:00 PM</span>
              </div>
            </div>
          </section>

          <section>
            <h3 className='text-lg font-semibold mb-3 text-gray-800'>Department Contacts</h3>
            <div className='space-y-2'>
              <div>
                <span className='font-semibold text-gray-700'>Technical Support:</span>
                <span className='text-gray-600 ml-2'>tech@curedesk.com</span>
              </div>
              <div>
                <span className='font-semibold text-gray-700'>Billing Inquiries:</span>
                <span className='text-gray-600 ml-2'>billing@curedesk.com</span>
              </div>
              <div>
                <span className='font-semibold text-gray-700'>Medical Partnerships:</span>
                <span className='text-gray-600 ml-2'>partnerships@curedesk.com</span>
              </div>
              <div>
                <span className='font-semibold text-gray-700'>Privacy Concerns:</span>
                <span className='text-gray-600 ml-2'>privacy@curedesk.com</span>
              </div>
            </div>
          </section>
        </div>

        {/* Contact Form */}
        <div>
          <section>
            <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Send us a Message</h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>
                  Full Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter your full name'
                />
              </div>

              <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter your email address'
                />
              </div>

              <div>
                <label htmlFor='subject' className='block text-sm font-medium text-gray-700 mb-1'>
                  Subject
                </label>
                <select
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                  <option value=''>Select a subject</option>
                  <option value='technical'>Technical Support</option>
                  <option value='billing'>Billing Question</option>
                  <option value='appointment'>Appointment Issue</option>
                  <option value='feedback'>Feedback</option>
                  <option value='partnership'>Partnership Inquiry</option>
                  <option value='other'>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-1'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Please describe your question or concern in detail...'
                ></textarea>
              </div>

              <button
                type='submit'
                className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200'
              >
                Send Message
              </button>
            </form>
          </section>

          <section className='mt-8'>
            <h3 className='text-lg font-semibold mb-3 text-gray-800'>Emergency Support</h3>
            <div className='bg-red-50 border border-red-200 rounded-md p-4'>
              <p className='text-red-800 text-sm'>
                <strong>Medical Emergency:</strong> If you are experiencing a medical emergency, 
                please call 911 or go to your nearest emergency room immediately. Do not use this 
                contact form for emergency medical situations.
              </p>
            </div>
          </section>
        </div>
      </div>

      <section className='mt-12 text-center'>
        <h3 className='text-lg font-semibold mb-3 text-gray-800'>Follow Us</h3>
        <p className='text-gray-600 mb-4'>Stay connected with us on social media for updates and health tips:</p>
        <div className='flex justify-center space-x-6'>
          <a href='#' className='text-blue-600 hover:text-blue-800'>Facebook</a>
          <a href='#' className='text-blue-400 hover:text-blue-600'>Twitter</a>
          <a href='#' className='text-blue-700 hover:text-blue-900'>LinkedIn</a>
          <a href='#' className='text-pink-600 hover:text-pink-800'>Instagram</a>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
