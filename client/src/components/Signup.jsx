import React from "react";
import { useState } from "react";

export const Signup = () => {
  const [signData, setsSignData] = useState([]);
  return (
    <div>
      <h2>SignUp User</h2>
      <div>
        <div>
          <input type="text" name="" id="" placeholder="Name" />
        </div>
        <div>
          <input type="text" name="" id="" placeholder="Username" />
        </div>
        <div>
          <input type="email" name="" id="" placeholder="Email" />
        </div>
        <div>
          <input type="text" name="" id="" placeholder="Password" />
        </div>
        <div>
          <input type="submit" name="" id="" value={"Login"} />
        </div>
      </div>
    </div>
  );
};
