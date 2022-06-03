//directs to champ select
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CreateChampion() {
  const [character, setCharacter] = useState({
    name: null,
    classType: null,
  });
  const [charType, setCharType] = useState("Select type");
  const changeType = (str) => {
    setCharType(str);
  };
  const [show, setShow] = useState(false);
  const menuClass = `dropdown-menu ${show ? " show" : ""}`;
  const changeshow = (boo) => {
    setShow(boo);
  };
  const handleSubmit = () => {
    const name = document.getElementById("name").value.trim();
    setCharacter({
      name: name,
      classType: charType,
    });
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
          <input type="text" placeholder="Character Name" id="name" />
          <div className="dropdown">
            <a
              className="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={() => changeshow(!show)}
            >
              {charType}
            </a>

            <ul className={menuClass} aria-labelledby="dropdownMenuLink">
              <li>
                <button
                  className="dropdown-item"
                  onClick={(e) => {
                    e.preventDefault();
                    changeType("Wizard");
                  }}
                >
                  Wizard
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={(e) => {
                    e.preventDefault();
                    changeType("Archer");
                  }}
                >
                  Archer
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={(e) => {
                    e.preventDefault();
                    changeType("Warrior");
                  }}
                >
                  Warrior
                </button>
              </li>
            </ul>
          </div>
          <button
            className="bg-primary"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
