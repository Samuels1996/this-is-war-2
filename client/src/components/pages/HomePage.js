import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import AuthService from "../../utils/auth";

export default function HomePage() {
  return (
    <div>
      <h1>IT WORK</h1>
      <Link to="/login">Login</Link>
      <Link to="/testpage">
        <h3 className="text-light">TEST PAGE</h3>
      </Link>
      <div class="text-light">
        {AuthService.loggedIn() ? `LOGGED IN` : `LOG IN SUCKER`}
      </div>
    </div>
  );
}
