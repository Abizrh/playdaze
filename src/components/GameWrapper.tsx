import { useEffect, useRef } from "react";

export const GameWrapper = ({ gamePath }: { gamePath: string }) => {
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
