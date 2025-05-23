import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { PlayCircle, LogIn } from "lucide-react";
import { motion } from "framer-motion";
import king from "../assets/math-king-ade.png";
import { LoginModal } from "../components/ui/LoginModal";
import { SignupModal } from "../components/ui/SignupModal";  // Changed this line
import { useNavigate } from 'react-router-dom';

const testimonials = [
  {
    quote:
      "MathMasters helped me understand multiplication with yam sharing examples!",
    author: "— Chinedu, Primary 5",
  },
  {
    quote: "Now I love maths! Math King Ade made learning fun and exciting!",
    author: "— Amina, Primary 4",
  },
];

// Change from default export to named export
export function LandingPage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);  
  const navigate = useNavigate();

  const handleSwitchToSignup = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = () => {
    setIsLoginOpen(true);  
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100 text-gray-800 px-4 sm:px-6 md:px-8 py-4 sm:py-6">
      <header className="bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100 shadow-sm fixed w-full top-0 left-0 z-50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl sm:text-3xl" style={{ fontFamily: 'Pacifico' }}>
              <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-indigo-600 text-transparent bg-clip-text hover:from-blue-500 hover:via-indigo-500 hover:to-purple-600 transition-all duration-300">
                MathMasters
              </span>
            </h1>
            <Button 
              onClick={handleLogin}
              className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-3 sm:px-6 py-2 text-sm sm:text-base"
            >
              Login
            </Button>
          </div>
        </nav>
      </header>

      <div className="flex flex-col items-center text-center gap-4 sm:gap-6 mt-32 sm:mt-36">
        <motion.img
          src={king}
          alt="Math King Ade"
          className="w-32 sm:w-40 h-32 sm:h-40 rounded-full border-4 border-yellow-400 shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-pink-600 drop-shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Welcome to MathMasters
        </motion.h1>
        <motion.p
          className="max-w-md text-xs sm:text-sm md:text-base text-purple-700 px-4 sm:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Learn math the fun way with cultural examples and support for Nigerian languages. Join Math King Ade on your math adventure!
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <Button 
            className="bg-yellow-400 text-white hover:bg-yellow-500 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm shadow-md w-full sm:w-auto"
            onClick={() => setIsSignupOpen(true)}  // Add onClick handler
          >
            Get Started
          </Button>
          <Button variant="outline" className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm border-pink-400 text-pink-600 w-full sm:w-auto">
            <PlayCircle className="w-3 sm:w-4 h-3 sm:h-4" /> Preview Game
          </Button>
        </motion.div>
      </div>

      <section className="mt-12 sm:mt-20 text-center px-2 sm:px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4">Why Kids Love MathMasters 💖</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <Card className="bg-white border-2 border-pink-300 p-4">
            <CardContent>
              <p className="text-lg font-semibold text-pink-600">🎮 It’s like a game!</p>
              <p className="text-sm mt-2 text-gray-600">Math becomes an adventure with Math King Ade and friends.</p>
            </CardContent>
          </Card>
          <Card className="bg-white border-2 border-yellow-300 p-4">
            <CardContent>
              <p className="text-lg font-semibold text-yellow-600">🌍 Local Language Fun</p>
              <p className="text-sm mt-2 text-gray-600">Learn in your language with cultural examples you already know.</p>
            </CardContent>
          </Card>
          <Card className="bg-white border-2 border-blue-300 p-4">
            <CardContent>
              <p className="text-lg font-semibold text-blue-600">💡 Boosts Confidence</p>
              <p className="text-sm mt-2 text-gray-600">From shy to sure — solve problems with a smile!</p>
            </CardContent>
          </Card>
        </div>
      </section>


      <div className="mt-12 sm:mt-16 px-2 sm:px-4">
        <motion.h2
          className="text-xl sm:text-2xl font-bold text-center text-yellow-600 mb-4 sm:mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          What Our Students Say
        </motion.h2>
        <motion.div
          key={testimonialIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="shadow-lg bg-white border-2 border-purple-200 max-w-xl mx-auto">
            <CardContent className="p-4">
              <p className="text-sm italic text-pink-700">
                "{testimonials[testimonialIndex].quote}"
              </p>
              <p className="text-xs mt-2 text-right font-semibold text-blue-600">
                {testimonials[testimonialIndex].author}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Meet the Creators */}
      <section className="mt-12 sm:mt-20 text-center px-2 sm:px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-pink-700 mb-4 sm:mb-6">Meet the Creators 👑</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl border-2 border-pink-200 shadow-md"
          >
            <h3 className="text-lg font-bold text-purple-700">King Femi the Builder</h3>
            <p className="text-sm mt-2 text-gray-700">Designs the magic behind the MathMasters world, making sure every click is fun!</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl border-2 border-yellow-200 shadow-md"
          >
            <h3 className="text-lg font-bold text-blue-700">King Seun the Designer</h3>
            <p className="text-sm mt-2 text-gray-700">Creates the colorful world and characters that make learning joyful.</p>
          </motion.div>
        </div>
      </section>

      {/* Game Preview */}
      <div className="mt-12 sm:mt-20 text-center px-2 sm:px-4">
        <motion.h2
          className="text-xl sm:text-2xl font-bold text-pink-600 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Sneak Peek
        </motion.h2>
        <motion.div
          className="rounded-lg overflow-hidden shadow-2xl max-w-sm sm:max-w-md mx-auto border-4 border-yellow-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src="/game-preview.gif" alt="Game Preview" className="w-full" />
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-12 sm:mt-20 text-center text-xs sm:text-sm text-gray-600 border-t border-purple-200 pt-4">
        Powered by <span className="font-bold text-purple-700">Sensay</span> | <a href="mailto:team@sensay.app" className="text-pink-600 font-medium">team@sensay.app</a>
        <p className="mt-2">Follow us on <a href="https://twitter.com/sensayHQ" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold">Twitter</a> for updates!</p>
      </footer>

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
        onSwitchToSignup={handleSwitchToSignup}
      />

      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </div>
  );
}

