const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db/db");
const adminRouter = require("./routes/adminRoutes");
const userRouter = require("./routes/userRoutes");
const quizRouter = require("./routes/quiz");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// app.use("/", (req, res) => {
//     res.send("quiz")
// })

app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/quiz", quizRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch {
    console.log("not connected");
  }
  console.log("Server started");
});
