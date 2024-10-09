import { useEffect, useState } from "react";
import Menu from "./components/Menu";
import Game from "./components/Game";

export default function App() {
  const [showGame, setShowGame] = useState(false);

  return (
    <div className="relative flex flex-col md:flex-row md:gap-10 justify-center items-center bg-neutral-900 h-screen w-screen ">
      <Menu showGame={showGame} setShowGame={setShowGame} />
      <Game showGame={showGame} setShowGame={setShowGame} />
    </div>
  );
}
