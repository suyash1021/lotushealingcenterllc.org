import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6 mt-24">
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-6 xl:px-20 lg:px-20">
        <h1 className="text-3xl font-bold text-center text-[#cb1d5c] mb-6">Privacy Policy for Lotus Healing</h1>
        <p className="mb-6">
          At <strong className='text-[#cb1d5c] text-xl'>Lotus Healing</strong>, we are committed to maintaining the privacy and security of your personal information. This Privacy Policy outlines how we collect, use and protect your data when you interact with us, whether through our website, email, phone, or other forms of communication.
        </p>       
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <p className="mb-6">
          We collect personal information when you interact with us, such as when you register for services, contact us, or use our website. This information helps us improve our services and provide you with personalized support. We do not collect sensitive data or store payment information, as all transactions are processed by third-party payment processors.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Provide and improve our services</li>
          <li>Communicate with you about updates, services and offers</li>
          <li>Maintain your account and ensure ongoing service delivery</li>
          <li>Analyze usage to enhance your experience</li>
        </ul>
        <p className="mb-6">
          You have the right to unsubscribe from marketing communications at any time by clicking the "unsubscribe" link in emails or by contacting us directly.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
        <p className="mb-6">
          Your personal data is stored as long as you maintain an account with us. For non-account holders or subscribers who have not made a purchase, data is kept for up to 3 years unless you request deletion.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Sharing of Information</h2>
        <p className="mb-6">
          We do not share your personal information with third parties, except with trusted partners and processors who assist in providing our services under strict privacy agreements. We will not share your data with unrelated parties without your explicit consent.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Accessing and Updating Your Information</h2>
        <p className="mb-6">
          You have the right to access, update, or delete your personal information at any time. You can do this through your account or by contacting us directly.
        </p>

        <h2 className="text-2xl font-semibold mb-4">International Data Use</h2>
        <p className="mb-6">
          As a company based in the UAE, we comply with local privacy regulations. Any data submitted by international customers is done so under these laws and individuals are responsible for ensuring compliance with their local regulations.
        </p>

        <h2 className="text-2xl font-semibold mb-4">No Use of Cookies</h2>
        <p className="mb-6">
        We do not use cookies on our website. Your browsing experience is not tracked or influenced by any cookie-based technologies. For more information on how we handle your data, please refer to our Privacy Policy.  </p>

        <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
        <p className="mb-6">
          We regularly review our Privacy Policy to ensure it reflects current practices. Any significant updates will be communicated to you before they take effect.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contacting Us</h2>
        <p className="mb-6">
          For any questions or concerns regarding your data, please contact us at:
        </p>

        <div className="bg-gray-200 p-4 rounded-lg">
          <p><strong>Lotus Healing International</strong></p>
          <p>30 N Gould St Ste R, Sheridan, Wyoming, 82801, United States</p>
          <p><strong>Email:</strong> <a href="mailto:info@lotushealingcenterllc.org" className="text-blue-500">info@lotushealingcenterllc.org</a></p>
          <p><strong>Phone:</strong> <a href="tel:+1 (646) 9804507" className="text-blue-500">+1 (646) 9804507</a></p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
