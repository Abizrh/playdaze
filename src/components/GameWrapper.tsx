import { useEffect, useRef } from "react";

export const GameWrapper = ({ gamePath }: { gamePath: string }) => {
  const gameContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGame = async () => {
      if (!gameContainerRef.current) return;

      // Kosongkan container sebelum memuat game baru
      gameContainerRef.current.innerHTML = "";

      try {
        // Ambil HTML dari game
        const response = await fetch(`/games/${gamePath}/index.html`);
        const html = await response.text();

        // Inject HTML ke dalam container
        gameContainerRef.current.innerHTML = html;

        // Cari semua script di dalam HTML dan load ulang mereka
        const scripts = gameContainerRef.current.querySelectorAll("script");
        scripts.forEach((oldScript) => {
          const newScript = document.createElement("script");
          if (oldScript.src) {
            newScript.src = oldScript.src; // Load external scripts
          } else {
            newScript.textContent = oldScript.textContent; // Inline scripts
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
      // Bersihkan container saat unmount
      if (gameContainerRef.current) {
        gameContainerRef.current.innerHTML = "";
      }
    };
  }, [gamePath]);

  return <div ref={gameContainerRef} className="w-full h-full" />;
};
