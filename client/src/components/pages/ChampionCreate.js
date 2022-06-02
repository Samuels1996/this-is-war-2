//directs to champ select
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CreateChampion() {
  const [charType, setCharType] = useState("Select type");
  const changeType = (str) => {
    setCharType(str);
  };
  return (
    <div>
      <div>
        <Link to="/championselect">Champion Select</Link>
      </div>
      <div>
        <h2>Character Creation</h2>
        <form action="">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Character Name" />
          <div className="dropdown">
            <a
              className="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {charType}
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => changeType("Action")}
                >
                  Action
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => changeType("2")}
                >
                  Another action
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => changeType("3")}
                >
                  Something else here
                </button>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}
