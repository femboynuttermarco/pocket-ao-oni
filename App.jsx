import React, { useState, useEffect } from "react";

const MAX_STAT = 100;

export default function App() {
  const [hunger, setHunger] = useState(MAX_STAT);
  const [health, setHealth] = useState(MAX_STAT);
  const [fun, setFun] = useState(MAX_STAT);

  // Decrease stats over time
  useEffect(() => {
    const interval = setInterval(() => {
      setHunger(prev => Math.max(0, prev - 1));
      setHealth(prev => Math.max(0, prev - 0.5));
      setFun(prev => Math.max(0, prev - 0.8));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleShower = () => {
    setHealth(prev => Math.min(MAX_STAT, prev + 10));
  };

  const handleKitchen = () => {
    setHunger(prev => Math.min(MAX_STAT, prev + 15));
  };

  const handleGames = () => {
    setFun(prev => Math.min(MAX_STAT, prev + 20));
  };

  const StatBar = ({ label, value }) => (
    <div className="mb-2">
      <div className="text-white font-semibold">{label}</div>
      <div className="w-40 h-4 bg-gray-700 rounded">
        <div
          className="h-4 bg-green-500 rounded transition-all duration-300"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="relative w-full h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
      {/* Buttons */}
      <div className="absolute top-4 left-4 space-x-4 z-10">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl shadow"
          onClick={handleShower}
        >
          Shower
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl shadow"
          onClick={handleKitchen}
        >
          Kitchen
        </button>
        <button
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-xl shadow"
          onClick={handleGames}
        >
          Games
        </button>
      </div>

      {/* Stats */}
      <div className="absolute top-4 right-4 text-sm z-10">
        <StatBar label="Hunger" value={hunger} />
        <StatBar label="Health" value={health} />
        <StatBar label="Fun" value={fun} />
      </div>

      {/* Character Image */}
      <img
        src="https://your-image-url.com/image.png"
        alt="Character"
        className="w-80 h-auto object-contain"
      />
    </div>
  );
}
