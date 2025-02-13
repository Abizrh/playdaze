import React from 'react';
import { Trophy } from 'lucide-react';

interface LeaderboardEntry {
  username: string;
  score: number;
}

const mockLeaderboard: LeaderboardEntry[] = [
  { username: "GameMaster", score: 1000 },
  { username: "PixelNinja", score: 850 },
  { username: "SpeedRunner", score: 720 },
];

export const Leaderboard: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="w-6 h-6 text-yellow-500" />
        <h2 className="text-xl font-bold text-gray-800">Today's Top Players</h2>
      </div>
      <div className="space-y-3">
        {mockLeaderboard.map((entry, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <span className="font-bold text-gray-600">#{index + 1}</span>
              <span className="font-medium">{entry.username}</span>
            </div>
            <span className="font-bold text-indigo-600">{entry.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};