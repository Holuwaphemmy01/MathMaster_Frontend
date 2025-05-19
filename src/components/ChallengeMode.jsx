import { useState } from "react";
import { Settings, Power, Clock, Users, Video } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ChallengeMode() {
  const navigate = useNavigate();
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timer, setTimer] = useState(600);
  const [question, setQuestion] = useState("What is 1/2 + 1/4?");
  const [answer, setAnswer] = useState("");

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

      {/* Main Content */}
      <main className="flex-1 px-4 py-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-3xl p-6 space-y-4"
        >
          <div className="flex justify-between items-center">
            <p className="font-bold text-purple-700">Question {questionNumber}/10</p>
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
