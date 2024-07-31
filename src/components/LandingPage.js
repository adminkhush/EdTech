import React from 'react';

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-linearBlue">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to EdTech Product</h1>
        <p className="text-lg mb-8">Your one-stop solution for online education</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded">Get Started</button>
      </div>
    </div>
  );
}

export default LandingPage;
