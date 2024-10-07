export default function Score({
  scores = [{ id: 0, value: 3, date: "03-11-230" }],
}) {
  return (
    <ul>
      {scores.map((item) => {
        return (
          <li key={item.id}>
            <span>{item.value}</span>
            <span>{item.date}</span>
          </li>
        );
      })}
    </ul>
  );
}
