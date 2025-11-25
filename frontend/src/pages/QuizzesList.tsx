/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { deleteQuiz, getQuizzes } from "../api";
import { Link } from "react-router-dom";
import QuizItem from "../components/QuizItem/QuizItem";

export default function QuizzesList() {
  const [quizzes, setQuizzes] = useState([]);

  const load = async () => {
    const data = await getQuizzes();
    setQuizzes(data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, []);

  return (
    <div>
      <h1>All Quizzes</h1>
      <Link to="/create" className="quizzes_list">Create new quiz</Link>

      {quizzes.map((q: any) => (
        <QuizItem key={q.id} quiz={q} onDelete={async () => {
          await deleteQuiz(q.id);
          await load();
        }}/>
      ))}
    </div>
  );
}
