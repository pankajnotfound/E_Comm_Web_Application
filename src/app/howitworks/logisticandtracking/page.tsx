'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShippingFast,
  faMapMarkedAlt,
  faTruck,
  faMobileAlt,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import React from 'react';

const steps = [
  {
    icon: faShippingFast,
    title: 'Ship Quickly',
    description: 'Dispatch orders with preferred shipping partners from your dashboard.',
  },
  {
    icon: faTruck,
    title: 'Mark as Shipped',
    description: 'Update order status and notify customers automatically.',
  },
  {
    icon: faMapMarkedAlt,
    title: 'Track Live Status',
    description: 'Customers can track their orders with real-time delivery updates.',
  },
  {
    icon: faMobileAlt,
    title: 'Mobile-Friendly Tracking',
    description: 'Accessible from any device, tracking is seamless and intuitive.',
  },
];

const LogisticsTrackingPage = () => (
  <div className="min-h-screen bg-gray-50 px-6 py-12 text-gray-800">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-16">
        Integrated Logistics & Tracking
      </h1>

      <div className="space-y-16">
        {[
          {
            icon: faShippingFast,
            title: 'Ship Quickly',
            content: 'Dispatch orders with preferred shipping partners from your dashboard.',
          },
          {
            icon: faTruck,
            title: 'Mark as Shipped',
            content: 'Update order status and notify customers automatically.',
          },
          {
            icon: faMapMarkedAlt,
            title: 'Track Live Status',
            content: 'Customers can track their orders with real-time delivery updates.',
          },
          {
            icon: faMobileAlt,
            title: 'Mobile-Friendly Tracking',
            content: 'Accessible from any device, tracking is seamless and intuitive.',
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
          href="/myorders"
          className="px-6 py-3 bg-blue-700 text-white rounded-full shadow hover:bg-blue-800 transition"
        >
          View My Orders
        </Link>
      </div>
    </div>
  </div>

);

export default LogisticsTrackingPage;
