import React, { useState } from 'react';
import SignInModal from './SignInModal';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const handleSignIn = (userData) => {
    console.log('Sign In Data:', userData);
    // Handle sign in logic here
  };

  const handleLogin = (loginData) => {
    console.log('Login Data:', loginData);
    // Handle login logic here
  };

  return (
    <nav className="bg-customBlue p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">EdTech Product</h1>
        <div>
          <button
            className="bg-white text-customBlue px-4 py-2 rounded mr-2"
            onClick={() => setSignInOpen(true)}
          >
            Sign In
          </button>
          <button
            className="bg-white text-customBlue px-4 py-2 rounded"
            onClick={() => setLoginOpen(true)}
          >
            Login
          </button>
        </div>
      </div>
      <SignInModal isOpen={isSignInOpen} onClose={() => setSignInOpen(false)} onSignIn={handleSignIn} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} onLogin={handleLogin} />
    </nav>
  );
}

export default Navbar;
