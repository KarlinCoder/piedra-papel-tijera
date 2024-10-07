import { useState } from "react";

export default function Game({ showGame }) {
  const ANSWERS = ["Piedra", "Papel", "Tijera"];
  const [userSelection, setUserSelection] = useState("");
  const [randomAnswer, setRandomAnswer] = useState("");
  const [thinking, setThinking] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const selectionClassNames =
    "text-xl bg-neutral-800 p-4 rounded-md w-[200px] text-center hover:cursor-pointer hover:bg-neutral-700 active:bg-neutral-800 select-none";

  const handleSelectionThinking = (selection) => {
    setMessage("pensando...");
    setUserSelection(selection);
    setThinking(true);
    setTimeout(() => {
      setRandomAnswer(ANSWERS[Math.floor(Math.random() * ANSWERS.length)]);
      console.log(randomAnswer);
      if (
        (userSelection === "tijera" && randomAnswer === "papel") ||
        (userSelection === "papel" && randomAnswer === "piedra") ||
        (userSelection === "piedra" && randomAnswer === "tijera")
      ) {
        setStatus("ganado");
      } else if (userSelection === randomAnswer) {
        setStatus("empatado");
      } else {
        setStatus("perdido");
      }

      setMessage(
        `Has ${status} el juego, sacaste ${userSelection} y el contrario ${randomAnswer}`
      );
    }, 1000);
  };

  return (
    <>
      <main
        className={`${
          showGame && !thinking ? "flex" : "hidden"
        } flex-col text-slate-100 text-4xl gap-10 md:gap-5 jusitfy-center items-center`}
      >
        <h2 className="text-3xl text-center">Elije:</h2>
        <div className="flex flex-wrap gap-2 w-fit justify-center items-center">
          <div
            className={selectionClassNames}
            onClick={() => handleSelectionThinking("piedra")}
          >
            Piedra
          </div>
          <div
            className={selectionClassNames}
            onClick={() => handleSelectionThinking("papel")}
          >
            Papel
          </div>
          <div
            className={selectionClassNames}
            onClick={() => handleSelectionThinking("pijera")}
          >
            Tijera
          </div>
        </div>
      </main>

      <section
        className={`${thinking ? "inline-block" : "hidden"} text-slate-100`}
      >
        {message}
      </section>
    </>
  );
}
