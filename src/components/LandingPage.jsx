// import { useState, useEffect } from "react";
// import { Button } from "../components/ui/button";
// import { Card, CardContent } from "../components/ui/card";
// import { PlayCircle, LogIn } from "lucide-react";
// import { motion } from "framer-motion";
// import king from "../assets/math-king-ade.png";
// import { LoginModal } from "../components/ui/LoginModal";
// import { SignupModal } from "../components/ui/SignupModal";  // Add this import
// import { useNavigate } from 'react-router-dom';

// const testimonials = [
//   {
//     quote:
//       "MathMasters helped me understand multiplication with yam sharing examples!",
//     author: "— Chinedu, Primary 5",
//   },
//   {
//     quote: "Now I love maths! Math King Ade made learning fun and exciting!",
//     author: "— Amina, Primary 4",
//   },
// ];

// export default function LandingPage() {
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [isSignupOpen, setIsSignupOpen] = useState(false);
//   const [testimonialIndex, setTestimonialIndex] = useState(0);  
//   const navigate = useNavigate();

//   const handleSwitchToSignup = () => {
//     setIsLoginOpen(false);
//     setIsSignupOpen(true);
//   };

//   const handleSwitchToLogin = () => {
//     setIsSignupOpen(false);
//     setIsLoginOpen(true);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 20000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleLogin = () => {
//     // Add your login logic here
//     navigate('/dashboard');
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100 text-gray-800 px-4 sm:px-6 md:px-8 py-4 sm:py-6">

//       <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mb-6">
//         <div className="flex items-center gap-2">
          
//         <span className="font-bold text-base sm:text-lg text-pink-600 font-pacifico">MathMaster</span>
//         </div>

//         <div className="flex items-center gap-3 sm:gap-4">
//           <Button 
//             className="bg-pink-500 text-white hover:bg-pink-600 px-3 sm:px-4 py-1 text-xs sm:text-sm rounded-full"
//             onClick={() => setIsLoginOpen(true)}
//           >
//             <LogIn className="w-3 sm:w-4 h-3 sm:h-4 mr-1" /> Login
//           </Button>
//         </div>
//       </div>

//       <div className="flex flex-col items-center text-center gap-4 sm:gap-6 mt-4 sm:mt-0">
//         <motion.img
//           src={king}
//           alt="Math King Ade"
//           className="w-32 sm:w-40 h-32 sm:h-40 rounded-full border-4 border-yellow-400 shadow-xl"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         />
//         <motion.h1
//           className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-pink-600 drop-shadow-sm"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//         >
//           Welcome to MathMasters
//         </motion.h1>
//         <motion.p
//           className="max-w-md text-xs sm:text-sm md:text-base text-purple-700 px-4 sm:px-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.6 }}
//         >
//           Learn math the fun way with cultural examples and support for Nigerian languages. Join Math King Ade on your math adventure!
//         </motion.p>
//         <motion.div
//           className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.9, duration: 0.6 }}
//         >
//           <Button 
//             className="bg-yellow-400 text-white hover:bg-yellow-500 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm shadow-md w-full sm:w-auto"
//             onClick={() => setIsSignupOpen(true)}  // Add onClick handler
//           >
//             Get Started
//           </Button>
//           <Button variant="outline" className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm border-pink-400 text-pink-600 w-full sm:w-auto">
//             <PlayCircle className="w-3 sm:w-4 h-3 sm:h-4" /> Preview Game
//           </Button>
//         </motion.div>
//       </div>

