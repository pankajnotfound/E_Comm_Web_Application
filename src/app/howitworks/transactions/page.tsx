'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLock,
  faFileInvoiceDollar,
  faShieldAlt,
  faCalendarCheck,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import React from 'react';

const steps = [
  {
    icon: faLock,
    title: 'Secure Authentication',
    description: 'All sessions are encrypted using JSON Web Tokens and secure cookies.',
  },
  {
    icon: faFileInvoiceDollar,
    title: 'Verified Payments',
    description: 'All transactions are processed securely through verified channels.',
  },
  {
    icon: faShieldAlt,
    title: 'Fraud Prevention',
    description: 'Multiple layers of protection are in place to prevent suspicious activity.',
  },
  {
    icon: faCalendarCheck,
    title: 'Invoicing and Records',
    description: 'Invoices are automatically generated and accessible via your dashboard.',
  },
];

const SecureTransactionsPage = () => (
  <div className="min-h-screen bg-gray-50 px-6 py-12 text-gray-800">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-16">
        Secure Transactions
      </h1>

      <div className="space-y-16">
        {[
          {
            icon: faLock,
            title: 'Secure Authentication',
            content: 'All sessions are encrypted using JSON Web Tokens and secure cookies.',
          },
          {
            icon: faFileInvoiceDollar,
            title: 'Verified Payments',
            content: 'All transactions are processed securely through verified channels.',
          },
          {
            icon: faShieldAlt,
            title: 'Fraud Prevention',
            content: 'Multiple layers of protection are in place to prevent suspicious activity.',
          },
          {
            icon: faCalendarCheck,
            title: 'Invoicing and Records',
            content: 'Invoices are automatically generated and accessible via your dashboard.',
          },
        ].map((item, i) => (
          <div
            key={item.title}
            className={`flex flex-col md:flex-row ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-8`}
          >
            <div className="text-blue-600 text-5xl hover:scale-110 transition-transform duration-300">
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <div className="flex-1 bg-white shadow-md p-6 rounded-lg border-l-4 border-blue-600 hover:shadow-lg transition duration-300">
              <h2 className="text-2xl font-semibold mb-2 hover:text-blue-700 transition-colors duration-200">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/dashboard"
          className="px-6 py-3 bg-blue-700 text-white rounded-full shadow hover:bg-blue-800 transition"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  </div>

);

export default SecureTransactionsPage;
