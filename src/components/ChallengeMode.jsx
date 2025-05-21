import { useState, useEffect } from "react";
import { Settings, Power, Clock, Users, Video } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import rightMan from "../assets/right-man.png";
import '@fontsource/comic-neue';

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

export default function ChallengeMode() {
  const navigate = useNavigate();
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timer, setTimer] = useState(600);
  const [question, setQuestion] = useState("What is 1/2 + 1/4?");
  const [answer, setAnswer] = useState("");

  const welcomeMessage = useTypewriter(
    "I am Adigun, and I'll be your guide. Kindly attempt the challenges below, and if you need any help, just click on the explain button - I'll be happy to walk you through the solution!"
  );

  const handleLogout = () => {
    navigate('/');
  };

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
              <h2 className="text-2xl font-bold text-purple-700 mb-2">Welcome to the Challenge!</h2>
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
            <p className="font-bold text-purple-700">Question</p>
            <p className="font-mono text-red-500">Time Left: {Math.floor(timer / 60)}:{("0" + (timer % 60)).slice(-2)}</p>
          </div>

          <div className="bg-yellow-100 p-4 rounded-2xl text-lg font-semibold text-gray-800">
            {question}
          </div>

          <textarea
            rows={4}
            placeholder="Type your answer here..."
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <div className="flex justify-between items-center">
            <Button className="bg-green-500 hover:bg-green-600 text-white rounded-xl text-sm px-6 py-2">
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
    </div>
  );
}
