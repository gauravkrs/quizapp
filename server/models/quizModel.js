const { Schema, model } = require("mongoose");

const quizSchema = new Schema({
  name: { type: String },
  question: [
    {
      type: Object,
      contain: {
        answer: { type: Array },
        correctAnswer: String,
      },
    },
  ],
  updated_at: { type: Date, default: Date.now },
});

const quiz = model("quiz", quizSchema);

module.exports = quiz;
