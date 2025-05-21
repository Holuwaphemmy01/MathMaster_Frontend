import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function LoginModal({ isOpen, onClose, onSwitchToSignup }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://math-master-backend-mb6a.onrender.com/login', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: false
      });
      
      console.log('Login successful:', response.data);
      // Store user data if needed
      localStorage.setItem('user', JSON.stringify(response.data));
      onClose();
      navigate('/dashboard'); // Redirect to dashboard
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      setError(error.response?.data?.message || 'Invalid credentials');
      setShowErrorModal(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-purple-700 mb-6">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg">
              Login
            </Button>
          </form>

          <p className="text-center mt-4 text-sm text-gray-600">
            Don't have an account?{' '}
            <button onClick={onSwitchToSignup} className="text-purple-600 hover:text-purple-700">
              Sign up here
            </button>
          </p>
        </div>
      </div>

      {/* Single Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-[60]">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm relative">
            <button
              onClick={() => setShowErrorModal(false)}
              className="absolute right-4 top-4 text-red-500 hover:text-red-700"
            >
              <X size={24} />
            </button>
            <div className="flex items-center justify-center mb-4">
              <X className="text-red-500" size={48} />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Invalid Credentials</h3>
            <p className="text-gray-600 text-center">{error}</p>
            <Button
              onClick={() => setShowErrorModal(false)}
              className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white"
            >
              Try Again
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}