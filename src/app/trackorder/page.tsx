'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from '../userSession/session';
import ActiveOrders from '../../../components/ActiveOrders';
import ReceivedOrders from '../../../components/ReceivedOrders';
import TrackOrders from '../../../components/TrackOrders';

interface Order {
  id: number;
  productName: string;
  productImage: string;
  quantity: number;
  price: number;
  status: string;
  position: string;
  userId: number;
}

const ActiveOrdersPage = () => {
  const { userName, userId } = useSession();

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [orderDetails, setOrderDetails] = useState<Order[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/getorders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) throw new Error('Failed to fetch orders.');

      const data = await response.json();
      setOrderDetails(data?.orderDetails || []);
      setHasError(false);
    } catch (error) {
      console.error('Error fetching orders:', error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userId) fetchData();
  }, [userId]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-20 p-5 px-5 gap-8">
      <h1 className="text-3xl font-bold text-blue-700">Hello, {userName}</h1>
      <p className="text-xl text-gray-700">Here are your order positions:</p>

      {isLoading ? (
        <div className="text-gray-600 animate-pulse text-lg">Loading your orders...</div>
      ) : hasError ? (
        <div className="text-red-600 text-lg font-medium">Unable to load orders. Please try again later.</div>
      ) : orderDetails.length === 0 ? (
        <div className="text-gray-600 italic">
          <p>No Received orders yet.</p>
          {/* Optionally insert an illustration or Lottie animation here */}
        </div>
      ) : (
        <div className="w-full max-w-4xl flex flex-col gap-6">
          {orderDetails.map((order) => (
            <TrackOrders key={order.id} orderDetail={order} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ActiveOrdersPage;
