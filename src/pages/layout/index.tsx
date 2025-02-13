import React from "react";
import { TowerControl as GameController } from "lucide-react";
import { useGameStore } from "../../lib/store";
import { Leaderboard } from "../../components/Leaderboard";
const Layout = () => {
  const { username, setUsername } = useGameStore();
  const [isLoading, setIsLoading] = React.useState(false);

  const handlePlay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement game start logic
    setTimeout(() => setIsLoading(false), 1000);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <GameController className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Today's Random Game: Pixel Runner
            </h1>
            <p className="text-white/90 text-lg">
              New game every day! Follow @dailygame for updates
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-8 mb-8">
            <form onSubmit={handlePlay} className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter your username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="GameMaster123"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading || !username}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  (isLoading || !username) && "opacity-50 cursor-not-allowed"
                }`}
              >
                {isLoading ? "Loading..." : "Play Now!"}
              </button>
            </form>
          </div>

          <Leaderboard />
        </div>
      </div>
    </div>
  );
};

export default Layout;
