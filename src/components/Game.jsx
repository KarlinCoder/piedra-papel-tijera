import { useState } from "react";

// 1 - Piedra
// 2 - Papel
// 3 - Tijeras

export default function Game({ showGame }) {
  const [userSelection, setUserSelection] = useState();

  const selectionClassNames =
    "bg-neutral-800 p-4 rounded-md w-[200px] text-center hover:cursor-pointer hover:bg-neutral-700 active:bg-neutral-800 select-none";

  return (
    <main
      className={`${
        showGame ? "flex" : "hidden"
      } flex-col text-slate-100 text-4xl gap-10 lg:gap-5 jusitfy-center items-center`}
    >
      <h2 className="text-3xl text-center">Elije:</h2>
      <div className="flex flex-wrap gap-2 w-fit justify-center items-center">
        <div className={selectionClassNames}>Piedra</div>
        <div className={selectionClassNames}>Papel</div>
        <div className={selectionClassNames}>Tijera</div>
      </div>
    </main>
  );
}
