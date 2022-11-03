const { Router } = require("express");
const quiz = require("../models/quizModel");

const quizRouter = Router();

quizRouter.post("/create", (req, res) => {
  let quizes = new quiz({
    ...req.body,
    question: req.body.question.map((ques) => {
      return {
        ...ques,
        answer: ques.answer.map((ans) => {
          return {
            name: ans,
            selected: false,
          };
        }),
      };
    }),
  });
  quizes.save();
  res.status(201).json({ success: true, data: quizes });
});

module.exports = quizRouter;
