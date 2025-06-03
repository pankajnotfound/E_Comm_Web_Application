import { faCheckCircle, faUserShield, faBoxOpen, faTruckFast, faMoneyCheckDollar, faHandshake, faUserSlash, faTriangleExclamation, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'
import React from 'react'


const sections = [
  {
    icon: faCheckCircle,
    title: '1. Acceptance of Terms',
    content: 'By registering as a vendor on our platform, you agree to comply with and be bound by the following Terms and Conditions. If you do not agree to these terms, you may not access or use the vendor features.',
  },
  {
    icon: faUserShield,
    title: '2. Vendor Eligibility',
    content: (
      <ul className="list-disc ml-6 space-y-1">
        <li>Be at least 18 years old</li>
        <li>Provide accurate business and personal information</li>
        <li>Maintain an active email address and bank account for settlements</li>
      </ul>
    ),
  },
  {
    icon: faBoxOpen,
    title: '3. Product Listings',
    content: 'Vendors are responsible for providing accurate product descriptions, images, and pricing. Prohibited or illegal items are not allowed. We reserve the right to remove any listing that violates our policies.',
  },
  {
    icon: faTruckFast,
    title: '4. Order Fulfillment',
    content: (
      <ul className="list-disc ml-6 space-y-1">
        <li>Process and dispatch orders on time</li>
        <li>Update inventory levels regularly</li>
        <li>Ensure proper packaging and shipping</li>
      </ul>
    ),
  },
  {
    icon: faMoneyCheckDollar,
    title: '5. Payments & Commission',
    content: 'Vendor payouts are processed weekly. Platform commission may apply and will be deducted from each transaction. Vendors are responsible for keeping payment details current.',
  },
  {
    icon: faHandshake,
    title: '6. Vendor Conduct',
    content: (
      <ul className="list-disc ml-6 space-y-1">
        <li>Maintain professional communication with customers</li>
        <li>Avoid spam, false advertising, or misconduct</li>
        <li>Handle disputes with fairness and promptness</li>
      </ul>
    ),
  },
  {
    icon: faUserSlash,
    title: '7. Account Termination',
    content: 'Vendor accounts may be suspended or terminated if platform policies are violated, fraudulent behavior is detected, or multiple customer complaints are received.',
  },
  {
    icon: faTriangleExclamation,
    title: '8. Liability & Disclaimer',
    content: 'We are not liable for delivery delays, product issues, or loss of earnings due to technical problems or system maintenance.',
  },
  {
    icon: faPenNib,
    title: '9. Modifications',
    content: 'We reserve the right to change these terms at any time. Continued use of the vendor services indicates acceptance of the revised terms.',
  },
];


const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 text-gray-800 pt-30">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-16 hover:scale-101 transition-transform duration-300">
          Vendor Terms & Conditions
        </h1>

        <div className="space-y-16">
          {sections.map((section, index) => (
            <div
              key={section.title}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              } items-center gap-8`}
            >
              <div className="flex-shrink-0 text-blue-600 text-5xl hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={section.icon} />
              </div>

              <div className="flex-1 bg-white shadow-md p-6 rounded-lg border-l-4 border-blue-600 hover:shadow-lg transition duration-300">
                <h2 className="text-2xl font-semibold mb-2 hover:text-blue-700 transition-colors duration-200">
                  {section.title}
                </h2>
                <div className="text-gray-600">{section.content}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/dashboard"
            className="inline-block px-6 py-3 bg-blue-700 text-white rounded-full shadow hover:bg-blue-800 transition"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page