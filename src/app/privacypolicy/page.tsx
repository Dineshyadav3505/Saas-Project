import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-white bg-black">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy for {process.env.NEXT_PUBLIC_PROJECTNAME}</h1>
      <p className="mb-4">
        At {process.env.NEXT_PUBLIC_PROJECTNAME}, accessible from {process.env.NEXT_PUBLIC_WEBLINK}, 
        your privacy is of utmost importance to us. This Privacy Policy document outlines the types of personal information 
        that is collected and recorded by {process.env.NEXT_PUBLIC_PROJECTNAME} and how we use it.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information from you when you visit our site, register on the site, subscribe to our newsletter, 
        fill out a form, or interact with other activities, services, features, or resources we make available on our site. 
        You may be asked for your name, email address, mailing address, and phone number.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <p className="mb-4">
        We may use the information we collect from you in the following ways:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>To improve customer service.</li>
        <li>To personalize user experience.</li>
        <li>To process transactions.</li>
        <li>To send periodic emails regarding your order or other products and services.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">How We Protect Your Information</h2>
      <p className="mb-4">
        We adopt appropriate data collection, storage, and processing practices and security measures to protect against 
        unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, 
        transaction information, and data stored on our site.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we 
        provide users with advance notice. This does not include website hosting partners and other parties who assist us 
        in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this 
        information confidential.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Your Rights</h2>
      <p className="mb-4">
        You have the right to request copies of your personal data. You also have the right to request that we correct any 
        information you believe is inaccurate or incomplete.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
        Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, 
        please contact us at:
      </p>
      <p className="mb-4">
        <strong>Email:</strong> {process.env.NEXT_PUBLIC_EMAIL} <br />
        <strong>Address:</strong> {process.env.NEXT_PUBLIC_ADDRESS}
      </p>
    </div>
  );
}