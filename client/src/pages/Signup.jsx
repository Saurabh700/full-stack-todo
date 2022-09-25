import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      Signup
      <input type="text" placeholder="email" />
      <input type="password" placeholder="password" />
      <Link to="/">Back</Link>
    </div>
  );
};

export default Signup;
