import React from 'react';

const CashOnDeliveryOption = ({ onSelect }) => {
  return (
    <div className="border p-4 rounded-lg bg-gray-100">
      <h3 className="text-lg font-semibold mb-2">Cash on Delivery</h3>
      <p className="text-gray-700 mb-4">Pay in cash when your order is delivered to you.</p>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => onSelect('Cash on Delivery')}
      >
        Select Cash on Delivery
      </button>
    </div>
  );
};

export default CashOnDeliveryOption;
