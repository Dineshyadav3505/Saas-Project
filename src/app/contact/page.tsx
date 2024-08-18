'use client'
import React, { useState, useEffect } from 'react';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      // Simulate successful submission
      setSuccess(true);
      setError('');
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setError('Please fill in all fields.');
      setSuccess(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 text-white bg-black">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        If you have any questions, comments, or concerns, please feel free to reach out to us using the form below.
      </p>
      <p className="mb-4">
        You can also email us directly at: <strong>{process.env.NEXT_PUBLIC_EMAIL}</strong>
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border bg-transparent outline-none border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 bg-transparent outline-none rounded"
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 bg-transparent outline-none rounded"
            rows="5"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">Your message has been sent successfully!</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}