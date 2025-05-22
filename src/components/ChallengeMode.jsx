import { useState, useEffect } from "react";
import { Settings, Power, Clock, Users, Video } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import rightMan from "../assets/right-man.png";
import '@fontsource/comic-neue';
import axios from 'axios'; 

function useTypewriter(text, speed = 50) {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index <= text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setIndex(0);
      }, 2000);
    }
  }, [index, text]);

  return displayText;
}

export function ChallengeMode() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [questionNumber, setQuestionNumber] = useState(1); // Keep track of question number
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(600); 
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [answer, setAnswer] = useState("");
  const [showGeniusModal, setShowGeniusModal] = useState(false); 
  const [showErrorModal, setShowErrorModal] = useState(''); // Keep this declaration
  const [showTimeUpModal, setShowTimeUpModal] = useState(false); // Add state for time up modal


  const welcomeMessage = useTypewriter(
    "I am Adigun, and I'll be your guide. Kindly attempt the challenges below, and if you need any help, just click on the explain button - I'll be happy to walk you through the solution!"
  );

  const handleLogout = () => {
    localStorage.clear(); 
    navigate('/');
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = async () => {
    if (!answer.trim()) {
      alert("Please provide an answer before submitting");
      return;
    }

    setIsTimerRunning(false); // Stop the timer when submitting

    try {
      const response = await axios.post('https://math-master-backend-mb6a.onrender.com/checkAnswer', {
        username: localStorage.getItem('username'),
        question: question,
        answer: answer.trim()
      });
      
      console.log('Answer response:', response.data);
      if (response.data.data.toLowerCase().includes('failed')) {
        setShowErrorModal(true);
        setTimeout(() => setShowErrorModal(false), 3000);
        // Optionally restart timer on incorrect answer, or leave stopped
        // setIsTimerRunning(true); 
      } else if (response.data.message.toLowerCase().includes('genius')) {
        setShowGeniusModal(true);
        setTimeout(() => setShowGeniusModal(false), 3000);
      }
      if (response.data.message === 'Correct') {
        fetchQuestion(); // Fetch the next question (which will reset and start timer)
        setAnswer(''); // Clear the answer input
        setQuestionNumber(prevNum => prevNum + 1); // Increment question number
      }
    } catch (error) {
      console.error('Error submitting answer:', error);
      alert('Error submitting answer. Please try again.');
      // Optionally restart timer on error
      // setIsTimerRunning(true);
    }
  };

  const fetchQuestion = async () => {
    setLoading(true); // Set loading to true before fetching
    setIsTimerRunning(false); // Stop timer while loading
    setTimer(600); // Reset timer for the new question
    try {
      const storedUsername = localStorage.getItem('username');
      const response = await axios.post('https://math-master-backend-mb6a.onrender.com/fetchQuestion', {
        username: storedUsername
      });
      console.log('Question response:', response.data);
      setQuestion(response.data.data); 
      setLoading(false); // Set loading to false after successful fetch
      setIsTimerRunning(true); // Start timer after question is loaded
    } catch (error) {
      console.error('Error fetching question:', error);
      setQuestion("Error loading question. Please try again.");
      setLoading(false); // Set loading to false even on error
      setIsTimerRunning(false); // Ensure timer is stopped on error
    }
  };

  // Effect to fetch the initial question on component mount
  useEffect(() => {
    fetchQuestion();
  }, []);

  // Effect to handle the countdown timer
  useEffect(() => {
    let interval;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timer === 0 && isTimerRunning) {
      // Timer reached zero while running
      setIsTimerRunning(false);
      setShowTimeUpModal(true); // Show time up modal
      // Optionally handle what happens when time is up (e.g., move to next question, end challenge)
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isTimerRunning, timer]); // Keep timer in dependency array to trigger when it hits 0

  // Add useEffect to get username from localStorage on mount
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);


  // In the return statement, add this just before the closing div
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 text-gray-800 flex flex-col">
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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-3xl p-6 mb-6"
        >
          <div className="flex items-start gap-6">
            <motion.img
              src={rightMan}
              alt="Adigun"
              className="w-32 h-32 rounded-full border-4 border-yellow-400 shadow-xl flex-shrink-0"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div>
              <h2 className="text-2xl font-bold text-purple-700 mb-2">Welcome to the Challenge, {username || 'Student'}!</h2>
              <p className="text-gray-700 min-h-[80px] font-comic-neue text-lg leading-relaxed" style={{ fontFamily: 'Comic Neue, cursive' }}>
                {welcomeMessage}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-3xl p-6 space-y-4"
        >
          <div className="flex justify-between items-center">
            <p className="font-bold text-purple-700">Question {questionNumber}</p> {/* Display question number */}
            <p className="font-mono text-red-500">Time Left: {Math.floor(timer / 60)}:{("0" + (timer % 60)).slice(-2)}</p>
          </div>

          <div className="bg-yellow-100 p-4 rounded-2xl text-lg font-semibold text-gray-800">
            {loading ? "Loading question..." : question}
          </div>

          <textarea
            value={answer}
            onChange={handleAnswerChange}
            rows={4}
            placeholder="Type your answer here..."
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <div className="flex justify-between items-center">
            <Button 
              onClick={handleSubmit}
              className="bg-green-500 hover:bg-green-600 text-white rounded-xl text-sm px-6 py-2"
            >
              Submit
            </Button>
            <Button className="bg-purple-300 hover:bg-purple-400 text-white rounded-xl text-sm px-4 py-2 flex items-center gap-2">
              <Video className="w-4 h-4" /> Watch Explanation
            </Button>
          </div>
        </motion.div>
      </main>
     
      <motion.footer
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gradient-to-r from-purple-300 to-purple-500 text-white py-3 text-center text-sm rounded-t-3xl"
      >
        Powered by Sensay
      </motion.footer>


      {showGeniusModal && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            bg-green-500 text-white p-6 rounded-2xl shadow-2xl z-50"
        >
          <p className="text-xl font-bold">{username} is a Genius! 🎉</p>
        </motion.div>
      )}

      {showErrorModal && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            bg-red-500 text-white p-6 rounded-2xl shadow-2xl z-50"
        >
          <p className="text-xl font-bold">Keep trying! You can do it! 😢</p>
        </motion.div>
      )}

      {/* Add Time Up Modal */}
      {showTimeUpModal && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            bg-yellow-500 text-white p-6 rounded-2xl shadow-2xl z-50"
        >
          <p className="text-xl font-bold">Time's Up! ⏳</p>
          {/* Add a button to close or proceed */}
          <Button 
            onClick={() => setShowTimeUpModal(false)} 
            className="mt-4 bg-white text-yellow-500 hover:bg-gray-100 rounded-xl text-sm px-4 py-2"
          >
            OK
          </Button>
        </motion.div>
      )}
    </div>
  );
}
