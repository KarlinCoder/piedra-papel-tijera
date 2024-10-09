import { useEffect, useState } from "react";
import WinsBanner from "./WinsBanner";

const selectionClassNames =
  "text-xl bg-neutral-800 p-4 rounded-md w-[200px] text-center hover:cursor-pointer hover:bg-neutral-700 active:bg-neutral-800 select-none";

export default function Game({ showGame, setShowGame }) {
  const ANSWERS = ["Piedra", "Papel", "Tijera"];
  const [thinking, setThinking] = useState(false);
  const [message, setMessage] = useState("");
  const [winsHistory, setWinsHistory] = useState([]);
  const [button, setButton] = useState(false);

  const handleSelectionThinking = (selection) => {
    setThinking(true);
    setMessage("pensando...");
    setButton(false);
    setTimeout(() => {
      const randomAnswer = ANSWERS[Math.floor(Math.random() * ANSWERS.length)];

      let result = "";

      if (
        (selection === "Tijera" && randomAnswer === "Papel") ||
        (selection === "Papel" && randomAnswer === "Piedra") ||
        (selection === "Piedra" && randomAnswer === "Tijera")
      ) {
        result = "ganado";
      } else if (selection === randomAnswer) {
        result = "empatado";
      } else {
        result = "perdido";
      }

      if (result === "ganado") {
        setWinsHistory([...winsHistory, 3]);
      } else if (result === "empatado") {
        setWinsHistory([...winsHistory, 2]);
      } else if (result === "perdido") {
        setWinsHistory([...winsHistory, 1]);
      }

      setMessage(
        `Has ${result} el juego, sacaste ${selection} y el contrario ${randomAnswer}`
      );
      setButton(true);
    }, 3000);
  };

  const handleRestartGame = () => {
    if (winsHistory.length === 3) {
      setThinking(false);
      setButton(false);
      setMessage("");
      setWinsHistory([]);
      setShowGame(false);

      localStorage.setItem(
        `score${localStorage.length}`,
        winsHistory.toString()
      );
    } else {
      setShowGame(true);
      setThinking(false);
      setMessage("");
    }
  };

  return (
    <>
      <main
        className={`${
          showGame && !thinking ? "flex" : "hidden"
        } flex-col text-slate-100 text-4xl gap-10 md:gap-5 justify-center items-center`}
      >
        <h2 className="text-3xl text-center">Elije:</h2>
        <div className="flex flex-wrap gap-2 w-fit justify-center items-center">
          <div
            className={selectionClassNames}
            onClick={() => handleSelectionThinking("Piedra")}
          >
            Piedra
          </div>
          <div
            className={selectionClassNames}
            onClick={() => handleSelectionThinking("Papel")}
          >
            Papel
          </div>
          <div
            className={selectionClassNames}
            onClick={() => handleSelectionThinking("Tijera")}
          >
            Tijera
          </div>
        </div>
      </main>

      <section
        className={`${
          thinking ? "inline-block" : "hidden"
        } text-slate-100 text-center px-5`}
      >
        {!button ? (
          <div className="custom-loader"></div>
        ) : (
          <>
            <p>{message}</p>
            <button
              className={`mt-6 bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-800 px-6 py-2 rounded-md`}
              onClick={handleRestartGame}
            >
              Aceptar
            </button>
          </>
        )}
      </section>

      <WinsBanner showGame={showGame} data={winsHistory} />
    </>
  );
}
