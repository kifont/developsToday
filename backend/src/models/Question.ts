import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../db/index";
import Quiz from "./Quiz";

interface QuestionAttributes {
  id: number;
  quizId: number;
  text: string;
}

interface QuestionCreation extends Optional<QuestionAttributes, "id"> {}

class Question extends Model<QuestionAttributes, QuestionCreation>
  implements QuestionAttributes {
  public id!: number;
  public quizId!: number;
  public text!: string;
}

Question.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    quizId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, tableName: "questions" }
);

Quiz.hasMany(Question, { foreignKey: "quizId", as: "questions" });
Question.belongsTo(Quiz, { foreignKey: "quizId" });

export default Question;