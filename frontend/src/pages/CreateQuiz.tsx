import React, { isValidElement, useState } from "react";
import type { Question, QuestionType } from "../types";

const CreateQuiz = () => {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);

  const addQuestion = (type: QuestionType) => {
    setQuestions([...questions, { type, text: "", options: [], correct: null }]);
  };

  const handleQuestionChange = (index: number, field: string, value: any) => {
    const newQuestions = [...questions];
    (newQuestions[index] as any)[field] = value;
    setQuestions(newQuestions);
  };

  const removeQuestions = (index: number) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:3000/quizzes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, questions }),
    });
    if (response.ok) alert("Quiz created!");
  };

  return (
    <div>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Quiz title" />
      {questions.map((q, idx) => (
        <div key={idx}>
          <input 
            value={q.text} 
            onChange={e => handleQuestionChange(idx, "text", e.target.value)}
            placeholder="Question text" 
          />
          <button onClick={() => removeQuestions(idx)}>Remove</button>
        </div>
      ))}
    </div>
  )
}