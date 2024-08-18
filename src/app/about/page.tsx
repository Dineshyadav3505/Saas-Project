import React from 'react';

export default function AboutUs() {
  return (
    <div className="max-w-3xl mx-auto p-6 py-10 text-white bg-black">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to {process.env.NEXT_PUBLIC_PROJECTNAME}! We are dedicated to providing you with the best service possible.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Our Mission</h2>
      <p className="mb-4">
        Our mission is to empower individuals and businesses by providing innovative solutions that enhance productivity and efficiency. 
        We strive to create a seamless experience for our users through our products and services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Our Vision</h2>
      <p className="mb-4">
        We envision a world where technology simplifies everyday tasks, enabling people to focus on what truly matters. 
        Our goal is to be a leader in our industry by continuously innovating and adapting to the needs of our customers.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Our Values</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Integrity:</strong> We believe in being honest and transparent in all our dealings.</li>
        <li><strong>Customer-Centric:</strong> Our customers are at the heart of everything we do.</li>
        <li><strong>Innovation:</strong> We embrace change and continuously seek new ways to improve.</li>
        <li><strong>Teamwork:</strong> We believe in collaboration and supporting one another to achieve our goals.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Get in Touch</h2>
      <p className="mb-4">
        If you would like to learn more about us or have any questions, feel free to reach out via email at <strong>{process.env.NEXT_PUBLIC_EMAIL}</strong>.
      </p>
    </div>
  );
}