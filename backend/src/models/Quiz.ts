import { DataTypes, Model } from "sequelize";
import sequelize from "../db";

class Quiz extends Model {
  public id!: number;
  public title!: string;
}

Quiz.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    modelName: "Quiz",
    tableName: "quizzes",
  }
);

export default Quiz;