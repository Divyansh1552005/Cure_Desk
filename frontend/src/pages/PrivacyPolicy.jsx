import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold text-center mb-8 text-gray-800'>Privacy Policy</h1>
      
      <div className='space-y-6 text-gray-700'>
        <section>
          <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Information We Collect</h2>
          <p className='mb-4'>
            At Cure Desk, we collect information you provide directly to us, such as when you create an account, 
            book an appointment, or contact us for support. This may include:
          </p>
          <ul className='list-disc pl-6 space-y-2'>
            <li>Personal information (name, email address, phone number, date of birth)</li>
            <li>Medical information relevant to your appointments</li>
            <li>Payment information for appointment bookings</li>
            <li>Communication records between you and healthcare providers</li>
          </ul>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-4 text-gray-800'>How We Use Your Information</h2>
          <p className='mb-4'>We use the information we collect to:</p>
          <ul className='list-disc pl-6 space-y-2'>
            <li>Provide, maintain, and improve our medical appointment booking services</li>
            <li>Process appointments and communicate with healthcare providers</li>
            <li>Send you confirmations, updates, and other service-related communications</li>
            <li>Respond to your comments, questions, and provide customer service</li>
            <li>Ensure the security and integrity of our platform</li>
          </ul>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Information Sharing</h2>
          <p className='mb-4'>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
            except in the following circumstances:
          </p>
          <ul className='list-disc pl-6 space-y-2'>
            <li>With healthcare providers for appointment and treatment purposes</li>
            <li>With service providers who assist us in operating our platform</li>
            <li>When required by law or to protect our rights and safety</li>
            <li>In connection with a merger, acquisition, or sale of assets</li>
          </ul>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Data Security</h2>
          <p className='mb-4'>
            We implement appropriate security measures to protect your personal information against unauthorized access, 
            alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Your Rights</h2>
          <p className='mb-4'>You have the right to:</p>
          <ul className='list-disc pl-6 space-y-2'>
            <li>Access and update your personal information</li>
            <li>Request deletion of your account and personal data</li>
            <li>Opt-out of marketing communications</li>
            <li>Request a copy of your personal information</li>
          </ul>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Contact Us</h2>
          <p className='mb-4'>
            If you have any questions about this Privacy Policy, please contact us at privacy@curedesk.com 
            or through our contact page.
          </p>
        </section>

        <section>
          <p className='text-sm text-gray-600 mt-8'>
            Last updated: October 2025
          </p>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy