'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxesStacked,
  faEdit,
  faBell,
  faChartLine,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import React from 'react';

const steps = [
  {
    icon: faBoxesStacked,
    title: 'Track Stock Levels',
    description: 'Real-time updates ensure your inventory reflects what’s actually available.',
  },
  {
    icon: faEdit,
    title: 'Manage Listings Easily',
    description: 'Quickly update quantity, pricing, or descriptions through your dashboard.',
  },
  {
    icon: faBell,
    title: 'Low Stock Alerts',
    description: 'Get notified when stock is running low so you can restock in time.',
  },
  {
    icon: faChartLine,
    title: 'Inventory Analytics',
    description: 'Visualize your top-performing products and spot trends with ease.',
  },
];

const SmartInventoryPage = () => (
  <div className="min-h-screen bg-gray-50 px-6 py-12 text-gray-800 pt-30">
  <div className="max-w-5xl mx-auto">
    <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-16">
      Smart Inventory Management
    </h1>

    <div className="space-y-16">
      {[
        {
          icon: faBoxesStacked,
          title: 'Track Stock Levels',
          content: 'Real-time updates ensure your inventory reflects what’s actually available.',
        },
        {
          icon: faEdit,
          title: 'Manage Listings Easily',
          content: 'Quickly update quantity, pricing, or descriptions through your dashboard.',
        },
        {
          icon: faBell,
          title: 'Low Stock Alerts',
          content: 'Get notified when stock is running low so you can restock in time.',
        },
        {
          icon: faChartLine,
          title: 'Inventory Analytics',
          content: 'Visualize your top-performing products and spot trends with ease.',
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
  </div>
</div>

);

export default SmartInventoryPage;
