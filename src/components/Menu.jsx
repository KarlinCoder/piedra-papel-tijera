import Score from "./Score";
import { FaGithub, FaInstagram } from "react-icons/fa6";

export default function Menu({ showGame, setShowGame }) {
  const buttonClassnames =
    "text-slate-100 text-center bg-neutral-800 p-4 rounded-lg hover:bg-neutral-700 active:bg-neutral-800 cursor-pointer";

  return (
    <section
      className={`${
        showGame ? "hidden" : "flex"
      } flex-col md:flex-row md:items-center justify-center gap-7`}
    >
      <nav className="flex flex-col gap-7">
        <h1 className="text-center text-slate-100 text-3xl font-bold">
          Win Of Hands
        </h1>

        <ul className="flex flex-col gap-3 ">
          <li className={buttonClassnames} onClick={() => setShowGame(true)}>
            Nuevo Juego
          </li>
          <li
            className={buttonClassnames}
            onClick={() => {
              const clearData = window.confirm(
                "Seguro que desea borrar los scores?"
              );
              if (clearData) {
                localStorage.clear();
              }
            }}
          >
            Borrar Datos de Juego
          </li>
        </ul>
      </nav>

      <Score />

      <footer className="absolute w-full p-4 bg-neutral-950 flex m-auto flex-col bottom-0 left-0">
        <h2 className="text-center font-bold text-neutral-400 text-lg mx-auto ">
          by KarlinCoder
        </h2>
        <div className="flex justify-center gap-1">
          <a href="https://github.com/KarlinCoder" target="_blank">
            <FaGithub className="text-neutral-400 text-3xl hover:text-neutral-200 cursor-pointer active:text-neutral-400" />
          </a>
          <a
            href="https://www.instagram.com/its.karlin.coder/?igsh=MW1oYnNwMHIxYmRjbg%3D%3D"
            target="_blank"
          >
            <FaInstagram className="text-neutral-400 text-3xl hover:text-neutral-200 cursor-pointer active:text-neutral-400" />
          </a>
        </div>
      </footer>
    </section>
  );
}
