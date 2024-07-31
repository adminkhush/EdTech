import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
    onClose();
    navigate('/main'); // Navigate to the main page after login
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-custom-15 shadow-lg border-black w-96">
        <h2 className="text-2xl mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-labelColor">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded bg-labelGray"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-labelColor">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded bg-labelGray"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="bg-buttonGreen w-full text-white px-4 py-2 rounded">Login</button>
        </form>
        <button className="mt-4 bg-closeRed w-full text-white px-4 py-2 rounded" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LoginModal;
