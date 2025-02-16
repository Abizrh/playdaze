// import { useState } from "react";
// import { GameWrapper } from "../components/GameWrapper";
//
// const GAMES = [
//   { path: "t-rex", name: "Game 1" },
//   // { path: "game2", name: "Game 2" },
//   // ... daftar game lainnya
// ];
//
// export const GameSelector = () => {
//   const [selectedGame, setSelectedGame] = useState<string | null>(null);
//
//   const selectRandomGame = () => {
//     const randomIndex = Math.floor(Math.random() * GAMES.length);
//     setSelectedGame(GAMES[randomIndex].path);
//   };
//
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
//       <button onClick={selectRandomGame}>Pick Random Game</button>
//       {selectedGame && <GameWrapper gamePath={selectedGame} />}
//     </div>
//   );
// };

import { useEffect, useRef } from "react";

export const GameSelector = () => {
  const gamePath = new URLSearchParams(window.location.search).get("game");
  const gameContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGame = async () => {
      if (!gameContainerRef.current) return;

      gameContainerRef.current.innerHTML = "";

      try {
        const response = await fetch(`/games/${gamePath}/index.html`);
        const html = await response.text();

        // Inject HTML ke dalam container
        gameContainerRef.current.innerHTML = html;

        const scripts = gameContainerRef.current.querySelectorAll("script");
        scripts.forEach((oldScript) => {
          const newScript = document.createElement("script");
          if (oldScript.src) {
            newScript.src = oldScript.src;
          } else {
            newScript.textContent = oldScript.textContent;
          }
          newScript.async = true;
          oldScript.replaceWith(newScript);
        });
      } catch (error) {
        console.error("Failed to load game:", error);
      }
    };

    loadGame();

    return () => {
      if (gameContainerRef.current) {
        gameContainerRef.current.innerHTML = "";
      }
    };
  }, [gamePath]);

  return <div ref={gameContainerRef} className="w-full h-full" />;
};
