import express from "express";
import cors from "cors";
import sequelize from "./db";
import quizzesRouter from "./routes/quizzes";
import { setupAssociations } from "./models/associations";
import Quiz from "./models/Quiz";
import Question from "./models/Question";

const app = express();

app.use(cors());
app.use(express.json());

// підключення асоціацій
setupAssociations();

// маршрути
app.use("/quizzes", quizzesRouter);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true }); // sync models to DB
    console.log("DB connected");

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

start();