import React from 'react';

export default function TermsOfService() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-black text-white py-10">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">
        Welcome to our website. By accessing or using our website, you agree to be bound by these terms of service and our privacy policy.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Definitions</h2>
      <p className="mb-4">
        In these terms of service, the following definitions apply:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>"Website" means [Your Website Name], accessible at [Your Website URL].</li>
        <li>"Company", "we", "us", or "our" refers to [Your Company Name].</li>
        <li>"User", "you", or "your" refers to any individual or entity using the website.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Use of the Website</h2>
      <p className="mb-4">
        By using the website, you agree to use it in a manner that complies with all applicable laws and regulations. You are solely responsible for your actions and the consequences thereof.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Intellectual Property</h2>
      <p className="mb-4">
        The website and its entire contents, features, and functionality are owned by [Your Company Name] and are protected by copyright, trademark, and other intellectual property laws.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Limitation of Liability</h2>
      <p className="mb-4">
        In no event shall [Your Company Name] be liable for any indirect, special, incidental, or consequential damages arising out of or related to your use of the website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Governing Law and Jurisdiction</h2>
      <p className="mb-4">
        These terms of service shall be governed by and construed in accordance with the laws of [Your State/Country], without giving effect to any principles of conflicts of law.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Changes to Terms of Service</h2>
      <p className="mb-4">
        We reserve the right to modify these terms of service at any time. Your continued use of the website after any changes constitutes your acceptance of the new terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about these terms of service, please contact us at [Your Email].
      </p>
    </div>
  );
}