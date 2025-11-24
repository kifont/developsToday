import ReactDOM from "react-dom/client";
import QuizzesList from "./pages/QuizzesList.tsx";
import CreateQuiz from "./pages/CreateQuiz.tsx";
import QuizDetails from "./pages/QuizDetails.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<QuizzesList />} />
      <Route path="/create" element={<CreateQuiz />}/>
      <Route path="/quiz/:id" element={<QuizDetails />}/>
    </Routes>
  </BrowserRouter>
);
