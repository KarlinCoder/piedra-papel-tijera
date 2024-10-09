import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function WinsBanner({ showGame, data = [] }) {
  useEffect(() => {
    if (data.length === 3) {
      const handleScoreStorage = () => {
        localStorage.setItem(
          `${localStorage.length}`,
          JSON.stringify([...data])
        );
      };
      handleScoreStorage();

      if (data.toString() === [3, 3, 3].toString()) {
        confetti();
      }
    }
  }, [data]);

  return (
    <div
      className={`${
        showGame ? "flex" : "hidden"
      } justify-start absolute gap-2 bottom-6 bg-neutral-800 p-2 w-[176px] h-[64px] rounded-md shadow-md`}
    >
      {data.map((item) => {
        if (item === 1) {
          return (
            <div
              className="p-6 bg-red-500 rounded-full"
              key={Math.random()}
            ></div>
          );
        } else if (item === 2) {
          return (
            <div
              className="p-6 bg-yellow-500 rounded-full"
              key={Math.random()}
            ></div>
          );
        } else if (item === 3) {
          return (
            <div
              className="p-6 bg-green-500 rounded-full"
              key={Math.random()}
            ></div>
          );
        }
      })}
    </div>
  );
}
