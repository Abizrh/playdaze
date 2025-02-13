import { create } from 'zustand';

interface GameState {
  username: string;
  score: number;
  setUsername: (username: string) => void;
  setScore: (score: number) => void;
  resetGame: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  username: '',
  score: 0,
  setUsername: (username) => set({ username }),
  setScore: (score) => set({ score }),
  resetGame: () => set({ score: 0 }),
}));