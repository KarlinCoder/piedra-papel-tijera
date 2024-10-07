export default function Menu({ showGame, setShowGame }) {
  const buttonClassnames =
    "text-slate-100 text-center bg-neutral-800 p-2 rounded-lg hover:bg-neutral-700 active:bg-neutral-800";

  return (
    <section className={`${showGame ? "hidden" : "flex"} flex-col gap-7`}>
      <h1 className="text-slate-100 text-3xl font-bold">Win For Hands</h1>

      <ul className="flex flex-col gap-1">
        <li className={buttonClassnames} onClick={() => setShowGame(true)}>
          Nuevo Juego
        </li>
        <li className={buttonClassnames} onClick={() => localStorage.clear()}>
          Borrar Datos de Juego
        </li>
      </ul>
    </section>
  );
}
