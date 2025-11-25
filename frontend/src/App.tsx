import "./App.css";
import QuizzesList from "./pages/QuizzesList.tsx";
import CreateQuiz from "./pages/CreateQuiz.tsx";
import QuizDetails from "./pages/QuizDetails.tsx";
import { Link, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: 20 }}>All Quizzes</Link>
        <Link to="/create">Create Quiz</Link>
      </nav>

      <Routes>
        <Route path="/" element={<QuizzesList />} />
        <Route path="/create" element={<CreateQuiz />} />
        <Route path="/quiz/:id" element={<QuizDetails />} />
      </Routes>
    </div>
  );
}
