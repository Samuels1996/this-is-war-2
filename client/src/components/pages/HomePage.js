import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>IT WORK</h1>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  );
}