//       <section className="mt-12 sm:mt-20 text-center px-2 sm:px-4">
//         <h2 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4">Why Kids Love MathMasters 💖</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
//           <Card className="bg-white border-2 border-pink-300 p-4">
//             <CardContent>
//               <p className="text-lg font-semibold text-pink-600">🎮 It’s like a game!</p>
//               <p className="text-sm mt-2 text-gray-600">Math becomes an adventure with Math King Ade and friends.</p>
//             </CardContent>
//           </Card>
//           <Card className="bg-white border-2 border-yellow-300 p-4">
//             <CardContent>
//               <p className="text-lg font-semibold text-yellow-600">🌍 Local Language Fun</p>
//               <p className="text-sm mt-2 text-gray-600">Learn in your language with cultural examples you already know.</p>
//             </CardContent>
//           </Card>
//           <Card className="bg-white border-2 border-blue-300 p-4">
//             <CardContent>
//               <p className="text-lg font-semibold text-blue-600">💡 Boosts Confidence</p>
//               <p className="text-sm mt-2 text-gray-600">From shy to sure — solve problems with a smile!</p>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <div className="mt-12 sm:mt-16 px-2 sm:px-4">
//         <motion.h2
//           className="text-xl sm:text-2xl font-bold text-center text-yellow-600 mb-4 sm:mb-6"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           What Our Students Say
//         </motion.h2>
//         <motion.div
//           key={testimonialIndex}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <Card className="shadow-lg bg-white border-2 border-purple-200 max-w-xl mx-auto">
//             <CardContent className="p-4">
//               <p className="text-sm italic text-pink-700">
//                 "{testimonials[testimonialIndex].quote}"
//               </p>
//               <p className="text-xs mt-2 text-right font-semibold text-blue-600">
//                 {testimonials[testimonialIndex].author}
//               </p>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>

//       {/* Meet the Creators */}
//       <section className="mt-12 sm:mt-20 text-center px-2 sm:px-4">
//         <h2 className="text-xl sm:text-2xl font-bold text-pink-700 mb-4 sm:mb-6">Meet the Creators 👑</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="bg-white p-6 rounded-xl border-2 border-pink-200 shadow-md"
//           >
//             <h3 className="text-lg font-bold text-purple-700">King Femi the Builder</h3>
//             <p className="text-sm mt-2 text-gray-700">Designs the magic behind the MathMasters world, making sure every click is fun!</p>
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="bg-white p-6 rounded-xl border-2 border-yellow-200 shadow-md"
//           >
//             <h3 className="text-lg font-bold text-blue-700">King Seun the Designer</h3>
//             <p className="text-sm mt-2 text-gray-700">Creates the colorful world and characters that make learning joyful.</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Game Preview */}
//       <div className="mt-12 sm:mt-20 text-center px-2 sm:px-4">
//         <motion.h2
//           className="text-xl sm:text-2xl font-bold text-pink-600 mb-4"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           Sneak Peek
//         </motion.h2>
//         <motion.div
//           className="rounded-lg overflow-hidden shadow-2xl max-w-sm sm:max-w-md mx-auto border-4 border-yellow-300"
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <img src="/game-preview.gif" alt="Game Preview" className="w-full" />
//         </motion.div>
//       </div>

//       {/* Footer */}
//       <footer className="mt-12 sm:mt-20 text-center text-xs sm:text-sm text-gray-600 border-t border-purple-200 pt-4">
//         Powered by <span className="font-bold text-purple-700">Sensay</span> | <a href="mailto:team@sensay.app" className="text-pink-600 font-medium">team@sensay.app</a>
//         <p className="mt-2">Follow us on <a href="https://twitter.com/sensayHQ" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold">Twitter</a> for updates!</p>
//       </footer>

//       <LoginModal 
//         isOpen={isLoginOpen} 
//         onClose={() => setIsLoginOpen(false)}
//         onSwitchToSignup={handleSwitchToSignup}
//       />

//       <SignupModal 
//         isOpen={isSignupOpen} 
//         onClose={() => setIsSignupOpen(false)}
//         onSwitchToLogin={handleSwitchToLogin}
//       />
//     </div>
//   );
// }



