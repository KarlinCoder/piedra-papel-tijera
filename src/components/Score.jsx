import { useEffect, useState } from "react";

export default function Score() {
  const [scoreArray, setScoreArray] = useState([]);

  useEffect(() => {
    // Recuperar los puntajes del localStorage
    const newScores = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("score")) {
        newScores.push(localStorage.getItem(key));
      }
    }

    // Guardar solo los últimos cinco puntajes
    const lastFiveScores = newScores.slice(-5);
    setScoreArray(lastFiveScores);
  }, []);

  return (
    <div className="flex flex-col items-center bg-neutral-900 text-slate-100 p-4 rounded-lg shadow-md w-[300px]">
      <table className="table-auto w-full text-center">
        <thead>
          <tr className="border-b border-neutral-700">
            <th className="pb-2 text-2xl font-semibold mb-4">
              Últimos Scores{" "}
              <span className="block text-sm text-neutral-400">
                (actualiza la pagina)
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {scoreArray.length === 0 ? (
            <tr>
              <td className="py-4 text-neutral-500">No hay scores aún</td>
            </tr>
          ) : (
            scoreArray.map((score, index) => (
              <tr key={index} className="border-b border-neutral-700">
                <td className="py-2">{score}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
