import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '../firebaseConfig'; // Adjust the path as needed

const SignInModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Sign in successful
      console.log('User signed in');
      onClose(); // Close the modal after successful sign-in
    } catch (error) {
      // Handle errors
      console.error('Sign in error:', error.message);
      setError('Failed to sign in. Please check your credentials.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-[15px] shadow-lg border-2 border-black w-96">
        <h2 className="text-2xl mb-4">Sign In</h2>
        <form onSubmit={handleSignIn}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-[15px] bg-gray-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-[15px] bg-gray-100"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="bg-buttonGreen w-full text-white px-4 py-2 rounded-[15px]">Sign In</button>
        </form>
        <button className="mt-4 bg-red-500 w-full text-white px-4 py-2 rounded-[15px]" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SignInModal;
