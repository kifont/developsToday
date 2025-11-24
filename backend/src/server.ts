import express from "express";
import cors from "cors";
import sequelize from "./db";
import quizzesRouter from "./routes/quizzes";

const app = express();

app.use(cors());
app.use(express.json());

// маршрути
app.use("/quizzes", quizzesRouter);

const PORT = process.env.PORT || 3000;

// запуск сервера
const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("DB connected");

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

start();