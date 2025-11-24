import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../db/index";

interface QuizAttributes {
  id: number;
  title: string;
}

interface QuizCreation extends Optional<QuizAttributes, "id"> {}

class Quiz extends Model<QuizAttributes, QuizCreation>
  implements QuizAttributes {
  public id!: number;
  public title!: string;
}

Quiz.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, tableName: "quizzes" }
);

export default Quiz;