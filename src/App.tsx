import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import { GameSelector } from "./pages/Games";

function App() {
  // <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
  //   <div className="container mx-auto px-4 py-16">
  //
  // <Route path="/playground" element={<NeovimSimulator />} />
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="home w-full">
              <Layout />
            </div>
          }
        />
        <Route path="/games" element={<GameSelector />} />
      </Routes>
    </Router>
  );
}

export default App;

