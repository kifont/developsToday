import { useEffect, useState } from "react";
import { deleteQuiz, getQuizzes } from "../api";
import { Link } from "react-router-dom";

export default function QuizzesList() {
  const [quizzes, setQuizzes] = useState([]);

  const load = async () => {
    setQuizzes(await getQuizzes());
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h1>All Quizzes</h1>
      <Link to="/craete">Create new quiz</Link>

      {quizzes.map((q: any) => (
        <div key={q.id}>
          <Link to={`/quiz/${q.id}`}>
            {q.title} ({q.questionsCount} questions)
          </Link>

          <button onClick={async () => {
            await deleteQuiz(q.id);
            load();
          }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}