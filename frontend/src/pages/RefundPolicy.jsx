import React from 'react'

const RefundPolicy = () => {
  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold text-center mb-8 text-gray-800'>Refund Policy</h1>
      
      <div className='space-y-6 text-gray-700'>
        <section>
          <h2 className='text-2xl font-semibold mb-4 text-gray-800'>General Refund Policy</h2>
          <p className='mb-4'>
            At Cure Desk, we understand that sometimes circumstances change and you may need to cancel your appointment. 
            Our refund policy is designed to be fair to both patients and healthcare providers.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Cancellation Timeframes</h2>
          <div className='space-y-4'>
            <div>
              <h3 className='text-lg font-semibold mb-2'>24+ Hours Before Appointment</h3>
              <p>Full refund available for cancellations made 24 hours or more before the scheduled appointment time.</p>
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-2'>12-24 Hours Before Appointment</h3>
              <p>50% refund available for cancellations made between 12-24 hours before the appointment.</p>
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-2'>Less Than 12 Hours</h3>
              <p>No refund available for cancellations made less than 12 hours before the appointment time.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Emergency Cancellations</h2>
          <p className='mb-4'>
            In case of medical emergencies or unforeseen circumstances, we may consider exceptions to our standard 
            refund policy. Please contact our support team with documentation of the emergency situation.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Doctor Cancellations</h2>
          <p className='mb-4'>
            If a healthcare provider cancels your appointment for any reason, you will receive a full refund. 
            We will also assist you in rescheduling with the same provider or finding an alternative appointment.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Technical Issues</h2>
          <p className='mb-4'>
            If you experience technical issues that prevent you from attending your virtual appointment, 
            please contact us immediately. We will work to resolve the issue or provide a full refund if necessary.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Refund Processing</h2>
          <p className='mb-4'>Refunds will be processed as follows:</p>
          <ul className='list-disc pl-6 space-y-2'>
            <li>Credit card payments: 3-5 business days</li>
            <li>Digital wallet payments: 1-3 business days</li>
            <li>Bank transfers: 5-7 business days</li>
          </ul>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-4 text-gray-800'>How to Request a Refund</h2>
          <p className='mb-4'>To request a refund:</p>
          <ul className='list-disc pl-6 space-y-2'>
            <li>Log into your Cure Desk account</li>
            <li>Go to My Appointments section</li>
            <li>Select the appointment you wish to cancel</li>
            <li>Click Cancel Appointment and follow the prompts</li>
            <li>For special circumstances, contact our support team</li>
          </ul>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Non-Refundable Services</h2>
          <p className='mb-4'>The following services are non-refundable:</p>
          <ul className='list-disc pl-6 space-y-2'>
            <li>Completed appointments</li>
            <li>No-show appointments</li>
            <li>Platform convenience fees (where applicable)</li>
            <li>Premium membership fees (unless cancelled within trial period)</li>
          </ul>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Dispute Resolution</h2>
          <p className='mb-4'>
            If you have concerns about our refund policy or need to dispute a refund decision, 
            please contact our customer service team at refunds@curedesk.com. We are committed to 
            resolving all disputes fairly and promptly.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Contact Us</h2>
          <p className='mb-4'>
            For questions about refunds or to request a refund outside of the standard process, 
            please contact us at refunds@curedesk.com or call our support line.
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

export default RefundPolicy
