import { DataTypes, Model } from "sequelize";
import sequelize from "../db";

type QuestionType = "boolean" | "input" | "checkbox";

class Question extends Model {
  public id!: number;
  public quizId!: number;
  public text!: string;
  public type!: QuestionType;
  public options?: string[];
  public correct?: any;
}

Question.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    quizId: { type: DataTypes.INTEGER, allowNull: false },
    text: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    options: { type: DataTypes.JSON },
    correct: { type: DataTypes.JSON },
  },
  {
    sequelize,
    modelName: "Question",
    tableName: "questions",
  }
);

export default Question;