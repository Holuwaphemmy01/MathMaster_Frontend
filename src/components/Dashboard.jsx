import { useState, useRef, useEffect } from "react";
import { Settings, Power, Clock, Users, ChevronDown } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import mathQueen from '../assets/math-queen.png';

// Change from default export to named export
export function Dashboard() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
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

  // Close dropdowns on outside click
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

  const handleStartChallenge = () => {
    navigate('/challenge');
  };

  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing tokens, state, etc.)
    
    navigate('/');
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 text-gray-800 flex flex-col">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gradient-to-r from-purple-300 to-purple-500 text-white px-6 py-4 shadow-md rounded-b-3xl"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-normal" style={{ fontFamily: 'Pacifico' }}>
            <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-indigo-600 text-transparent bg-clip-text hover:from-blue-500 hover:via-indigo-500 hover:to-purple-600 transition-all duration-300">
              MathMasters
            </span>
          </h1>
          <div className="flex gap-4">
            <Settings className="w-6 h-6 hover:text-yellow-300 cursor-pointer" />
            <Power 
              className="w-6 h-6 text-red-300 hover:text-red-500 cursor-pointer" 
              onClick={handleLogout}
            />
          </div>
        </div>
      </motion.header>

      <main className="flex-1 px-4 py-6 space-y-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-gradient-to-br from-purple-300 via-pink-200 to-purple-200 rounded-3xl p-8 flex items-center gap-8 shadow-2xl"
        >
          <img
            src={mathQueen}
            alt="Math Queen"
            className="w-32 h-32 object-cover rounded-full border-8 border-white shadow-xl transform hover:scale-105 transition-transform duration-300"
          />
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-900">Welcome {username || 'Student'}!</h2>
            <p className="text-base text-purple-800">
              I am <span className="font-bold">Queen Oluwasemilore</span>. Challenge the king to prove your skills!
            </p>
          </div>
        </motion.div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 relative">
          {/* Leaderboard Button */}
          <div className="relative w-full sm:w-auto flex-1">
            <Button
              className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-4 sm:py-5 rounded-xl shadow-md text-xs flex items-center justify-center gap-1 w-full"
              onClick={toggleLeaderboard}
            >
              LEADERBOARD
              <ChevronDown className="w-4 h-4" />
            </Button>

            {showLeaderboard && (
              <motion.div
                ref={leaderboardRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full mt-1 left-0 w-full sm:w-64 bg-white rounded-xl shadow-lg z-10"
              >
                <div className="p-4">
                  {leaderboardData.map((user, index) => (
                    <div key={user.name} className="flex justify-between items-center py-2">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-gray-700">{index + 1}.</span>
                        <span className="text-sm font-medium text-gray-700 truncate max-w-[120px]">
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
          <div className="relative w-full sm:w-auto flex-1">
            <Button
              className="bg-pink-300 hover:bg-pink-400 text-purple-900 font-bold py-4 sm:py-5 rounded-xl shadow-md text-xs w-full flex items-center justify-center gap-1"
              onClick={toggleProgress}
            >
              PROGRESS
              <ChevronDown className="w-4 h-4" />
            </Button>

            {showProgress && (
              <motion.div
                ref={progressRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full mt-1 left-0 w-full sm:w-64 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg z-10 border border-pink-100"
              >
                <div className="p-3 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-gray-700">Solved:</span>
                    <span className="text-xs font-semibold text-green-600">85</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-gray-700">Failed:</span>
                    <span className="text-xs font-semibold text-red-600">15</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Challenge Section - Will be below dropdowns because of layout */}
        <div className="mt-10 sm:mt-6">
          <h2 className="text-lg font-semibold mb-2 text-purple-700">Today's Challenge</h2>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-indigo-900 text-white rounded-3xl p-6 shadow-lg flex flex-col gap-4"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-green-500 p-4 rounded-full shadow-lg">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-xl font-semibold">Challenge Mode</p>
                  <p className="text-sm text-gray-200">Solve questions with AI help</p>
                </div>
              </div>
              <Button 
                className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold px-4 py-1 rounded-2xl text-sm"
                onClick={handleStartChallenge}
              >
                START
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="mt-4 flex justify-center">
          <Button className="bg-pink-400 hover:bg-pink-500 text-white font-bold px-4 py-1 rounded-2xl text-sm flex items-center gap-2">
            <Users className="w-5 h-5" /> Challenge a Friend
          </Button>
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gradient-to-r from-purple-300 to-purple-500 text-white py-3 text-center text-sm rounded-t-3xl"
      >
        Powered by Sensay
      </motion.footer>
    </div>
  );
}