import { useState, useRef, useEffect } from "react";
import { Settings, Power, Clock, Users, ChevronDown } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [user, setUser] = useState("Fadeke");
  const [level, setLevel] = useState("Level 3");
  const [topic, setTopic] = useState("fractions");
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  const leaderboardData = [
    { name: "Amina", problemsSolved: 128 },
    { name: "Chinedu", problemsSolved: 115 },
    { name: "Femi", problemsSolved: 102 },
    { name: "Seun", problemsSolved: 98 },
    { name: "Bola", problemsSolved: 85 },
    { name: "Tunde", problemsSolved: 79 },
    { name: "Yemi", problemsSolved: 72 },
    { name: "Kemi", problemsSolved: 65 },
    { name: "Wale", problemsSolved: 58 },
    { name: "Zainab", problemsSolved: 50 }
  ];

  // Refs for dropdown containers
  const leaderboardRef = useRef(null);
  const progressRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        leaderboardRef.current &&
        !leaderboardRef.current.contains(event.target) &&
        progressRef.current &&
        !progressRef.current.contains(event.target)
      ) {
        setShowLeaderboard(false);
        setShowProgress(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle logic with mutual exclusivity
  const toggleLeaderboard = () => {
    if (showLeaderboard) {
      setShowLeaderboard(false);
    } else {
      setShowLeaderboard(true);
      setShowProgress(false);
    }
  };

  const toggleProgress = () => {
    if (showProgress) {
      setShowProgress(false);
    } else {
      setShowProgress(true);
      setShowLeaderboard(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 text-gray-800 flex flex-col px-4">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gradient-to-r from-purple-300 to-purple-500 text-white py-4 shadow-md rounded-b-3xl mt-4"
      >
        <div className="flex justify-between items-center px-4">
          <h1 className="text-lg font-bold">MathMasters</h1>
          <div className="flex gap-3">
            <Settings className="w-5 h-5 hover:text-yellow-300 cursor-pointer" />
            <Power className="w-5 h-5 text-red-300 hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </motion.header>

      <main className="flex-1 pt-6 pb-20 space-y-6">
        {/* User Info Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-yellow-200 rounded-2xl p-4 flex items-center gap-4 shadow-md"
        >
          <img
            src="/math-king.png"
            alt="Math King Ade"
            className="w-16 h-16 object-contain rounded-full border-4 border-white"
          />
          <div>
            <p className="text-base font-semibold text-purple-800">{level}</p>
            <p className="text-sm text-gray-600">Current Topic: {topic}</p>
          </div>
        </motion.div>

        {/* Buttons Section - Mobile Optimized */}
        <div className="flex flex-col gap-4 relative">
          {/* Leaderboard Button */}
          <div className="relative w-full">
            <Button
              className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-4 rounded-xl shadow-md text-sm flex items-center justify-center gap-2 w-full"
              onClick={toggleLeaderboard}
            >
              LEADERBOARD
              <ChevronDown className="w-5 h-5" />
            </Button>

            {showLeaderboard && (
              <motion.div
                ref={leaderboardRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 right-0 mt-1 w-full bg-white rounded-lg shadow-lg z-10"
              >
                <div className="p-4">
                  {leaderboardData.map((user, index) => (
                    <div key={user.name} className="flex justify-between items-center py-3 border-b last:border-b-0">
                      <div className="flex items-center gap-3">
                        <span className="text-base font-medium text-gray-700">{index + 1}.</span>
                        <span className="text-base font-medium text-gray-700 truncate">
                          {user.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-purple-600">
                        {user.problemsSolved} solved
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Progress Button */}
          <div className="relative w-full">
            <Button
              className="bg-pink-300 hover:bg-pink-400 text-purple-900 font-bold py-4 rounded-xl shadow-md text-sm w-full flex items-center justify-center gap-2"
              onClick={toggleProgress}
            >
              PROGRESS
              <ChevronDown className="w-5 h-5" />
            </Button>

            {showProgress && (
              <motion.div
                ref={progressRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 right-0 mt-1 w-full bg-white/95 backdrop-blur-sm rounded-lg shadow-lg z-10 border border-pink-100"
              >
                <div className="p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-medium text-gray-700">Solved:</span>
                    <span className="text-base font-semibold text-green-600">85</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-base font-medium text-gray-700">Failed:</span>
                    <span className="text-base font-semibold text-red-600">15</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Challenge Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-3 text-purple-700">Today's Challenge</h2>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-indigo-900 text-white rounded-xl p-4 shadow-md flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="bg-green-500 p-3 rounded-full shadow">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-base font-semibold">Challenge Mode</p>
                <p className="text-xs text-gray-200">Solve questions with AI help</p>
              </div>
            </div>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-2 rounded-lg text-sm w-full">
              START
            </Button>
          </motion.div>
        </div>

        {/* Friend Challenge Button */}
        <div className="mt-6">
          <Button className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 w-full">
            <Users className="w-5 h-5" /> Challenge a Friend
          </Button>
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gradient-to-r from-purple-300 to-purple-500 text-white py-3 text-center text-sm rounded-t-xl fixed bottom-0 left-0 right-0"
      >
        Powered by Sensay
      </motion.footer>
    </div>
  );
}