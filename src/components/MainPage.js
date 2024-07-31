import React, { useState } from 'react';
import productImage1 from '../img/istockphoto-2024808112-1024x1024.jpg';
import productImage2 from '../img/pexels-caio-46274.jpg';
import PayPalButton from './PayPalButton';
import CashOnDelivery from './CashOnDeliveryOption';

const MainPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handlePurchaseClick = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
    setPaymentMethod(null);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Main Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
          <img className="w-full h-48 object-cover" src={productImage1} alt="Product 1" />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Product 1</h2>
            <p className="text-xl font-bold mb-2">$20.00</p>
            <p className="text-gray-700 mb-4">Description of Product 1. This is an awesome product you would love to purchase.</p>
            <button className="bg-buttonBlue text-white px-4 py-2 rounded" onClick={() => handlePurchaseClick('Product 1')}>Purchase</button>
          </div>
        </div>
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
          <img className="w-full h-48 object-cover" src={productImage2} alt="Product 2" />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Product 2</h2>
            <p className="text-xl font-bold mb-2">$20.00</p>
            <p className="text-gray-700 mb-4">Description of Product 2. This is another amazing product that you should buy.</p>
            <button className="bg-buttonBlue text-white px-4 py-2 rounded" onClick={() => handlePurchaseClick('Product 2')}>Purchase</button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Purchase {selectedProduct}</h2>
            <p className="text-gray-700 mb-4">Please select your payment method:</p>
            <div className="flex flex-col space-y-4">
              <button
                className={`bg-buttonBlue text-white px-4 py-2 rounded ${paymentMethod === 'paypal' ? 'bg-blue-700' : ''}`}
                onClick={() => handlePaymentMethodChange('paypal')}
              >
                PayPal
              </button>
              <button
                className={`bg-buttonBlue text-white px-4 py-2 rounded ${paymentMethod === 'cod' ? 'bg-blue-700' : ''}`}
                onClick={() => handlePaymentMethodChange('cod')}
              >
                Cash on Delivery
              </button>
              {paymentMethod === 'paypal' && <PayPalButton amount="20.00" />}
              {paymentMethod === 'cod' && <CashOnDelivery />}
            </div>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
