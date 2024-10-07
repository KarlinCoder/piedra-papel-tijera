import { useState } from "react";
import Menu from "./components/Menu";
import Score from "./components/Score";
import Game from "./components/Game";

export default function App() {
  const [showGame, setShowGame] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center bg-neutral-900 h-screen w-screen ">
      <Menu showGame={showGame} setShowGame={setShowGame} />
      <Game showGame={showGame} />
      <Score />
    </div>
  );
}
