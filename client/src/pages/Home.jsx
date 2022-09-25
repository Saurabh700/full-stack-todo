import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Full Stack Todo Application
      <div>
        <Link to="/signup">Signup</Link>
        <br />
        <Link to="/login">Login</Link>
        <br />
        <Link to="/todos">Todos</Link>
        <br />
      </div>
    </div>
  );
};

export default Home;
