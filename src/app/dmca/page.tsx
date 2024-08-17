import React from 'react'

export default function Dmca () {
  
  return (
    <div className='text-white bg-black py-10 max-w-3xl mx-auto p-6'>
      <h1 className="text-3xl font-bold mb-4">DMCA Notice</h1>
      <p className="mb-4">
        We respect the intellectual property rights of others and expect our users to do the same. 
        If you believe that your work has been copied in a way that constitutes copyright infringement, 
        please notify us by providing the following information:
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Information</h2>
      <p className="mb-4">
        <strong>Name:</strong> {process.env.PROJECTNAME} <br />
        <strong>Email:</strong> {process.env.EMAIL} <br />
        <strong>Address:</strong> {process.env.ADDRESS} <br />
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Notice Requirements</h2>
      <p className="mb-4">
        To be effective, the notification must include the following:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Your physical or electronic signature.</li>
        <li>Identification of the copyrighted work claimed to have been infringed.</li>
        <li>Identification of the material that is claimed to be infringing.</li>
        <li>Your contact information, including address, telephone number, and email address.</li>
        <li>A statement that you have a good faith belief that the use of the material is not authorized by the copyright owner.</li>
        <li>A statement that the information in the notification is accurate, under penalty of perjury.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Submit Your Notice</h2>
      <p className="mb-4">
        Please send your DMCA notice to the following email address: <strong> {process.env.EMAIL} </strong>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Counter-Notice</h2>
      <p className="mb-4">
        If you believe that your material was removed by mistake or misidentification, you may submit a counter-notice 
        by providing the following information:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Your physical or electronic signature.</li>
        <li>Identification of the material that has been removed or to which access has been disabled.</li>
        <li>Your contact information, including address, telephone number, and email address.</li>
        <li>A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification.</li>
        <li>A statement that you consent to the jurisdiction of the Federal District Court for the judicial district in which your address is located.</li>
      </ul>

      <p className="mb-4">
        Please send your counter-notice to the following email address: <strong>{process.env.EMAIL}</strong>
      </p>
    </div>
  )
}
  