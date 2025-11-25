import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuiz } from "../api";
import type { Question } from "../types";
import QuestionItem from "../components/QuestionItem";

export default function QuizDetails() {
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await getQuiz(id!);
      setTitle(data.title);
      setQuestions(data.questions);
    };
    load();
  }, [id]);

  return (
    <div>
      <h1>{title}</h1>

      {questions.map((q, idx) => (
        <QuestionItem key={idx} q={q} index={idx} />
      ))}
    </div>
  );
}