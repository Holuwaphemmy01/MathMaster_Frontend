import { Button } from "./button";

export function SignupModal({ isOpen, onClose, onSwitchToLogin }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center p-4 z-50 transition-all duration-300">
      <div className="bg-white/95 rounded-2xl p-6 w-full max-w-md shadow-xl border border-pink-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-pink-600">Create Account</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Create a password"
            />
          </div>
          
          <Button className="w-full bg-yellow-400 text-white hover:bg-yellow-500">
            Sign Up
          </Button>
        </form>
        
        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <button 
            onClick={onSwitchToLogin}
            className="text-pink-600 hover:text-pink-700 font-medium"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}