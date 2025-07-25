import React, { useState } from 'react';

function LoginPage() {
  // State for login form inputs
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Function to handle login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoginError(''); // Clear any previous errors

    // Basic client-side validation
    if (!loginEmail || !loginPassword) {
      setLoginError('Please enter both email and password.');
      return;
    }

    console.log('Login Attempt:', { email: loginEmail, password: loginPassword });
    // Simulate a successful login for demonstration
    // In a real application, you would send these credentials to your backend
    // for authentication (e.g., using fetch or axios).
    if (loginEmail === 'test@example.com' && loginPassword === 'password123') {
      // Replace this alert with actual navigation or state update in a real app
      // For example, redirecting to a dashboard or setting a user context.
      alert('Login successful! (This is a demo)');
      setLoginEmail('');
      setLoginPassword('');
    } else {
      setLoginError('Invalid email or password. (Demo: test@example.com / password123)');
    }
  };

  return (
    // The main card container for the login form, styled with Tailwind CSS
    // It's designed to be centered when placed within a flex container (like your App.js or main layout).
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md font-inter">
      {/* Header section */}
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Login
      </h2>

      {/* Login Form */}
      <form onSubmit={handleLoginSubmit} className="space-y-6">
        {loginError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative text-sm" role="alert">
            <span className="block">{loginError}</span>
          </div>
        )}
        <div>
          <label htmlFor="loginEmail" className="sr-only">Email Address</label>
          <input
            type="email"
            id="loginEmail"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-150 ease-in-out placeholder-gray-500"
            placeholder="Email Address"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="loginPassword" className="sr-only">Password</label>
          <input
            type="password"
            id="loginPassword"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-150 ease-in-out placeholder-gray-500"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
        </div>
        <div className="text-right">
          <a href="#" className="font-medium text-blue-600 hover:text-blue-800 text-sm">
            Forgot password?
          </a>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Login
          </button>
        </div>
      </form>

      {/* "Don't have an account?" text below the form */}
      <div className="mt-8 text-center text-gray-600 text-sm">
        <p>
          Don't have an account?{' '}
          <a
            href="#" // In a real app, this would link to a signup page/route
            className="text-blue-600 hover:text-blue-800 font-semibold focus:outline-none"
          >
            Signup now
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;