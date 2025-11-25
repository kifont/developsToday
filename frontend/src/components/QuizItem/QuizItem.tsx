/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import './QuizItem.scss';

export default function QuizItem({
  quiz,
  onDelete,
}: {
  quiz: any;
  onDelete: (id: number) => void;
}) {
  return (
    <div key={quiz.id} className="quiz_item">
      <Link to={`/quiz/${quiz.id}`} className="quiz_item-link">
        {quiz.title} ({quiz.questionsCount} questions)
      </Link>

      <button
        onClick={() => { onDelete(quiz.id) }}
        className="quiz_item-btn"
      >
        Delete
      </button>
    </div>
  );
}
