import { useState } from "react";
import { GameWrapper } from "../components/GameWrapper";

const GAMES = [
  { path: "t-rex", name: "Game 1" },
  // { path: "game2", name: "Game 2" },
  // ... daftar game lainnya
];

export const GameSelector = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const selectRandomGame = () => {
    const randomIndex = Math.floor(Math.random() * GAMES.length);
    setSelectedGame(GAMES[randomIndex].path);
  };

  return (
    <div>
      <button onClick={selectRandomGame}>Pick Random Game</button>
      {selectedGame && <GameWrapper gamePath={selectedGame} />}
    </div>
  );
};
