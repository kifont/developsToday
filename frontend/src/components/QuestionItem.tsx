import type { Question } from "../types";

export default function QuestionItem({
  q,
  index,
}: {
  q: Question;
  index: number;
}) {
  return (
    <div
      style={{
        marginBottom: "1rem",
        border: "1px solid #ccc",
        padding: "0.5rem",
      }}
    >
      <p>
        <strong>Question{index + 1}:</strong> {q.text}
      </p>

      {q.type === "boolean" && <p>Answer: {q.correct ? "True" : "False"}</p>}

      {q.type === "input" && <p>Answer: {q.correct}</p>}

      {q.type === "checkbox" && (
        <div>
          <p>Options:</p>
          <ul>
            {q.options?.map((opt, i) => (
              <li key={i}>
                {opt} {q.correct?.includes(opt) && "(correct)"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
