import Quiz from "./Quiz";
import Question from "./Question";

export function setupAssociations() {
  Quiz.hasMany(Question, { as: "questions", foreignKey: "quizId" });
  Question.belongsTo(Quiz, { foreignKey: "quizId" });
}