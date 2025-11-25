/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import type { Question, QuestionType } from "../types";

const CreateQuiz = () => {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);

  const addQuestion = (type: QuestionType) => {
    setQuestions([
      ...questions,
      { type, text: "", options: [], correct: null },
    ]);
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
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Quiz title"
      />
      {questions.map((q, idx) => (
        <div key={idx}>
          <input
            value={q.text}
            onChange={(e) => handleQuestionChange(idx, "text", e.target.value)}
            placeholder="Question text"
          />

          {q.type === "boolean" && (
            <div>
              <label>
                <input
                  type="radio"
                  name={`q${idx}`}
                  checked={q.correct === true}
                  onChange={() => handleQuestionChange(idx, "correct", true)}
                />
                True
              </label>
              <label>
                <input
                  type="radio"
                  name={`q${idx}`}
                  checked={q.correct === false}
                  onChange={() => handleQuestionChange(idx, "correct", false)}
                />
                False
              </label>
            </div>
          )}

          {q.type === "input" && (
            <input
              value={q.correct || ""}
              onChange={(e) =>
                handleQuestionChange(idx, "correct", e.target.value)
              }
              placeholder="Correct answer"
            />
          )}

          {q.type === "checkbox" && (
            <div>
              {q.options?.map((opt, i) => (
                <label key={i}>
                  <input
                    type="checkbox"
                    checked={q.correct?.includes(opt)}
                    onChange={() => {
                      const newCorrect = q.correct ? [...q.correct] : [];
                      if (newCorrect.includes(opt)) {
                        newCorrect.splice(newCorrect.indexOf(opt), 1);
                      } else {
                        newCorrect.push(opt);
                      }
                      handleQuestionChange(idx, "correct", newCorrect);
                    }}
                  />
                  {opt}
                </label>
              ))}
              <button
                onClick={() => {
                  const option = prompt("Enter new option");
                  if (option) {
                    const newOptions = [...(q.options || []), option];
                    handleQuestionChange(idx, "options", newOptions);
                  }
                }}
              >
                Add option
              </button>
            </div>
          )}

          <button onClick={() => removeQuestions(idx)}>Remove</button>
        </div>
      ))}
      <button onClick={() => addQuestion("boolean")}>Add Boolean</button>
      <button onClick={() => addQuestion("checkbox")}>Add Checkbox</button>
      <button onClick={() => addQuestion("input")}>Add Input</button>
      <button onClick={handleSubmit}>Create Quiz</button>
    </div>
  );
};

export default CreateQuiz;
