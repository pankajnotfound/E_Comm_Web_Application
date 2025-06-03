import { faStore, faHandshake, faTags, faChartLine, faWallet, faPeopleGroup, faClock, faUserGear, faTruckMoving } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'


const benefits = [
  {
    icon: faStore,
    title: '1. Expand Your Reach',
    content: 'Gain access to a wide audience of both retail customers and wholesale buyers looking for reliable vendors across various product categories.',
  },
  {
    icon: faHandshake,
    title: '2. Build Brand Credibility',
    content: (
      <p>
        Showcase your brand and gain credibility through our verified vendor program, customer reviews, and ratings system.
      </p>
    ),
  },
  {
    icon: faTags,
    title: '3. Set Your Own Pricing',
    content: 'Vendors have complete control over product pricing, descriptions, and discount offers to suit their business strategies.',
  },
  {
    icon: faChartLine,
    title: '4. Real-Time Analytics',
    content: (
      <p>
        Track your sales, inventory, and customer orders with real-time dashboard insights to make informed business decisions.
      </p>
    ),
  },
  {
    icon: faWallet,
    title: '5. Reliable Weekly Payouts',
    content: 'Receive secure weekly payments directly to your bank account, with full transaction breakdowns and history logs.',
  },
  {
    icon: faPeopleGroup,
    title: '6. Direct Customer Interaction',
    content: 'Respond to inquiries, resolve order issues, and build customer trust through integrated support and feedback tools.',
  },
  {
    icon: faClock,
    title: '7. 24/7 Storefront',
    content: 'Your products are visible and available for purchase at all times, maximizing exposure and potential sales even while you sleep.',
  },
  {
    icon: faUserGear,
    title: '8. Easy Product Management',
    content: 'Upload, edit, and remove products easily through your vendor dashboard without needing technical expertise.',
  },
  {
    icon: faTruckMoving,
    title: '9. Flexible Fulfillment Options',
    content: 'Choose your preferred shipping partners, fulfillment strategies, and delivery timelines that work best for your business.',
  },
];


const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 text-gray-800 pt-30">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-16 hover:scale-101 transition-transform duration-300">
          Benefits of Being a Vendor
        </h1>

        <div className="space-y-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              } items-center gap-8`}
            >
              <div className="flex-shrink-0 text-blue-600 text-5xl hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={benefit.icon} />
              </div>

              <div className="flex-1 bg-white shadow-md p-6 rounded-lg border-l-4 border-blue-600 hover:shadow-lg transition duration-300">
                <h2 className="text-2xl font-semibold mb-2 hover:text-blue-700 transition-colors duration-200">
                  {benefit.title}
                </h2>
                <div className="text-gray-600">{benefit.content}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/becomevendor"
            className="inline-block px-6 py-3 bg-blue-700 text-white rounded-full shadow hover:bg-blue-800 transition"
          >
            Become a Vendor
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page