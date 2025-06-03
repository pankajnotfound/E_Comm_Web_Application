import { faGlobe, faUserPlus, faStore, faUpload, faChartSimple, faShoppingBag, faTruck, faMoneyBillWave, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'

const steps = [
  {
    icon: faGlobe,
    title: '1. Visit the Website',
    content: 'Start by exploring our platform and understanding what we offer for both customers and vendors.',
  },
  {
    icon: faUserPlus,
    title: '2. Create an Account',
    content: 'Sign up quickly as a customer or vendor using your email and a secure password. Verification may be required.',
  },
  {
    icon: faStore,
    title: '3. Browse Products or Become a Vendor',
    content: 'Customers can start browsing immediately. Vendors can apply via the "Become a Vendor" section.',
  },
  {
    icon: faUpload,
    title: '4. Upload Products',
    content: 'Approved vendors can list their products with images, pricing, quantity, and category details.',
  },
  {
    icon: faChartSimple,
    title: '5. Manage via Dashboard',
    content: 'Vendors get access to an intuitive dashboard to manage products, track orders, and update inventory.',
  },
  {
    icon: faShoppingBag,
    title: '6. Customers Place Orders',
    content: 'Users can search and filter products, view detailed info, and place orders with a single click.',
  },
  {
    icon: faTruck,
    title: '7. Fulfill & Track Orders',
    content: 'Vendors handle shipping while customers track delivery status and communicate if needed.',
  },
  {
    icon: faMoneyBillWave,
    title: '8. Get Paid Weekly',
    content: 'Payouts are processed weekly and securely transferred to your registered bank account.',
  },
];

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 text-gray-800 pt-30">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-16 hover:scale-105 transition-transform duration-300">
          How It Works
        </h1>

        <div className="flex flex-col items-center space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="w-full flex flex-col items-center">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 w-full hover:shadow-lg transition duration-300">
                <div className="flex items-center space-x-4">
                  <div className="text-blue-600 text-3xl">
                    <FontAwesomeIcon icon={step.icon} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-700 hover:text-blue-700 transition-colors duration-200">
                      {step.title}
                    </h2>
                    <p className="mt-1 text-gray-600">{step.content}</p>
                  </div>
                </div>
              </div>

              {index !== steps.length - 1 && (
                <div className="text-blue-500 text-2xl my-4 animate-bounce-slow">
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/becomevendor"
            className="inline-block px-6 py-3 bg-blue-700 text-white rounded-full shadow hover:bg-blue-800 transition"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page