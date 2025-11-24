import { Router } from "express";
import Quiz from "../models/Quiz";
import Question from "../models/Question";

const router = Router();

router.post("/", async (req, res) => {
	try {
		const { title, question } = req.body;

		const quiz = await Quiz.create({ title });

		if (question?.length) {
			await Promise.all(
				question.map((q: string) => 
					Question.create({ quizId: quiz.id, text: q})
				)
			);
		}

		res.json({ success: true, quiz });
	} catch (err) {
		res.status(500).json({ error: "failed to create quiz" });
	}
});

router.get("/", async (req, res) => {
  const quizzes = await Quiz.findAll({
		include: [{ model: Question, as: "questions" }],
	});

  res.json(quizzes);
});

router.get("/:id", async (req, res) => {
	const quiz = await Quiz.findByPk(req.params.id, {
		include: [{ model: Question, as: "questions" }],
	});

	if (!quiz) {
		return res.status(404).json({ error: "Quiz not found "});
	}

	res.json(quiz);
})

router.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const quiz = await Quiz.findByPk(id);

		if (!quiz) {
			return res.status(404).json({ error: "Quiz not found" });
		}

		await Question.destroy({
			where: { quizId: id },
		});

		await quiz.destroy();

		res.json({ message: "Quiz deleted" });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Server error" });
	}
});

export default router;