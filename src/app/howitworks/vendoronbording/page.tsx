'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserPlus,
  faIdBadge,
  faStore,
  faCheckDouble,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import React from 'react';

const steps = [
  {
    icon: faUserPlus,
    title: 'Sign Up Instantly',
    description: 'Create your account using your email address and a secure password.',
  },
  {
    icon: faIdBadge,
    title: 'Submit Business Info',
    description: 'Enter basic business details like name, contact, and product category.',
  },
  {
    icon: faStore,
    title: 'Access Vendor Portal',
    description: 'Get immediate access to the dashboard upon approval.',
  },
  {
    icon: faCheckDouble,
    title: 'Start Selling',
    description: 'List your first products and start receiving orders within minutes.',
  },
];

const VendorOnboardingPage = () => (
  <div className="min-h-screen bg-gray-50 px-6 py-12 text-gray-800 pt-30">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-16">
        Vendor Onboarding in Minutes
      </h1>

      <div className="flex flex-col items-center space-y-12">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 w-full hover:shadow-lg transition duration-300">
              <div className="flex items-center space-x-4">
                <div className="text-blue-600 text-3xl">
                  <FontAwesomeIcon icon={step.icon} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-700">
                    {step.title}
                  </h2>
                  <p className="text-gray-600 mt-1">{step.description}</p>
                </div>
              </div>
            </div>
            {index !== steps.length - 1 && (
              <div className="text-blue-500 text-2xl my-4">
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link href="/becomevendor" className="px-6 py-3 bg-blue-700 text-white rounded-full shadow hover:bg-blue-800 transition">
          Join as a Vendor
        </Link>
      </div>
    </div>
  </div>
);

export default VendorOnboardingPage;
