import React, { useEffect } from "react";
import { useState } from "react";

export const Login = () => {
  const [quiz, setQuiz] = useState([]);
  useEffect(() => {
    const getQuiz = async () => {
      let res = await fetch("https://opentdb.com/api.php?amount=10");
      let data = await res.json();
      console.log(data);
    };
    getQuiz();
  }, []);
  return (
    <div>
      <h2>Login User</h2>
      <div>
        <div>
          <input type="text" name="" id="" placeholder="Username" />
        </div>
        <div>
          <input type="text" name="" id="" placeholder="Password" />
        </div>
        <div>
          <input type="submit" name="" id="" value={"Login"} />
        </div>
        <div>
          <p>Click here if you have not account</p>
        </div>
      </div>
    </div>
  );
};
