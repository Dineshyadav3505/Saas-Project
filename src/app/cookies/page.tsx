import React from 'react';

export default function CookiesPolicy() {
  return (
    <div className="max-w-3xl mx-auto p-6 py-10 text-white bg-black">
      <h1 className="text-3xl font-bold mb-4">Cookies Policy</h1>
      <p className="mb-4">
        This Cookies Policy explains how {process.env.NEXT_PUBLIC_PROJECTNAME} we uses cookies and similar technologies to recognize you when you visit our website at {process.env.NEXT_PUBLIC_WEBLINK}, {process.env.NEXT_PUBLIC_PROJECTNAME}. It explains what these technologies are, why we use them, and your rights to control our use of them.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">What Are Cookies?</h2>
      <p className="mb-4">
        Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Why Do We Use Cookies?</h2>
      <p className="mb-4">
        We use cookies for several reasons, including:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>To enable certain functions of the website.</li>
        <li>To provide analytics.</li>
        <li>To store your preferences.</li>
        <li>To improve user experience.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Types of Cookies We Use</h2>
      <p className="mb-4">
        We may use the following types of cookies:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be switched off in our systems.</li>
        <li><strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
        <li><strong>Functional Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization.</li>
        <li><strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising partners.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Your Rights Regarding Cookies</h2>
      <p className="mb-4">
        You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided below:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Browser Settings: Most web browsers allow you to control cookies through their settings preferences.</li>
        {/* <li>Opt-out Links: You can opt out of targeted advertising cookies by visiting the following links: [Add relevant links here].</li> */}
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Changes to This Cookies Policy</h2>
      <p className="mb-4">
        We may update our Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about our use of cookies or other technologies, please contact us at <strong>{process.env.NEXT_PUBLIC_EMAIL}</strong>.
      </p>
    </div>
  );
}