import { useState } from "react";
import { Settings, Power, Clock, Users } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [user, setUser] = useState("Fadeke");
  const [level, setLevel] = useState("Level 3");
  const [topic, setTopic] = useState("fractions");

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
          <h1 className="text-xl font-bold">MathMasters</h1>
          <div className="flex gap-4">
            <Settings className="w-6 h-6 hover:text-yellow-300 cursor-pointer" />
            <Power className="w-6 h-6 text-red-300 hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </motion.header>

      <main className="flex-1 px-4 py-6 space-y-6">
        {/* Avatar and Level Info */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-yellow-200 rounded-3xl p-4 flex items-center gap-4 shadow-xl"
        >
          <img
            src="/math-king.png"
            alt="Math King Ade"
            className="w-20 h-20 object-contain rounded-full border-4 border-white"
          />
          <div>
            <p className="text-lg font-semibold text-purple-800">{level}</p>
            <p className="text-sm text-gray-600">Current Topic: {topic}</p>
          </div>
        </motion.div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-1 rounded-xl shadow-md text-xs">
            LEADERBOARD
          </Button>
          <Button className="bg-pink-300 hover:bg-pink-400 text-purple-900 font-bold py-1 rounded-xl shadow-md text-xs">
            PROGRESS
          </Button>
        </div>

        {/* Challenge Section */}
        <div>
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
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold px-4 py-1 rounded-2xl text-sm">
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
